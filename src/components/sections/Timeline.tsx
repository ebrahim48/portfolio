import { FaRegClock, FaRegBuilding, FaLocationDot } from "react-icons/fa6";
import type { TimelineItem } from "@/src/data/portfolio";
import { duration, formatMonth } from "@/src/lib/date";
import { rich } from "@/src/lib/rich";

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <ol className="relative">
            <span className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-line" aria-hidden />
            {items.map((item, i) => {
                const Icon = item.icon;
                const current = !item.end;
                return (
                    <li key={i} className="relative pl-14 sm:pl-20 pb-8 last:pb-0 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                        <span className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 grid place-items-center rounded-2xl border ${current ? "bg-primary text-on-primary border-primary" : "bg-board text-primary border-line"}`}>
                            <Icon />
                        </span>
                        <div className="board board-hover p-5 sm:p-6">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h4 className="text-lg sm:text-xl font-bold">{rich(item.title)}</h4>
                                    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mt-1">
                                        <span className="flex items-center gap-1.5"><FaRegBuilding /> {item.org}</span>
                                        <span className="flex items-center gap-1.5"><FaLocationDot /> {item.location}</span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className={`tag ${current ? "!text-primary !border-primary/40" : ""}`}>
                                        <FaRegClock /> {formatMonth(item.start)} – {formatMonth(item.end)}
                                    </span>
                                    <p className="text-xs text-muted mt-1.5">{duration(item.start, item.end)}</p>
                                </div>
                            </div>
                            <p className="text-muted mt-4 leading-relaxed">{rich(item.text)}</p>
                            {item.bullets && (
                                <ul className="mt-3 space-y-2">
                                    {item.bullets.map((b) => (
                                        <li key={b} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{b}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {item.tags && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                                </div>
                            )}
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}
