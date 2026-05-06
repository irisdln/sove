import { defineCollection, z } from 'astro:content';

const soins = defineCollection({
  type: 'content',
  schema: z.object({
    titre:       z.string(),
    resume:      z.string(),
    duree:       z.string(),
    tarif:       z.number(),
    ordre:       z.number().default(99),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { soins };
