import { getCollection, type CollectionEntry } from 'astro:content';
import { major, minor } from './order';

// Returns work entries in the order of `list`. Unknown or repeated names fail
// the build, as does a name listed in both `major` and `minor`. With
// `appendUnlisted`, entries in neither list are appended with a warning so new
// work still shows up.
export async function getWork(list: string[], { appendUnlisted = false } = {}): Promise<CollectionEntry<'work'>[]> {
	const entries = await getCollection('work');
	const byId = new Map(entries.map((entry) => [entry.id, entry]));

	const seen = new Set<string>();
	for (const id of list) {
		if (!byId.has(id)) throw new Error(`src/data/order.ts lists "${id}", but src/content/work/${id}.md doesn't exist.`);
		if (seen.has(id)) throw new Error(`src/data/order.ts lists "${id}" more than once in the same list.`);
		seen.add(id);
	}

	for (const id of major) {
		if (minor.includes(id)) throw new Error(`src/data/order.ts lists "${id}" in both \`major\` and \`minor\`.`);
	}

	const ordered = list.map((id) => byId.get(id)!);

	if (appendUnlisted) {
		const listed = new Set([...major, ...minor]);
		const missing = entries.filter((entry) => !listed.has(entry.id));
		for (const entry of missing) {
			console.warn(`[order] "${entry.id}" isn't listed in src/data/order.ts; showing it at the end of /work.`);
		}
		ordered.push(...missing);
	}

	return ordered;
}

// Labeled rows under a major tile's summary. Empty rows are skipped.
export function tileRows(item: CollectionEntry<'work'>): [string, string][] {
	const { team, stack, highlights } = item.data;
	const rows: [string, string | undefined][] = [
		['team', team],
		['stack', stack.join(', ')],
		['highlights', highlights.join(', ')],
	];
	return rows.filter((row): row is [string, string] => Boolean(row[1]));
}

// Compact tile meta: team if set, otherwise the latest year in the period.
export function tileMeta(item: CollectionEntry<'work'>): string {
	const { team, period } = item.data;
	return team ?? period.match(/\d{4}(?!.*\d{4})/)?.[0] ?? period;
}
