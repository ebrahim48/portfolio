"use client";
import { useEffect, useState } from "react";
import { profile } from "@/src/data/portfolio";
import Avatar from "../ui/Avatar";

export default function Preloader({ onDone }: { onDone: () => void }) {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setLeaving(true), 1700);
        const t2 = setTimeout(onDone, 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onDone]);

    return (
        <div className={`fixed inset-0 z-[100] grid place-items-center bg-bg transition-opacity duration-500 ${leaving ? "opacity-0" : "opacity-100"}`}>
            <div className="panel w-[min(92vw,380px)] px-8 py-10 text-center animate-modal">
                <div className="mx-auto w-fit mb-5 animate-pulse">
                    <Avatar size={84} />
                </div>
                <h1 className="font-display text-xl tracking-widest uppercase">{profile.name}</h1>
                <p className="text-muted text-sm mt-1">{profile.shortRole}</p>
                <div className="mt-7 h-1.5 w-full rounded-full bg-board overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ animation: "preloader-bar 1.6s ease-in-out forwards" }} />
                </div>
                <p className="mt-3 text-xs text-muted font-display tracking-wider">Loading...</p>
            </div>
        </div>
    );
}
