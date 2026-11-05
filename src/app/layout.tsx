import type { Metadata, Viewport } from "next";
import { Lato, Orbitron, Saira } from "next/font/google";
import "../styles/globals.css";

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const saira = Saira({ variable: "--font-saira", subsets: ["latin"], weight: ["400", "600", "700"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Md Ebrahim Hossen | Flutter Developer",
    description:
        "Md Ebrahim Hossen is a Flutter Developer and Software Engineer building cross-platform Android & iOS apps with Flutter and Dart.",
    keywords: ["Md Ebrahim Hossen", "Flutter Developer", "Dart", "Mobile App Developer", "Software Engineer", "Portfolio", "Bangladesh"],
    authors: [{ name: "Md Ebrahim Hossen" }],
    openGraph: {
        title: "Md Ebrahim Hossen | Flutter Developer",
        description: "Building cross-platform mobile apps with Flutter.",
        type: "website",
    },
};

export const viewport: Viewport = {
    themeColor: "#111111",
    width: "device-width",
    initialScale: 1,
};

// Applies the saved theme before paint to avoid a flash.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-theme="dark" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className={`${lato.variable} ${saira.variable} ${orbitron.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
