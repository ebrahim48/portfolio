"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";
export type ToastKind = "success" | "error" | "info";
export interface Toast { id: number; title: string; message: string; kind: ToastKind; }

interface AppCtx {
    theme: Theme;
    toggleTheme: () => void;
    magicCursor: boolean;
    toggleMagicCursor: () => void;
    toasts: Toast[];
    notify: (title: string, message: string, kind?: ToastKind) => void;
    dismiss: (id: number) => void;
    fullscreen: boolean;
    setFullscreen: (v: boolean) => void;
    downloadResume: () => void;
}

const Ctx = createContext<AppCtx | null>(null);

export function useApp() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
    return ctx;
}

export function AppProvider({ children, resumeUrl }: { children: ReactNode; resumeUrl: string }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [magicCursor, setMagicCursor] = useState(false);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [fullscreen, setFullscreen] = useState(false);
    const idRef = useRef(0);

    // restore preferences
    useEffect(() => {
        const t = (document.documentElement.dataset.theme as Theme) || "dark";
        setTheme(t);
        const cursorPref = localStorage.getItem("magic-cursor");
        const finePointer = window.matchMedia("(pointer: fine)").matches;
        setMagicCursor(finePointer && cursorPref === "on");
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const dismiss = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);

    const notify = useCallback((title: string, message: string, kind: ToastKind = "info") => {
        const id = ++idRef.current;
        setToasts((t) => [...t.slice(-2), { id, title, message, kind }]);
        setTimeout(() => dismiss(id), 4500);
    }, [dismiss]);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        notify("Theme changed", `${next === "dark" ? "Dark" : "Light"} mode activated.`, "info");
    }, [theme, notify]);

    const toggleMagicCursor = useCallback(() => {
        const next = !magicCursor;
        setMagicCursor(next);
        localStorage.setItem("magic-cursor", next ? "on" : "off");
        notify("Magic Cursor", `The magic cursor has been ${next ? "activated" : "deactivated"}.`, "info");
    }, [magicCursor, notify]);

    const downloadResume = useCallback(async () => {
        // External links (e.g. Google Drive) can't be checked via fetch due to CORS
        if (/^https?:\/\//.test(resumeUrl)) {
            window.open(resumeUrl, "_blank", "noopener,noreferrer");
            return;
        }
        try {
            const res = await fetch(resumeUrl, { method: "HEAD" });
            if (!res.ok) throw new Error();
            window.open(resumeUrl, "_blank", "noopener,noreferrer");
        } catch {
            notify("File not found", "The resume isn't available yet. Please contact me directly.", "error");
        }
    }, [notify, resumeUrl]);

    const value = useMemo(() => ({
        theme, toggleTheme, magicCursor, toggleMagicCursor, toasts, notify, dismiss,
        fullscreen, setFullscreen, downloadResume,
    }), [theme, toggleTheme, magicCursor, toggleMagicCursor, toasts, notify, dismiss, fullscreen, downloadResume]);

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
