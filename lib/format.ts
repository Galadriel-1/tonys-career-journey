const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatOne(d?: string | null): string {
  if (!d) return "";
  if (d.toLowerCase() === "present") return "Present";
  const parts = d.split("-");
  if (parts.length === 1) return parts[0];
  const m = parseInt(parts[1], 10);
  if (Number.isNaN(m) || m < 1 || m > 12) return parts[0];
  return `${MONTHS[m - 1]} ${parts[0]}`;
}

export function formatPeriod(start?: string | null, end?: string | null): string {
  const s = formatOne(start);
  const e = formatOne(end);
  if (s && e) return `${s} — ${e}`;
  return s || e;
}
