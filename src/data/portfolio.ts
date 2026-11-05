/**
 * ============================================================
 *  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
 *  Edit text, links, projects, etc. here — no need to touch components.
 *
 *  Rich-text syntax used in titles/descriptions:
 *    {{word}}  -> highlighted in the theme's primary colour
 *    [[word]]  -> bold
 *
 *  Images: put files in /public/images and reference them as
 *  "/images/your-file.png". When `image`/`avatar` is empty a
 *  generated mockup / initials avatar is shown instead.
 * ============================================================
 */
import type { IconType } from "react-icons";
import {
    FaUser, FaPenRuler, FaBriefcase, FaFolderOpen,
    FaGraduationCap, FaRss, FaEnvelope, FaLocationDot, FaPhone, FaLinkedinIn,
    FaGithub, FaMobileScreenButton, FaCode, FaFlutter, FaDartLang, FaJava,
    FaAndroid, FaGitAlt, FaBolt, FaGauge, FaMicroscope, FaFlask,
    FaMagnifyingGlassChart, FaLayerGroup, FaSchool, FaPeopleGroup, FaRocket,
    FaLightbulb, FaComments, FaSitemap, FaBrain, FaStar, FaGooglePlay, FaAppStoreIos,
} from "react-icons/fa6";
import { SiLeetcode, SiCplusplus, SiC } from "react-icons/si";

/* ---------------------------------- types --------------------------------- */
export type SectionId =
    | "about" | "skills" | "experience" | "portfolio" | "achievements"
    | "articles" | "education" | "updates" | "contact";

export interface NavSection {
    id: SectionId;
    label: string;
    icon: IconType;
    prefix: string; // small text above the title
    title: string;  // supports {{highlight}}
}

export interface Link { label: string; href: string; icon: IconType; }

/* --------------------------------- profile -------------------------------- */
export const profile = {
    name: "Ebrahim",
    fullName: "Md Ebrahim Hossen",
    initials: "EH",
    avatar: "", // e.g. "/images/avatar.jpg"
    roles: ["Flutter Developer", "Mobile App Developer", "Software Engineer", "Dart Enthusiast"],
    shortRole: "Flutter Developer",
    status: "Open to new opportunities — remote & onsite",
    location: "Mohammadpur, Dhaka, Bangladesh",
    email: "ebrahim.cse.bu@gmail.com",
    phone: "+880 1795-112198",
    phoneHref: "tel:+8801795112198",
    resumeUrl: "/resume.pdf", // drop your CV into /public/resume.pdf
    tagline: "I build cross-platform mobile apps with Flutter.",
    bio: [
        "I'm a [[Flutter Developer]] and Software Engineer who builds fast, reliable cross-platform mobile apps for Android and iOS from a single Dart codebase.",
        "At {{Spark Tech Agency}} I contribute to mobile application development for international clients. Apps I've worked on are live on the Google Play Store and the Apple App Store, covering ride booking, fitness, storytelling and business operations.",
        "Before that, as a Research Assistant at Bangladesh University, I worked on dataset creation, literature reviews and a systematic review of app-usage tracking applications, and I optimised performance on the Flutter platform.",
    ],
};

