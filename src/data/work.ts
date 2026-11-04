import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from './order';

// Returns work entries in the order of `list`. Unknown or repeated names fail
// the build.
export async function getWork(list: string[]): Promise<CollectionEntry<'work'>[]> {
	const entries = await getCollection('work');
	const byId = new Map(entries.map((entry) => [entry.id, entry]));

	const seen = new Set<string>();
	for (const id of list) {
		if (!byId.has(id)) throw new Error(`src/data/order.ts lists "${id}", but src/content/work/${id}.md doesn't exist.`);
		if (seen.has(id)) throw new Error(`src/data/order.ts lists "${id}" more than once in the same list.`);
		seen.add(id);
	}

	return list.map((id) => byId.get(id)!);
}

// Returns the /work sections from src/data/order.ts with their entries. A
// project listed in more than one section fails the build. Projects in no
// section are appended to the last one with a warning so new work still shows up.
export async function getSections() {
	const owner = new Map<string, string>();
	for (const section of sections) {
		for (const id of section.items) {
			const other = owner.get(id);
			if (other && other !== section.title) {
				throw new Error(`src/data/order.ts lists "${id}" in both "${other}" and "${section.title}".`);
			}
			owner.set(id, section.title);
		}
	}

	const result = await Promise.all(sections.map(async (section) => ({
		...section,
		id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
		entries: await getWork(section.items),
	})));

	const missing = (await getCollection('work')).filter((entry) => !owner.has(entry.id));
	for (const entry of missing) {
		console.warn(`[order] "${entry.id}" isn't in any section in src/data/order.ts; showing it at the end of /work.`);
	}
	result.at(-1)?.entries.push(...missing);

	return result;
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
	// const { team, period } = item.data;
	// return team ?? period.match(/\d{4}(?!.*\d{4})/)?.[0] ?? period;
	return item.data.period;
}
