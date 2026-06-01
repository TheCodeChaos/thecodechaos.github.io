import { glob, file } from 'astro/loaders';
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
  loader: file('src/data/members.yaml'),
  schema: z.object({
    name: z.string(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    website: z.string().optional(),
    avatar: z.string().optional(),
    group: z.string().optional(),
    badge: z.string().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, members };
