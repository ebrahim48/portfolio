const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parse = (ym: string) => {
    const [y, m] = ym.split("-").map(Number);
    return { y, m: (m || 1) - 1 };
};

export function formatMonth(ym?: string): string {
    if (!ym) return "Present";
    const { y, m } = parse(ym);
    return `${MONTHS[m]} ${y}`;
}

export function formatDate(iso: string): string {
    const d = new Date(iso);
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/** "1 yr 4 mos" style duration between two YYYY-MM strings (end defaults to now). */
export function duration(start: string, end?: string): string {
    const s = parse(start);
    const now = new Date();
    const e = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() };
    const total = Math.max(1, (e.y - s.y) * 12 + (e.m - s.m) + 1);
    const yrs = Math.floor(total / 12);
    const mos = total % 12;
    const out: string[] = [];
    if (yrs) out.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
    if (mos) out.push(`${mos} mo${mos > 1 ? "s" : ""}`);
    return out.join(" ");
}
