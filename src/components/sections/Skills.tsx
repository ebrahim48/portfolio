import { FaLightbulb } from "react-icons/fa6";
import { services, skillGroups } from "@/src/data/portfolio";
import Block from "../ui/Block";

export default function Skills() {
    return (
        <>
            <Block title="What I {{Do}}" icon={FaLightbulb}>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {services.map(({ icon: Icon, title, text }, i) => (
                        <div key={title} className="board board-hover p-6 text-center animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                            <span className="mx-auto w-14 h-14 grid place-items-center rounded-2xl bg-primary-soft text-primary text-2xl"><Icon /></span>
                            <h4 className="font-bold text-lg mt-4">{title}</h4>
                            <p className="text-sm text-muted mt-2 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </Block>

            {skillGroups.map((group) => (
                <Block key={group.title} title={group.title} icon={group.icon}>
                    <div className="grid md:grid-cols-2 gap-4">
                        {group.items.map(({ name, text, percent, years, icon: Icon }) => (
                            <div key={name} className="board p-5">
                                <div className="flex items-start gap-3">
                                    <span className="w-10 h-10 shrink-0 grid place-items-center rounded-xl bg-card-accent text-primary"><Icon /></span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <h4 className="font-bold">{name}</h4>
                                            <span className="text-sm font-bold text-primary">{percent}%</span>
                                        </div>
                                        <p className="text-xs text-muted mt-0.5">{years > 0 ? `${years}+ year${years > 1 ? "s" : ""} experience` : "Less than a year experience"}</p>
                                    </div>
                                </div>
                                <div className="mt-4 h-2 rounded-full bg-card-accent overflow-hidden">
                                    <div className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary animate-progress" style={{ width: `${percent}%` }} />
                                </div>
                                <p className="text-sm text-muted mt-3 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </Block>
            ))}
        </>
    );
}
