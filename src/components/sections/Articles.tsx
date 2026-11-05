"use client";
import { useMemo, useState } from "react";
import { FaRegClock, FaArrowRightLong, FaMedium } from "react-icons/fa6";
import { articles, type ArticleCategory } from "@/src/data/portfolio";
import { formatDate } from "@/src/lib/date";
import { rich } from "@/src/lib/rich";
import FilterTabs from "../ui/FilterTabs";

type Filter = "All" | ArticleCategory;

export default function Articles() {
    const [filter, setFilter] = useState<Filter>("All");
    const categories = useMemo(() => ["All", ...Array.from(new Set(articles.map((a) => a.category)))] as Filter[], []);
    const visible = filter === "All" ? articles : articles.filter((a) => a.category === filter);

    return (
        <div className="space-y-8">
            <FilterTabs options={categories} value={filter} onChange={setFilter} />
            <div key={filter} className="grid md:grid-cols-2 gap-5">
                {visible.map((a, i) => (
                    <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer"
                        className="board board-hover p-6 flex flex-col group animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                        <div className="flex items-center justify-between gap-3">
                            <span className="tag !text-primary !border-primary/30">{a.category}</span>
                            <span className="text-xs text-muted flex items-center gap-1.5"><FaRegClock /> {a.readTime} read</span>
                        </div>
                        <h4 className="text-xl font-bold mt-4 leading-snug">{rich(a.title)}</h4>
                        <p className="text-sm text-muted mt-2 leading-relaxed flex-1">{a.text}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">{a.tags.map((t) => <span key={t} className="tag">#{t}</span>)}</div>
                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-line text-sm">
                            <span className="text-muted flex items-center gap-2"><FaMedium /> {formatDate(a.date)}</span>
                            <span className="font-bold text-primary flex items-center gap-2">Read article <FaArrowRightLong className="transition-transform group-hover:translate-x-1" /></span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
