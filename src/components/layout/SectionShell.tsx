"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { FaUpRightAndDownLeftFromCenter, FaDownLeftAndUpRightToCenter, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { sections, type NavSection, type SectionId } from "@/src/data/portfolio";
import { rich } from "@/src/lib/rich";
import { useApp } from "../app/context";

export default function SectionShell({ section, children, onNavigate }: { section: NavSection; children: ReactNode; onNavigate: (id: SectionId) => void }) {
    const { fullscreen, setFullscreen } = useApp();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => { scrollRef.current?.scrollTo({ top: 0 }); }, [section.id]);

    const idx = sections.findIndex((s) => s.id === section.id);
    const prev = sections[idx - 1];
    const next = sections[idx + 1];

    return (
        <main className="relative flex-1 min-w-0 min-h-0 panel overflow-hidden corner-deco">
            <button
                onClick={() => setFullscreen(!fullscreen)}
                aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="hidden lg:grid absolute top-5 right-5 z-10 w-9 h-9 place-items-center rounded-full bg-board border border-line text-muted hover:text-primary hover:border-primary cursor-pointer transition-colors"
            >
                {fullscreen ? <FaDownLeftAndUpRightToCenter /> : <FaUpRightAndDownLeftFromCenter />}
            </button>

            <div ref={scrollRef} className="h-full overflow-y-auto scroll-area">
                <section id={section.id} key={section.id} className="animate-section px-5 sm:px-10 xl:px-16 pt-12 pb-10">
                    <header className="flex flex-col items-center text-center mb-10 sm:mb-14">
                        <p className="font-display font-bold text-muted text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">{section.prefix}</p>
                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">{rich(section.title)}</h2>
                        <div className="flex items-center gap-1.5 mt-4" aria-hidden>
                            <span className="w-1.5 h-1 rounded bg-texts/60" />
                            <span className="w-8 h-1 rounded bg-primary" />
                            <span className="w-1.5 h-1 rounded bg-texts/60" />
                        </div>
                    </header>

                    <div className="space-y-14 max-w-6xl mx-auto">{children}</div>

                    {/* prev / next pager */}
                    <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-line flex justify-between gap-3">
                        {prev ? (
                            <button onClick={() => onNavigate(prev.id)} className="btn btn-outline"><FaChevronLeft className="text-xs" /> {prev.label}</button>
                        ) : <span />}
                        {next && (
                            <button onClick={() => onNavigate(next.id)} className="btn btn-outline">{next.label} <FaChevronRight className="text-xs" /></button>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
