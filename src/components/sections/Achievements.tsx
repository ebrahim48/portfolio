import { FaCertificate, FaAward, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { awards, certifications } from "@/src/data/portfolio";
import { rich } from "@/src/lib/rich";
import Block from "../ui/Block";

export default function Achievements() {
    return (
        <>
            <Block title="Certifications" icon={FaCertificate}>
                <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map(({ icon: Icon, title, issuer, date, text, href }) => (
                        <div key={title} className="board board-hover p-5 flex gap-4">
                            <span className="w-12 h-12 shrink-0 grid place-items-center rounded-xl bg-primary-soft text-primary text-xl"><Icon /></span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <h4 className="font-bold leading-snug">{title}</h4>
                                    <span className="tag shrink-0">{date}</span>
                                </div>
                                <p className="text-xs text-primary font-bold mt-1">{issuer}</p>
                                <p className="text-sm text-muted mt-2 leading-relaxed">{text}</p>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-3 hover:underline">
                                    View certification <FaArrowUpRightFromSquare className="text-xs" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Block>

            <Block title="Awards & {{Key Milestones}}" icon={FaAward}>
                <ol className="relative space-y-5">
                    <span className="absolute left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden />
                    {awards.map(({ icon: Icon, title, org, date, text }) => (
                        <li key={title} className="relative pl-10">
                            <span className="absolute left-0 top-5 w-6 h-6 rounded-full bg-card border-2 border-primary grid place-items-center">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                            </span>
                            <div className="board board-hover p-5 flex gap-4">
                                <span className="w-11 h-11 shrink-0 grid place-items-center rounded-xl bg-card-accent text-primary text-lg"><Icon /></span>
                                <div>
                                    <h4 className="font-bold text-lg">{rich(title)}</h4>
                                    <p className="text-xs text-muted font-bold mt-0.5">{org} · {date}</p>
                                    <p className="text-sm text-muted mt-2 leading-relaxed">{text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </Block>
        </>
    );
}
