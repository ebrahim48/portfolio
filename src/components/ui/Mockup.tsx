import type { Project } from "@/src/data/portfolio";

/**
 * Generated, design-style preview used when a project has no real image.
 * `variant` lets the gallery render a few different "screens" per project.
 */
export default function Mockup({ project, variant = 0, className = "" }: { project: Project; variant?: number; className?: string }) {
    const [c1, c2] = project.color;
    const isMobile = true; // all projects are mobile apps
    const bg = `linear-gradient(135deg, ${c1}, ${c2})`;

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`} style={{ background: bg }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 90%, #000 0, transparent 45%)" }} />
            {isMobile ? <Phones c1={c1} variant={variant} /> : <Browser c1={c1} c2={c2} variant={variant} dashboard={false} />}
        </div>
    );
}

function Phones({ c1, variant }: { c1: string; variant: number }) {
    const offsets = variant % 2 === 0 ? ["translate-y-6", "-translate-y-2", "translate-y-8"] : ["-translate-y-3", "translate-y-5", "-translate-y-1"];
    return (
        <div className="absolute inset-0 flex items-center justify-center gap-[4%] px-[6%]">
            {[0, 1, 2].map((i) => (
                <div key={i} className={`relative w-[26%] aspect-[9/19] rounded-[14%/7%] bg-white/95 shadow-2xl p-[3%] ${offsets[i]} ${i === 1 ? "scale-110 z-10" : "opacity-90"}`}>
                    <div className="mx-auto w-1/3 h-[2.5%] rounded-full bg-black/80 mb-[8%]" />
                    <div className="h-[22%] rounded-lg mb-[6%]" style={{ background: c1, opacity: 0.85 - i * 0.15 }} />
                    <div className="space-y-[5%]">
                        <div className="h-2 w-3/4 rounded bg-black/15" />
                        <div className="h-2 w-1/2 rounded bg-black/10" />
                        <div className="grid grid-cols-2 gap-[6%] pt-[4%]">
                            {[0, 1, 2, 3].map((k) => <div key={k} className="aspect-square rounded-md bg-black/[.06]" />)}
                        </div>
                        <div className="h-[9%] min-h-3 rounded-full mt-[6%]" style={{ background: c1 }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function Browser({ c1, c2, variant, dashboard }: { c1: string; c2: string; variant: number; dashboard: boolean }) {
    return (
        <div className="absolute inset-[9%] rounded-xl bg-white/95 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-black/5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-3 h-2 w-1/3 rounded bg-black/10" />
            </div>
            {dashboard ? (
                <div className="flex-1 flex">
                    <div className="w-[18%] bg-black/[.04] p-2 space-y-2">
                        {[0, 1, 2, 3, 4].map((k) => <div key={k} className="h-2 rounded" style={{ background: k === variant % 5 ? c1 : "rgba(0,0,0,.1)" }} />)}
                    </div>
                    <div className="flex-1 p-3 space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                            {[c1, c2, "#94a3b8"].map((c, k) => <div key={k} className="h-8 rounded-md" style={{ background: c, opacity: 0.8 }} />)}
                        </div>
                        <div className="flex items-end gap-1.5 h-[45%]">
                            {[40, 65, 50, 80, 60, 90, 70, 55, 85].map((h, k) => (
                                <div key={k} className="flex-1 rounded-t" style={{ height: `${(h + variant * 7) % 100}%`, background: k % 2 ? c1 : c2, opacity: 0.85 }} />
                            ))}
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-full rounded bg-black/10" />
                            <div className="h-1.5 w-4/5 rounded bg-black/10" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 p-[4%] flex flex-col gap-[5%]">
                    <div className="flex justify-between items-center">
                        <div className="h-2.5 w-14 rounded" style={{ background: c1 }} />
                        <div className="flex gap-2">{[0, 1, 2].map((k) => <div key={k} className="h-1.5 w-8 rounded bg-black/15" />)}</div>
                    </div>
                    <div className={`flex-1 grid ${variant % 2 ? "grid-cols-[1fr_1.2fr]" : "grid-cols-[1.2fr_1fr]"} gap-[5%] items-center`}>
                        <div className={`space-y-2 ${variant % 2 ? "order-2" : ""}`}>
                            <div className="h-3 w-11/12 rounded bg-black/70" />
                            <div className="h-3 w-3/4 rounded bg-black/70" />
                            <div className="h-1.5 w-full rounded bg-black/15" />
                            <div className="h-1.5 w-5/6 rounded bg-black/15" />
                            <div className="h-5 w-20 rounded-full mt-2" style={{ background: c1 }} />
                        </div>
                        <div className="h-full min-h-16 rounded-lg" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((k) => <div key={k} className="h-6 rounded-md bg-black/[.06]" />)}
                    </div>
                </div>
            )}
        </div>
    );
}
