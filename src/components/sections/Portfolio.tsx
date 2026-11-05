"use client";
import { useMemo, useState } from "react";
import { FaBehance, FaDribbble, FaFigma, FaGooglePlay, FaAppStoreIos, FaGithub, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight, FaMagnifyingGlass, FaRegClock, FaUser, FaCalendar } from "react-icons/fa6";
import { projects, type Project, type ProjectCategory } from "@/src/data/portfolio";
import FilterTabs from "../ui/FilterTabs";
import Modal from "../ui/Modal";
import Mockup from "../ui/Mockup";

type Filter = "All" | ProjectCategory;
const LINK_ICONS = { behance: FaBehance, dribbble: FaDribbble, figma: FaFigma, live: FaArrowUpRightFromSquare, playstore: FaGooglePlay, appstore: FaAppStoreIos, github: FaGithub };

function Cover({ project, variant = 0, src }: { project: Project; variant?: number; src?: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    if (src) return <img src={src} alt={project.title} className="w-full h-full object-cover" />;
    return <Mockup project={project} variant={variant} />;
}

export default function Portfolio() {
    const [filter, setFilter] = useState<Filter>("All");
    const [selected, setSelected] = useState<Project | null>(null);

    const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as Filter[], []);
    const counts = useMemo(() => {
        const c: Record<string, number> = { All: projects.length };
        projects.forEach((p) => { c[p.category] = (c[p.category] ?? 0) + 1; });
        return c;
    }, []);
    const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <>
            <div className="space-y-8">
                <FilterTabs options={categories} value={filter} onChange={setFilter} counts={counts} />
                <p className="text-center text-sm text-muted -mt-3">Filter by: <span className="text-primary font-bold">{filter}</span></p>

                <div key={filter} className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {visible.map((p, i) => (
                        <article key={p.id} className="board board-hover overflow-hidden flex flex-col group animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                            <button onClick={() => setSelected(p)} className="relative aspect-[4/3] overflow-hidden cursor-pointer" aria-label={`Open ${p.title}`}>
                                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                                    <Cover project={p} src={p.image} />
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                                    <span className="btn btn-primary"><FaMagnifyingGlass /> View Project</span>
                                </div>
                                <span className="absolute top-3 left-3 tag !bg-black/60 !text-white !border-white/10 backdrop-blur">{p.category}</span>
                            </button>
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between text-xs text-muted font-bold">
                                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: p.color[0] }} />{p.client}</span>
                                    <span>{p.year}</span>
                                </div>
                                <h3 className="text-lg font-bold mt-2">{p.title}</h3>
                                <p className="text-sm text-muted mt-1.5 leading-relaxed flex-1">{p.short}</p>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {p.tools.map((t) => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <div className="flex gap-2 mt-4 pt-4 border-t border-line">
                                    <button onClick={() => setSelected(p)} className="btn btn-outline !py-2 !px-4 !text-xs flex-1">Details</button>
                                    {p.links.slice(0, 2).map((l) => {
                                        const Icon = LINK_ICONS[l.type];
                                        return (
                                            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={`See on ${l.label}`}
                                                className="w-9 h-9 grid place-items-center rounded-full bg-card-accent border border-line text-muted hover:text-primary hover:border-primary transition-colors">
                                                <Icon />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </>
    );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
    const [slide, setSlide] = useState(0);
    const [lastId, setLastId] = useState<string | null>(null);
    if (project && project.id !== lastId) { setLastId(project.id); setSlide(0); }
    if (!project) return null;

    const shots = project.screenshots?.length ? project.screenshots : [undefined, undefined, undefined];
    const go = (d: number) => setSlide((s) => (s + d + shots.length) % shots.length);

    return (
        <Modal
            open={!!project}
            onClose={onClose}
            title={<>{project.title} <span className="text-muted font-normal text-base">· {project.client}</span></>}
            footer={
                <div className="flex flex-wrap gap-2 justify-end">
                    {project.links.map((l) => {
                        const Icon = LINK_ICONS[l.type];
                        return <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon /> {l.type === "live" ? "Open Website" : l.type === "playstore" ? "Get it on Google Play" : l.type === "appstore" ? "Download on the App Store" : `See on ${l.label}`}</a>;
                    })}
                </div>
            }
        >
            {/* gallery */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-line">
                <Cover project={project} variant={slide} src={shots[slide]} />
                {shots.length > 1 && (
                    <>
                        <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"><FaChevronLeft /></button>
                        <button onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"><FaChevronRight /></button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {shots.map((_, i) => (
                                <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className={`h-2 rounded-full transition-all cursor-pointer ${i === slide ? "w-6 bg-white" : "w-2 bg-white/50"}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="grid md:grid-cols-[1fr_240px] gap-6 mt-6">
                <div>
                    <div className="space-y-3 text-muted leading-relaxed">
                        {project.description.map((d, i) => <p key={i}>{d}</p>)}
                    </div>
                    <h4 className="font-bold mt-6 mb-3">Key highlights</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                        {project.highlights.map((h) => (
                            <li key={h} className="flex gap-2 text-sm text-muted"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{h}</li>
                        ))}
                    </ul>
                </div>
                <aside className="board p-5 space-y-4 h-fit">
                    <Meta icon={FaUser} label="Role" value={project.role} />
                    <Meta icon={FaRegClock} label="Duration" value={project.duration} />
                    <Meta icon={FaCalendar} label="Year" value={project.year} />
                    <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted font-bold mb-2">Tools</p>
                        <div className="flex flex-wrap gap-1.5">{project.tools.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    </div>
                </aside>
            </div>
        </Modal>
    );
}

function Meta({ icon: Icon, label, value }: { icon: React.ComponentType; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="w-8 h-8 grid place-items-center rounded-lg bg-primary-soft text-primary text-sm"><Icon /></span>
            <div>
                <p className="text-[11px] uppercase tracking-wider text-muted font-bold">{label}</p>
                <p className="text-sm font-bold">{value}</p>
            </div>
        </div>
    );
}
