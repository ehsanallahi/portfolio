/**
 * Minimal fixed-window rate limiter kept in memory.
 *
 * On serverless platforms each instance has its own memory, so this is a
 * best-effort guard against bursts, not a hard global limit. Swap for a shared
 * store (e.g. Upstash Redis) if the form starts attracting real abuse.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, { limit, windowMs }: { limit: number; windowMs: number }) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    if (hits.size > 5_000) {
      for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
    }
    return true;
  }

  entry.count += 1;
  return entry.count <= limit;
}
