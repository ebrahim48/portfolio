"use client";
import { FaFileArrowDown, FaEnvelope, FaLanguage, FaHeart } from "react-icons/fa6";
import { aboutInfo, interests, languages, profile, socials, type SectionId } from "@/src/data/portfolio";
import { rich } from "@/src/lib/rich";
import { useApp } from "../app/context";
import Avatar from "../ui/Avatar";
import Typer from "../ui/Typer";
import Block from "../ui/Block";

export default function About({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
    const { downloadResume } = useApp();

    return (
        <>
            {/* intro */}
            <article className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-center animate-fade-up">
                <div className="relative mx-auto">
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-primary/10 blur-xl" />
                    <div className="relative board p-3 rounded-[2rem]">
                        <Avatar size={280} rounded="rounded-[1.5rem]" className="max-w-[70vw] h-auto! aspect-square" />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap tag !text-texts !bg-card shadow-lg !py-1.5 !px-4">
                            <span className="w-2 h-2 rounded-full bg-green-500" /> Available for work
                        </div>
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <p className="text-muted font-bold">{profile.tagline}</p>
                    <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold mt-2">
                        I&apos;m a <Typer words={profile.roles} className="text-primary" />
                    </h3>
                    <div className="mt-5 space-y-4 text-muted leading-relaxed">
                        {profile.bio.map((p, i) => <p key={i}>{rich(p)}</p>)}
                    </div>

                    <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
                        {aboutInfo.map(({ icon: Icon, label, value, href }) => (
                            <li key={label} className="flex items-center gap-3 board px-4 py-3">
                                <span className="w-9 h-9 shrink-0 grid place-items-center rounded-lg bg-primary-soft text-primary"><Icon /></span>
                                <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-wider text-muted font-bold">{label}</p>
                                    {href
                                        ? <a href={href} className="text-sm font-bold hover:text-primary truncate block">{value}</a>
                                        : <p className="text-sm font-bold truncate">{value}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                        <button onClick={downloadResume} className="btn btn-primary"><FaFileArrowDown /> Download Resume</button>
                        <button onClick={() => onNavigate("contact")} className="btn btn-outline"><FaEnvelope /> E-mail Me</button>
                    </div>

                    <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                        <span className="text-sm text-muted font-bold">Get to know <span className="text-primary">more</span>:</span>
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                                className="w-9 h-9 grid place-items-center rounded-full bg-board border border-line text-muted hover:text-primary hover:border-primary transition-colors">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </article>

            {/* interests */}
            <Block title="Industry {{Knowledge}}" icon={FaHeart}>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {interests.map(({ icon: Icon, title, text }) => (
                        <div key={title} className="board board-hover p-5 flex gap-4">
                            <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary text-lg"><Icon /></span>
                            <div>
                                <h4 className="font-bold">{title}</h4>
                                <p className="text-sm text-muted mt-1 leading-relaxed">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Block>

            {/* languages */}
            <Block title="{{Languages}} I Speak" icon={FaLanguage}>
                <div className="grid md:grid-cols-3 gap-4">
                    {languages.map((l) => (
                        <div key={l.name} className="board p-5">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-lg">{l.name}</h4>
                                <span className="tag !text-primary">{l.level}</span>
                            </div>
                            <div className="mt-3 h-1.5 rounded-full bg-card-accent overflow-hidden">
                                <div className="h-full bg-primary rounded-full animate-progress" style={{ width: `${l.percent}%` }} />
                            </div>
                            <p className="text-sm text-muted mt-3 leading-relaxed">{l.text}</p>
                        </div>
                    ))}
                </div>
            </Block>
        </>
    );
}
