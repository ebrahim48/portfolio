"use client";
import { useEffect, type ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";

export default function Modal({ open, onClose, title, children, footer }: {
    open: boolean; onClose: () => void; title: ReactNode; children: ReactNode; footer?: ReactNode;
}) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <div className="relative panel w-full max-w-4xl max-h-[92svh] flex flex-col animate-modal">
                <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-line">
                    <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
                    <button onClick={onClose} aria-label="Close window" className="w-9 h-9 grid place-items-center rounded-full bg-board hover:text-primary cursor-pointer">
                        <FaXmark />
                    </button>
                </div>
                <div className="overflow-y-auto scroll-area px-5 sm:px-7 py-6">{children}</div>
                {footer && <div className="px-5 sm:px-7 py-4 border-t border-line">{footer}</div>}
            </div>
        </div>
    );
}
