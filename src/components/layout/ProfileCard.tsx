"use client";
import { profile } from "@/src/data/portfolio";
import Avatar from "../ui/Avatar";

export function StatusDot({ className = "" }: { className?: string }) {
    return (
        <span className={`group absolute ${className}`}>
            <span className="relative block w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-card status-pulse" />
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 w-48 text-center text-xs bg-board border border-line rounded-lg px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                {profile.status}
            </span>
        </span>
    );
}

export default function ProfileCard({ compact = false }: { compact?: boolean }) {
    return (
        <div className={`flex flex-col items-center text-center ${compact ? "gap-2" : "gap-3"}`}>
            <div className="relative">
                <div className="p-1 rounded-full bg-gradient-to-br from-primary/80 to-transparent">
                    <Avatar size={compact ? 56 : 104} className="border-4 border-card" />
                </div>
                <StatusDot className={compact ? "bottom-0 right-0" : "bottom-2 right-2"} />
            </div>
            {!compact && (
                <div>
                    <h2 className="text-xl font-bold leading-tight">{profile.fullName}</h2>
                    <p className="text-sm text-muted mt-1">{profile.shortRole}</p>
                </div>
            )}
        </div>
    );
}
