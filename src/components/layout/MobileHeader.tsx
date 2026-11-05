"use client";
import { useState } from "react";
import { FaBars, FaXmark, FaCircleHalfStroke, FaFileArrowDown } from "react-icons/fa6";
import { profile, sections, type SectionId } from "@/src/data/portfolio";
import { useApp } from "../app/context";
import Avatar from "../ui/Avatar";
import { StatusDot } from "./ProfileCard";

export default function MobileHeader({ active, onNavigate }: { active: SectionId; onNavigate: (id: SectionId) => void }) {
    const [open, setOpen] = useState(false);
    const { toggleTheme, downloadResume } = useApp();

    const go = (id: SectionId) => { onNavigate(id); setOpen(false); };

    return (
        <header className="lg:hidden relative z-30 panel shrink-0">
            <div className="flex items-center gap-3 px-4 py-3">
                <div className="relative">
                    <Avatar size={44} />
                    <StatusDot className="-bottom-0.5 -right-0.5" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-heading font-bold leading-tight truncate">{profile.fullName}</p>
                    <p className="text-xs text-muted truncate">{profile.shortRole}</p>
                </div>
                <button onClick={toggleTheme} aria-label="Change theme" className="w-9 h-9 grid place-items-center rounded-full bg-board border border-line text-muted cursor-pointer">
                    <FaCircleHalfStroke />
                </button>
                <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} className="w-9 h-9 grid place-items-center rounded-full bg-primary text-on-primary cursor-pointer">
                    {open ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* quick horizontal nav */}
            <nav className="flex gap-1 overflow-x-auto no-scrollbar px-3 pb-3">
                {sections.map(({ id, label, icon: Icon }) => (
                    <button key={id} onClick={() => go(id)}
                        className={`flex items-center gap-1.5 shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${id === active ? "bg-primary text-on-primary" : "bg-board text-muted"}`}>
                        <Icon /> {label}
                    </button>
                ))}
            </nav>

            {open && (
                <div className="absolute left-0 right-0 top-full mt-2 panel p-3 animate-modal">
                    <ul className="grid grid-cols-2 gap-2">
                        {sections.map(({ id, label, icon: Icon }) => (
                            <li key={id}>
                                <button onClick={() => go(id)}
                                    className={`w-full flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-bold cursor-pointer ${id === active ? "bg-primary-soft text-primary" : "bg-board text-muted"}`}>
                                    <Icon /> {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={downloadResume} className="btn btn-primary w-full mt-3"><FaFileArrowDown /> Download Resume</button>
                </div>
            )}
        </header>
    );
}
