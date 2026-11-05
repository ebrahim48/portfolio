import { Fragment, type ReactNode } from "react";

/**
 * Parses lightweight markup:
 *   {{text}} -> highlighted with the primary colour
 *   [[text]] -> bold
 */
export function rich(text: string): ReactNode {
    const parts = text.split(/(\{\{.*?\}\}|\[\[.*?\]\])/g).filter(Boolean);
    return parts.map((part, i) => {
        if (part.startsWith("{{")) {
            return <span key={i} className="text-primary">{part.slice(2, -2)}</span>;
        }
        if (part.startsWith("[[")) {
            return <strong key={i} className="font-bold text-texts">{part.slice(2, -2)}</strong>;
        }
        return <Fragment key={i}>{part}</Fragment>;
    });
}

/** Strips markup for places that need plain text (alt, aria-label). */
export const plain = (text: string) => text.replace(/\{\{|\}\}|\[\[|\]\]/g, "");
