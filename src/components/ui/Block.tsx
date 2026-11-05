import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { rich } from "@/src/lib/rich";

/** A titled sub-block inside a section (like the reference's "articles"). */
export default function Block({ title, icon: Icon, children, className = "" }: { title?: string; icon?: IconType; children: ReactNode; className?: string }) {
    return (
        <article className={`animate-fade-up ${className}`}>
            {title && (
                <div className="flex items-center gap-3 mb-5">
                    {Icon && <span className="w-9 h-9 grid place-items-center rounded-xl bg-primary-soft text-primary"><Icon /></span>}
                    <h3 className="text-xl sm:text-2xl font-bold">{rich(title)}</h3>
                    <span className="flex-1 h-px bg-line ml-2" />
                </div>
            )}
            {children}
        </article>
    );
}
