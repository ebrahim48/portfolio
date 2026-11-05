"use client";
import { useCallback, useEffect, useState } from "react";
import { profile, sections, type SectionId } from "@/src/data/portfolio";
import { AppProvider, useApp } from "./context";
import Preloader from "../layout/Preloader";
import Background from "../layout/Background";
import MagicCursor from "../layout/MagicCursor";
import Notifications from "../layout/Notifications";
import Sidebar from "../layout/Sidebar";
import MobileHeader from "../layout/MobileHeader";
import SectionShell from "../layout/SectionShell";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Portfolio from "../sections/Portfolio";
import Achievements from "../sections/Achievements";
import Articles from "../sections/Articles";
import Education from "../sections/Education";
import Updates from "../sections/Updates";
import Contact from "../sections/Contact";

const isSection = (v: string): v is SectionId => sections.some((s) => s.id === v);

export default function PortfolioApp() {
    return (
        <AppProvider resumeUrl={profile.resumeUrl}>
            <Shell />
        </AppProvider>
    );
}

function Shell() {
    const { magicCursor, fullscreen } = useApp();
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState<SectionId>("about");

    // hash routing: /#portfolio opens the portfolio section
    useEffect(() => {
        const sync = () => {
            const h = window.location.hash.replace("#", "");
            setActive(isSection(h) ? h : "about");
        };
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);

    const navigate = useCallback((id: SectionId) => {
        if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
        setActive(id);
    }, []);

    useEffect(() => {
        const s = sections.find((x) => x.id === active);
        document.title = `${s?.label ?? "Home"} | ${profile.name} — ${profile.shortRole}`;
    }, [active]);

    const section = sections.find((s) => s.id === active)!;
    const onDone = useCallback(() => setLoading(false), []);

    return (
        <>
            <Background />
            {loading && <Preloader onDone={onDone} />}
            <MagicCursor enabled={magicCursor} />
            <Notifications />

            <div className="relative z-10 h-svh flex flex-col lg:flex-row gap-2 lg:gap-4 p-2 lg:p-4">
                {!fullscreen && <Sidebar active={active} onNavigate={navigate} />}
                <MobileHeader active={active} onNavigate={navigate} />
                <SectionShell section={section} onNavigate={navigate}>
                    {active === "about" && <About onNavigate={navigate} />}
                    {active === "skills" && <Skills />}
                    {active === "experience" && <Experience />}
                    {active === "portfolio" && <Portfolio />}
                    {active === "achievements" && <Achievements />}
                    {active === "articles" && <Articles />}
                    {active === "education" && <Education />}
                    {active === "updates" && <Updates />}
                    {active === "contact" && <Contact />}
                </SectionShell>
            </div>
        </>
    );
}
