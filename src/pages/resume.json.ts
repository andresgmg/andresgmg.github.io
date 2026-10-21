import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import profilePhoto from '../assets/profile.jpg';
import { profile } from '../data';
import { jsonResume } from '../lib/cv-text';

/** Machine-readable CV in the JSON Resume schema (https://jsonresume.org/schema). */
export const GET: APIRoute = async () => {
  const photo = await getImage({ src: profilePhoto, width: 640, format: 'webp' });
  const imageUrl = new URL(photo.src, profile.website).href;
  return new Response(JSON.stringify(jsonResume(imageUrl), null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
