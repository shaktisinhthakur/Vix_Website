/**
 * Formats an ISO date (YYYY-MM-DD) for display, e.g. "Sep 14, 2026".
 * Parsed as UTC so the rendered date never shifts by a day across timezones.
 */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}