export const socials: Link[] = [
    { label: "GitHub", href: "https://github.com/ebrahim48", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/md-ebrahim-hossen-263b341b9/", icon: FaLinkedinIn },
    { label: "LeetCode", href: "https://leetcode.com/u/ebrahimhossen456/", icon: SiLeetcode },
];

/* -------------------------------- sections -------------------------------- */
// "achievements" and "articles" are hidden until you have content for them.
// To show them again, add them back here and fill in `certifications`, `awards` and `articles` below.
export const sections: NavSection[] = [
    { id: "about", label: "About", icon: FaUser, prefix: "Get to know me", title: "Hello, I'm {{Ebrahim!}}" },
    { id: "skills", label: "Skills", icon: FaPenRuler, prefix: "What I bring", title: "My {{Skill Set}}" },
    { id: "experience", label: "Experience", icon: FaBriefcase, prefix: "Summary of my", title: "Work {{Experience}}" },
    { id: "portfolio", label: "Portfolio", icon: FaFolderOpen, prefix: "Apps I've worked on", title: "My {{Projects}}" },
    { id: "education", label: "Education", icon: FaGraduationCap, prefix: "This is my", title: "Academic {{Education}}" },
    { id: "updates", label: "Updates", icon: FaRss, prefix: "Take a look at my", title: "Recent {{Updates}}" },
    { id: "contact", label: "Contact", icon: FaEnvelope, prefix: "Don't hesitate to", title: "Get in {{Touch}}" },
];

/* ---------------------------------- about --------------------------------- */
export const aboutInfo = [
    { icon: FaLocationDot, label: "Location", value: profile.location },
    { icon: FaEnvelope, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: FaBriefcase, label: "Availability", value: "Full-time · Freelance" },
];

// Shown in the About section under "Industry Knowledge".
export const interests = [
    { icon: FaMobileScreenButton, title: "Mobile Application Development", text: "Cross-platform Android & iOS apps with Flutter and Dart, from first screen to store release." },
    { icon: FaCode, title: "Software Development", text: "Clean, maintainable code built on solid data structures and algorithms fundamentals." },
    { icon: FaMicroscope, title: "Research and Development", text: "Dataset creation, literature reviews and evidence-driven problem solving." },
    { icon: FaGauge, title: "Performance Testing & Optimization", text: "Profiling and tuning Flutter apps for smooth frame rates and fast load times." },
    { icon: FaMagnifyingGlassChart, title: "Systematic Review", text: "Conducted a systematic review of app-usage tracking applications." },
];

export const languages = [
    { name: "Bengali", level: "Native", percent: 100, text: "Native proficiency with complete fluency in verbal and written communication." },
    { name: "English", level: "Professional", percent: 85, text: "Professional working proficiency for client communication, documentation and teamwork." },
];

/* --------------------------------- skills --------------------------------- */
export const services = [
    { icon: FaFlutter, title: "Flutter App Development", text: "Cross-platform mobile apps for Android and iOS from a single, well-structured Dart codebase." },
    { icon: FaRocket, title: "Store Publishing", text: "Preparing, releasing and maintaining apps on the Google Play Store and the Apple App Store." },
    { icon: FaGauge, title: "Performance Optimization", text: "Finding and fixing jank, slow builds and heavy rebuilds so apps feel smooth." },
    { icon: FaFlask, title: "Research & Analysis", text: "Literature reviews, datasets and systematic reviews to back decisions with evidence." },
];

export interface SkillItem { name: string; text: string; percent: number; years: number; icon: IconType; }
export const skillGroups: { title: string; icon: IconType; items: SkillItem[] }[] = [
    {
        title: "Tools & Technologies",
        icon: FaLayerGroup,
        items: [
            { name: "Flutter", text: "Widgets, state management, navigation, animations and platform integration.", percent: 92, years: 4, icon: FaFlutter },
            { name: "Dart", text: "Async programming, streams, null safety and clean architecture.", percent: 90, years: 4, icon: FaDartLang },
            { name: "Android & iOS", text: "Building, signing and releasing apps for both platforms.", percent: 85, years: 2, icon: FaAndroid },
            { name: "Java", text: "Object-oriented programming fundamentals.", percent: 70, years: 4, icon: FaJava },
            { name: "C / C++", text: "Problem solving and competitive programming.", percent: 75, years: 6, icon: SiCplusplus },
            { name: "Git & GitHub", text: "Version control, branching and team collaboration.", percent: 80, years: 3, icon: FaGitAlt },
        ],
    },
    {
        title: "Core Knowledge",
        icon: FaLightbulb,
        items: [
            { name: "Data Structures", text: "Choosing the right structure for efficient, readable code.", percent: 82, years: 6, icon: FaSitemap },
            { name: "Algorithms", text: "Problem solving practice on LeetCode and in university courses.", percent: 80, years: 6, icon: SiC },
            { name: "Performance Testing", text: "Profiling with Flutter DevTools and optimising rendering.", percent: 80, years: 3, icon: FaGauge },
            { name: "Research Methods", text: "Dataset creation, literature and systematic reviews.", percent: 78, years: 2, icon: FaMicroscope },
        ],
    },
    {
        title: "Soft Skills",
        icon: FaPeopleGroup,
        items: [
            { name: "Quick Learner", text: "Picks up new tools, packages and domains fast.", percent: 90, years: 6, icon: FaBrain },
            { name: "Team Collaboration", text: "Works closely with designers, developers and QA.", percent: 88, years: 4, icon: FaPeopleGroup },
            { name: "Communication", text: "Clear communication with teammates and clients.", percent: 85, years: 4, icon: FaComments },
            { name: "Agile Delivery", text: "Shipping in iterations with regular releases.", percent: 80, years: 2, icon: FaBolt },
        ],
    },
];

/* ------------------------------- experience ------------------------------- */
export interface TimelineItem {
    title: string;
    org: string;
    location: string;
    start: string; // "YYYY-MM"
    end?: string;  // undefined => Present
    icon: IconType;
    text: string;
    bullets?: string[];
    tags?: string[];
}

export const experience: TimelineItem[] = [
    {
        title: "Software Engineer",
        org: "Spark Tech Agency",
        location: "Mohakhali, Dhaka (Onsite)",
        start: "2024-05",
        icon: FaBriefcase,
        text: "Contributing to mobile application development as a Flutter developer, building and shipping cross-platform apps for clients.",
        bullets: [
            "Build Android & iOS apps with Flutter and Dart",
            "Released multiple apps on the Google Play Store and the Apple App Store",
            "Work with designers and backend developers to deliver features end to end",
            "Fix bugs and tune app performance after release",
        ],
        tags: ["Flutter", "Dart", "Android", "iOS", "REST API"],
    },
    {
        title: "Research Assistant",
        org: "Bangladesh University",
        location: "Dhaka, Bangladesh",
        start: "2020-05",
        end: "2022-07",
        icon: FaMicroscope,
        text: "Contributed to research initiatives and optimised performance on the Flutter mobile platform.",
        bullets: [
            "Created datasets for research projects",
            "Conducted literature reviews",
            "Carried out a systematic review of app-usage tracking applications",
            "Optimised performance on the Flutter mobile platform",
        ],
        tags: ["Research", "Systematic Review", "Datasets", "Flutter"],
    },
];

/* -------------------------------- portfolio ------------------------------- */
export type ProjectCategory = "Android & iOS" | "Android";
export interface Project {
    id: string;
    title: string;
    client: string;
    category: ProjectCategory;
    year: string;
    role: string;
    duration: string;
    short: string;
    description: string[];
    highlights: string[];
    tools: string[];
    color: [string, string]; // gradient used for generated mockups
    image?: string;          // cover image
    screenshots?: string[];  // gallery images
    links: { label: string; href: string; type: "behance" | "figma" | "dribbble" | "live" | "playstore" | "appstore" | "github" }[];
}

const play = (id: string) => ({ label: "Google Play", href: `https://play.google.com/store/apps/details?id=${id}`, type: "playstore" as const });
const appStore = (path: string) => ({ label: "App Store", href: `https://apps.apple.com/us/app/${path}`, type: "appstore" as const });

export const projects: Project[] = [
    {
        id: "klokk-in",
        title: "Klokk-in",
        client: "Atomic Tractor Ltd",
        category: "Android & iOS",
        year: "2026",
        role: "Flutter Developer",
        duration: "—",
        short: "A storytelling app for recording, sharing and keeping memories from working life.",
        description: [
            "Klokk-in lets people record and preserve memories from their working life and industry. Users can write or upload stories with photos and browse stories from their community.",
        ],
        highlights: ["Record memories in your own voice", "Stories with photos", "Tag by company, trade or decade", "Community story feed"],
        tools: ["Flutter", "Dart"],
        color: ["#4f46e5", "#06b6d4"],
        links: [play("com.atomictractorltd.klookin"), appStore("klokk-in/id6757183834")],
    },
    {
        id: "anstop",
        title: "Anstop",
        client: "Anstop",
        category: "Android & iOS",
        year: "2026",
        role: "Flutter Developer",
        duration: "—",
        short: "On-demand ride app that connects riders with drivers, with live GPS tracking.",
        description: [
            "Anstop is a French on-demand transport app. Riders book a trip in a few taps, follow the driver's position on a live map and pay inside the app.",
        ],
        highlights: ["Ride booking in a few taps", "Automatic pickup location", "Real-time GPS driver tracking", "Built-in secure payment"],
        tools: ["Flutter", "Dart", "Google Maps"],
        color: ["#f97316", "#ec4899"],
        links: [play("com.anstopcovoiturage"), appStore("anstop/id6763862164")],
    },
    {
        id: "hole",
        title: "H.O.L.E",
        client: "Next Gen Tech Platforms",
        category: "Android & iOS",
        year: "2026",
        role: "Flutter Developer",
        duration: "—",
        short: "Business operations app for medical device reps: orders, inventory and logistics.",
        description: [
            "An operations platform for medical device reps and surgeon practices. It keeps orders, loaner sets, inventory, couriers and expenses on one record.",
        ],
        highlights: ["Order & loaner-set tracking", "Inventory management", "Courier & expense tracking", "Built-in e-signature"],
        tools: ["Flutter", "Dart"],
        color: ["#10b981", "#0ea5e9"],
        links: [play("com.holepackage.app"), appStore("h-o-l-e/id6782267938")],
    },
    {
        id: "mo-tivate",
        title: "Mo-tivate",
        client: "MOSMFIT LLC",
        category: "Android & iOS",
        year: "2026",
        role: "Flutter Developer",
        duration: "—",
        short: "An all-in-one fitness app with nutrition plans, guided workouts and a community.",
        description: [
            "Mo-tivate helps users shape their bodies with nutrition plans, guided workouts and a supportive community, with programs tailored to each user's goals.",
        ],
        highlights: ["Smart nutrition plans", "Guided workouts", "Supportive community", "Goal-based programs"],
        tools: ["Flutter", "Dart"],
        color: ["#ef4444", "#f59e0b"],
        links: [play("com.mosmfitmon.motivateapp"), appStore("mo-tivate/id6757863119")],
    },
    {
        id: "hairkonnect",
        title: "HairKonnect",
        client: "HairKonnect",
        category: "Android",
        year: "2025",
        role: "Flutter Developer",
        duration: "—",
        short: "A mobile app built with Flutter, live on the Google Play Store.", // TODO: describe the app
        description: ["Built with Flutter and published on the Google Play Store."], // TODO
        highlights: ["Cross-platform Flutter codebase", "Published on Google Play"], // TODO
        tools: ["Flutter", "Dart"],
        color: ["#8b5cf6", "#ec4899"],
        links: [play("com.hairkonnect.hairkonnect")],
    },
    {
        id: "confaero",
        title: "Confaero",
        client: "Confaero",
        category: "Android",
        year: "2025",
        role: "Flutter Developer",
        duration: "—",
        short: "A mobile app built with Flutter, live on the Google Play Store.", // TODO: describe the app
        description: ["Built with Flutter and published on the Google Play Store."], // TODO
        highlights: ["Cross-platform Flutter codebase", "Published on Google Play"], // TODO
        tools: ["Flutter", "Dart"],
        color: ["#2563eb", "#7c3aed"],
        links: [play("confaero.com.app")],
    },
    {
        id: "lokinter",
        title: "Lokinter",
        client: "Lokinter",
        category: "Android",
        year: "2025",
        role: "Flutter Developer",
        duration: "—",
        short: "A mobile app built with Flutter, live on the Google Play Store.", // TODO: describe the app
        description: ["Built with Flutter and published on the Google Play Store."], // TODO
        highlights: ["Cross-platform Flutter codebase", "Published on Google Play"], // TODO
        tools: ["Flutter", "Dart"],
        color: ["#14b8a6", "#84cc16"],
        links: [play("com.lokinter.app")],
    },
];

/* ------------------------------ achievements ------------------------------ */
// Currently hidden (not in `sections`). Add your certificates & awards here, then re-enable the section.
export const certifications: { icon: IconType; title: string; issuer: string; date: string; text: string; href: string }[] = [];
export const awards: { icon: IconType; title: string; org: string; date: string; text: string }[] = [];

/* -------------------------------- articles -------------------------------- */
// Currently hidden (not in `sections`).
export type ArticleCategory = "Flutter" | "Dart" | "Research";
export const articles: { title: string; category: ArticleCategory; date: string; readTime: string; text: string; tags: string[]; href: string }[] = [];

/* -------------------------------- education ------------------------------- */
export const education: TimelineItem[] = [
    {
        title: "Bachelor of Science in {{CSE}}",
        org: "Bangladesh University",
        location: "Dhaka, Bangladesh",
        start: "2017-01",
        end: "2021-12",
        icon: FaGraduationCap,
        text: "Bachelor of Science in Computer Science & Engineering, with a strong base in [[data structures]], [[algorithms]] and software development.",
        tags: ["Computer Science", "Data Structures", "Algorithms"],
    },
    {
        title: "Higher Secondary Certificate",
        org: "Chuadanga Govt. College",
        location: "Chuadanga, Bangladesh",
        start: "2013-07",
        end: "2015-12",
        icon: FaSchool,
        text: "Completed HSC in 2015.",
    },
    {
        title: "Secondary School Certificate",
        org: "Makhaldanga, Dinonathpur Secondary School",
        location: "Chuadanga, Bangladesh",
        start: "2011-01",
        end: "2013-12",
        icon: FaSchool,
        text: "Completed SSC in 2013.",
    },
];

/* --------------------------------- updates -------------------------------- */
export const facts = [
    { value: 2, suffix: "+", label: "Years in Industry", icon: FaBriefcase },
    { value: 7, suffix: "", label: "Apps on Google Play", icon: FaGooglePlay },
    { value: 4, suffix: "", label: "Apps on App Store", icon: FaAppStoreIos },
    { value: 2, suffix: "+", label: "Years of Research", icon: FaStar },
];

export const activity = [
    { date: "2024-05", title: "Joined {{Spark Tech Agency}} as a Software Engineer", text: "Started building Flutter apps for clients." },
    { date: "2022-07", title: "Finished as {{Research Assistant}}", text: "Completed two years of research work at Bangladesh University." },
    { date: "2021-12", title: "Graduated with a {{B.Sc.}}", text: "Completed my Bachelor of Science at Bangladesh University." },
    { date: "2020-05", title: "Started as {{Research Assistant}}", text: "Began research on app-usage tracking applications at Bangladesh University." },
];

