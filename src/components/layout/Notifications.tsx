"use client";
import { FaCircleCheck, FaTriangleExclamation, FaCircleInfo, FaXmark } from "react-icons/fa6";
import { useApp } from "../app/context";

const ICONS = { success: FaCircleCheck, error: FaTriangleExclamation, info: FaCircleInfo };

export default function Notifications() {
    const { toasts, dismiss } = useApp();
    return (
        <div className="fixed top-4 right-4 z-[110] flex flex-col gap-3 w-[min(92vw,340px)]" aria-live="polite">
            {toasts.map((t) => {
                const Icon = ICONS[t.kind];
                return (
                    <div key={t.id} className="panel p-4 flex gap-3 animate-toast">
                        <Icon className={`mt-0.5 shrink-0 ${t.kind === "error" ? "text-danger" : "text-primary"}`} />
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm">{t.title}</p>
                            <p className="text-muted text-sm mt-0.5">{t.message}</p>
                        </div>
                        <button onClick={() => dismiss(t.id)} aria-label="Dismiss" className="text-muted hover:text-primary cursor-pointer self-start">
                            <FaXmark />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
