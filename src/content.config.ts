import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/blog',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
