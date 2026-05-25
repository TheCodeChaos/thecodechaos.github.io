import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

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

const members = defineCollection({
  loader: glob({
    pattern: '**/*.{json,yaml,yml}',
    base: './src/content/members',
  }),
  schema: z.object({
    name: z.string(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    instagram: z.string().url().optional(),
    group: z.string().optional(),
    badge: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { blog, members };
