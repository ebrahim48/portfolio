"use client";

export default function FilterTabs<T extends string>({ options, value, onChange, counts }: {
    options: T[]; value: T; onChange: (v: T) => void; counts?: Record<string, number>;
}) {
    return (
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
            {options.map((opt) => {
                const active = opt === value;
                return (
                    <button
                        key={opt}
                        role="tab"
                        aria-selected={active}
                        onClick={() => onChange(opt)}
                        className={`px-4 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${active
                            ? "bg-primary text-on-primary border-primary shadow-[0_6px_24px_var(--primary-soft)]"
                            : "bg-board text-muted border-line hover:text-primary hover:border-primary"}`}
                    >
                        {opt}
                        {counts && <span className={`ml-2 text-xs ${active ? "opacity-70" : "opacity-60"}`}>{counts[opt] ?? 0}</span>}
                    </button>
                );
            })}
        </div>
    );
}
