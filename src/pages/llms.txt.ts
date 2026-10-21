import type { APIRoute } from 'astro';
import { llmsIndex } from '../lib/cv-text';

/** AI-crawler friendly index (https://llmstxt.org). Generated from src/data at build time. */
export const GET: APIRoute = () =>
  new Response(llmsIndex(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
