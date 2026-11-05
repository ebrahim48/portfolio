"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";
import Logo from "../reuseable/logo";

export default function Navbar() {
    const pathname = usePathname();
    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const navLinks = [
        {
            title: "Work",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        }
    ];

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 !z-[999] left-0 w-full z-10 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 text-black dark:text-white mb-20
            ${isScroll
                    ? "bg-white dark:bg-[#0a0a0a] backdrop-blur-xl py-3.5 backdrop-brightness-100"
                    : "bg-white dark:bg-[#0a0a0a] lg:bg-transparent dark:lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-6 "
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <Logo isScroll={isScroll} />
                <nav className="hidden lg:flex space-x-7">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="relative text-black dark:text-white font-medium pb-2 group"
                        >
                            {link.title}
                            <span
                                className={`absolute left-0 bottom-0 block w-full rounded h-[3px] bg-[#2571ff] transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${pathname === link.href
                                        ? "scale-x-100 "
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="cursor-pointer text-black dark:text-white" onClick={() => toggleMenu()}>
                        <RiMenu3Fill size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {menuOpen && (
                <div
                    className="fixed w-full h-screen inset-0 bg-black bg-opacity-75 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
            <aside
                className={`fixed top-0 left-0 !z-[999] w-64 h-screen bg-white dark:bg-[#111111] text-black dark:text-white shadow-xl transform transition-transform duration-300 ease-in-out
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end items-center py-3 pr-5">
                    <button onClick={toggleMenu}>
                        <RiCloseLargeFill className="border border-[#2571ff] rounded-full w-8 h-8 p-[6px] cursor-pointer" />
                    </button>
                </div>
                <nav
                    className="flex flex-col space-y-5 mt-3 px-5"
                    onClick={() => setMenuOpen(false)}
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="relative text-black dark:text-white font-medium pb-2 group"
                        >
                            {link.title}
                            <span
                                className={`absolute left-0 bottom-0 block w-full h-[3px] bg-[#2571ff] transition-transform duration-500 ease-in-out origin-right group-hover:origin-left
                                    ${pathname === link.href
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                    }
                                `}
                            />
                        </Link>
                    ))}
                </nav>
            </aside>
        </header>
    );
}