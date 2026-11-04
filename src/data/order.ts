// Tiles appear in the order listed. Names are filenames in src/content/work/ without `.md`.

export const home = [
	'falling-engine',
	'collabxr',
	'mifluids',
	'echoes-of-isovios',
];

// /work sections, top to bottom. Add, remove or reorder entries here; each
// project can be in only one section. Projects missing from every section are
// appended to the last one. `subtitle` is optional.
export const sections: { title: string; subtitle?: string; items: string[] }[] = [
	{
		title: 'Featured Work',
		subtitle: 'My favorite and most impactful projects.',
		items: [
			'falling-engine',
			'collabxr',
			'mifluids',
			'echoes-of-isovios',
		],
	},
	{
		title: 'Other Works',
		subtitle: 'Miscellaneous games and software applications.',
		items: [
			'nyc-service-watch',
			'crunchtime',
			'wyrmhole',
		],
	},
	{
		title: 'Game Jams',
		subtitle: 'I love game jams!',
		items: [
			'chat-are-we-broke',
			'swifter-wet-jet',
			'echo-chamber',
			'take-care',
			'drag',
			'burnup',
			'sos-pito',
			'marianne',
			'spitfire',
		],
	},
];
