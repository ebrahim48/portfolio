/** Animated floating "shards" behind the layout. */
const SHARDS = [
    { l: "5%", t: "12%", s: 90, d: 18 }, { l: "82%", t: "8%", s: 140, d: 24 },
    { l: "70%", t: "70%", s: 110, d: 20 }, { l: "15%", t: "75%", s: 160, d: 28 },
    { l: "45%", t: "40%", s: 70, d: 16 }, { l: "92%", t: "45%", s: 60, d: 14 },
    { l: "30%", t: "5%", s: 50, d: 12 }, { l: "55%", t: "88%", s: 80, d: 22 },
];

export default function Background() {
    return (
        <div aria-hidden className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, var(--bg-contrast), transparent 60%), radial-gradient(ellipse at bottom right, var(--bg-contrast), transparent 55%)" }} />
            {SHARDS.map((s, i) => (
                <span
                    key={i}
                    className="absolute rounded-2xl border border-line"
                    style={{
                        left: s.l, top: s.t, width: s.s, height: s.s,
                        background: "var(--shard)",
                        animation: `float-shard ${s.d}s ease-in-out ${i * -2}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
