import type { APIRoute } from 'astro';
import { cvMarkdown } from '../lib/cv-text';

/** Full CV in Markdown, English first then Spanish. Generated from src/data at build time. */
export const GET: APIRoute = () =>
  new Response([cvMarkdown('en'), '---', '', cvMarkdown('es')].join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
