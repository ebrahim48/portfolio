"use client";
import { useState } from "react";
import { FaChevronLeft, FaCircleHalfStroke, FaArrowPointer, FaFileArrowDown } from "react-icons/fa6";
import { profile, sections, socials, type SectionId } from "@/src/data/portfolio";
import { useApp } from "../app/context";
import ProfileCard from "./ProfileCard";

export default function Sidebar({ active, onNavigate }: { active: SectionId; onNavigate: (id: SectionId) => void }) {
    const [shrink, setShrink] = useState(false);
    const { toggleTheme, theme, magicCursor, toggleMagicCursor, downloadResume } = useApp();

    return (
        <aside
            className={`hidden lg:flex relative panel flex-col shrink-0 transition-[width] duration-500 ${shrink ? "w-[112px]" : "w-[280px]"}`}
        >
            <button
                onClick={() => setShrink((s) => !s)}
                aria-label="Toggle sidebar"
                className="absolute -right-4 top-16 z-10 w-8 h-8 grid place-items-center rounded-full bg-primary text-on-primary shadow-lg cursor-pointer hover:scale-110 transition-transform"
            >
                <FaChevronLeft className={`text-xs transition-transform duration-500 ${shrink ? "rotate-180" : ""}`} />
            </button>

            <div className={`pt-8 pb-5 border-b border-line ${shrink ? "px-3" : "px-6"}`}>
                <ProfileCard compact={shrink} />
            </div>

            <nav className="flex-1 overflow-y-auto no-scrollbar py-4 px-3">
                <ul className="space-y-1">
                    {sections.map(({ id, label, icon: Icon }) => {
                        const isActive = id === active;
                        return (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => { e.preventDefault(); onNavigate(id); }}
                                    title={label}
                                    className={`group flex items-center gap-3 rounded-xl px-4 py-2.5 font-bold text-sm transition-all ${shrink ? "justify-center" : ""} ${isActive
                                        ? "bg-primary-soft text-primary"
                                        : "text-muted hover:text-texts hover:bg-board"}`}
                                >
                                    <Icon className={`shrink-0 text-base transition-transform ${isActive ? "" : "group-hover:scale-110"}`} />
                                    {!shrink && <span>{label}</span>}
                                    {!shrink && isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className={`border-t border-line p-4 space-y-3 ${shrink ? "px-3" : ""}`}>
                <div className={`flex ${shrink ? "flex-col items-center" : "justify-center"} gap-2`}>
                    <ToolButton label={`Change theme (${theme === "dark" ? "Light" : "Dark"} mode)`} onClick={toggleTheme}>
                        <FaCircleHalfStroke />
                    </ToolButton>
                    <ToolButton label={`Magic Cursor: ${magicCursor ? "On" : "Off"}`} onClick={toggleMagicCursor} active={magicCursor}>
                        <FaArrowPointer />
                    </ToolButton>
                    {!shrink && socials.slice(0, 2).map(({ label, href, icon: Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                            className="w-9 h-9 grid place-items-center rounded-full bg-board border border-line text-muted hover:text-primary hover:border-primary transition-colors">
                            <Icon />
                        </a>
                    ))}
                </div>
                <button onClick={downloadResume} className={`btn btn-primary w-full ${shrink ? "px-0" : ""}`} title="Download Resume">
                    <FaFileArrowDown />
                    {!shrink && "Download Resume"}
                </button>
                {!shrink && <p className="text-center text-[11px] text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>}
            </div>
        </aside>
    );
}

function ToolButton({ label, onClick, children, active }: { label: string; onClick: () => void; children: React.ReactNode; active?: boolean }) {
    return (
        <button onClick={onClick} aria-label={label} title={label}
            className={`w-9 h-9 grid place-items-center rounded-full border transition-colors cursor-pointer ${active
                ? "bg-primary text-on-primary border-primary"
                : "bg-board border-line text-muted hover:text-primary hover:border-primary"}`}>
            {children}
        </button>
    );
}
