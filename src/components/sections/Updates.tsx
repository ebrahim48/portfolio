import { FaChartPie, FaClockRotateLeft } from "react-icons/fa6";
import { activity, facts } from "@/src/data/portfolio";
import { formatMonth } from "@/src/lib/date";
import { rich } from "@/src/lib/rich";
import Block from "../ui/Block";
import Counter from "../ui/Counter";

export default function Updates() {
    return (
        <>
            <Block title="Quick {{Facts}}" icon={FaChartPie}>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                    {facts.map(({ value, suffix, label, icon: Icon }) => (
                        <div key={label} className="board board-hover p-6 text-center relative overflow-hidden">
                            <Icon className="absolute -right-3 -bottom-3 text-7xl text-primary opacity-[.07]" />
                            <p className="font-display text-3xl sm:text-4xl font-bold text-primary"><Counter value={value} />{suffix}</p>
                            <p className="text-sm text-muted font-bold mt-2">{label}</p>
                        </div>
                    ))}
                </div>
            </Block>

            <Block title="Recent {{Activity}}" icon={FaClockRotateLeft}>
                <ol className="relative space-y-4">
                    <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-line" aria-hidden />
                    {activity.map((a, i) => (
                        <li key={i} className="relative pl-9 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                            <span className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${i === 0 ? "bg-primary border-primary" : "bg-card border-primary"}`} />
                            <p className="text-xs font-display font-bold text-muted tracking-wider">{formatMonth(a.date)}</p>
                            <div className="board p-4 mt-2">
                                <h4 className="font-bold">{rich(a.title)}</h4>
                                <p className="text-sm text-muted mt-1">{a.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Block>
        </>
    );
}
