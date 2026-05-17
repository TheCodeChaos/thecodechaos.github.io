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
    role: z.string(),
    team: z.string().optional(),
    bio: z.string().optional(),
    skills: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    website: z.string().url().optional(),
    avatar: z.string().optional(),
    joined: z.coerce.date().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, members };
