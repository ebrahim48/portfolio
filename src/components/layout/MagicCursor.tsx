"use client";
import { useEffect, useRef } from "react";

/** A soft circle that follows the mouse and grows over interactive elements. */
export default function MagicCursor({ enabled }: { enabled: boolean }) {
    const dot = useRef<HTMLDivElement>(null);
    const ring = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!enabled) return;
        document.documentElement.classList.add("magic-cursor-active");
        let x = -100, y = -100, rx = -100, ry = -100, raf = 0, hover = false;

        const move = (e: MouseEvent) => {
            x = e.clientX; y = e.clientY;
            hover = !!(e.target as HTMLElement).closest("a,button,input,textarea,[role=tab]");
        };
        const loop = () => {
            rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
            if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
            if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) scale(${hover ? 1.8 : 1})`;
            raf = requestAnimationFrame(loop);
        };
        window.addEventListener("mousemove", move);
        raf = requestAnimationFrame(loop);
        return () => {
            document.documentElement.classList.remove("magic-cursor-active");
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(raf);
        };
    }, [enabled]);

    if (!enabled) return null;
    return (
        <>
            <div ref={ring} className="fixed top-0 left-0 z-[120] pointer-events-none -ml-5 -mt-5 w-10 h-10 rounded-full border-2 border-primary transition-[scale] duration-200" style={{ mixBlendMode: "difference" }} />
            <div ref={dot} className="fixed top-0 left-0 z-[121] pointer-events-none -ml-1 -mt-1 w-2 h-2 rounded-full bg-primary" />
        </>
    );
}
