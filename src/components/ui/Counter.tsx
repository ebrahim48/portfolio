"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, duration = 1600 }: { value: number; duration?: number }) {
    const [n, setN] = useState(0);
    const start = useRef<number | null>(null);

    useEffect(() => {
        let raf = 0;
        const step = (t: number) => {
            if (start.current === null) start.current = t;
            const p = Math.min(1, (t - start.current) / duration);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [value, duration]);

    return <>{n}</>;
}
