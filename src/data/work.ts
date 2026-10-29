import { getCollection, type CollectionEntry } from 'astro:content';
import { work as workOrder } from './order';

// Returns work entries in the order of `list`. Unknown or repeated names fail
// the build. When fetching the full work list, entries missing from it are
// appended with a warning so new work still shows up.
export async function getWork(list: string[]): Promise<CollectionEntry<'work'>[]> {
	const entries = await getCollection('work');
	const byId = new Map(entries.map((entry) => [entry.id, entry]));

	const seen = new Set<string>();
	for (const id of list) {
		if (!byId.has(id)) throw new Error(`src/data/order.ts lists "${id}", but src/content/work/${id}.md doesn't exist.`);
		if (seen.has(id)) throw new Error(`src/data/order.ts lists "${id}" more than once in the same list.`);
		seen.add(id);
	}

	const ordered = list.map((id) => byId.get(id)!);

	if (list === workOrder) {
		const missing = entries.filter((entry) => !seen.has(entry.id));
		for (const entry of missing) {
			console.warn(`[order] "${entry.id}" isn't listed in src/data/order.ts; showing it at the end of /work.`);
		}
		ordered.push(...missing);
	}

	return ordered;
}
