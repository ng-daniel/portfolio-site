import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		kind: z.enum(['game', 'project']),
		description: z.string(),
		summary: z.string(),
		period: z.string(),
		// Spec block on the detail page, and tile meta. All optional; empty rows are skipped.
		role: z.string().optional(),
		team: z.string().optional(),
		stack: z.array(z.string()).default([]),
		highlights: z.array(z.string()).default([]),
		// Paths under public/. Gallery entries ending in .mp4 or .webm render as reels.
		reel: z.string(),
		poster: z.string(),
		gallery: z.array(z.string()).default([]),
		links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
	}),
});

export const collections = { work };
