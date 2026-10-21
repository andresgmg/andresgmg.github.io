import { experience } from '../data/experience';

/**
 * Whole years of professional experience, computed from the earliest role start date so the
 * figure never goes stale. Used by the hero stats and the profile summary (web, CV, llms.txt…).
 */
export function yearsOfExperience(now = new Date()): number {
  const earliest = experience.map((e) => e.start).sort()[0];
  if (!earliest) return 0;
  const [year, month] = earliest.split('-').map(Number);
  const months =
    (now.getUTCFullYear() - (year ?? now.getUTCFullYear())) * 12 +
    (now.getUTCMonth() + 1 - (month ?? 1));
  return Math.max(1, Math.floor(months / 12));
}
