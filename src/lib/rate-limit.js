// Basic per-IP rate limiting for API routes. Serverless instances don't share
// memory, so this only blunts bursts against a single instance; add a Vercel
// Firewall rule if an endpoint ever gets hammered. Limits should stay
// generous because many mobile users in Nigeria share carrier IPs.
export function createRateLimiter({ windowMs, max }) {
  const hits = new Map();

  return function isRateLimited(ip) {
    const now = Date.now();
    const entry = hits.get(ip);
    if (!entry || entry.resetAt <= now) {
      if (hits.size >= 10_000) hits.clear();
      hits.set(ip, { count: 1, resetAt: now + windowMs });
      return false;
    }
    entry.count += 1;
    return entry.count > max;
  };
}

export function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
