import { file, glob } from 'astro/loaders';
import { defineCollection, reference } from 'astro:content';
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
    author: reference('members'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const members = defineCollection({
  loader: file('./src/content/members.yaml'),
  schema: z.object({
    name: z.string(),
    role: z.string().default('Member'),
    bio: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    avatar: z.string().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, members };
