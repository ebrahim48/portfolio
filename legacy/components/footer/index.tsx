"use client"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function Footer() {
    const socialLinks = [
        { id: 1, icon: <FaLinkedinIn size={20} />, label: "LinkedIn", href: "#linkedin" },
        { id: 2, icon: <FaInstagram size={20} />, label: "Instagram", href: "#instagram" },
        { id: 3, icon: <HiMail size={20} />, label: "Email", href: "mailto:tamim.uxui@gmail.com" },
    ];

    return (
        <div className="bg-[#000000] text-white relative min-h-[600px] py-20 px-4 md:px-8">
            <div className="container mx-auto relative z-10">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-10 text-white leading-tight">
                            Let's create great things.
                        </h2>
                        <div className="flex flex-col gap-4">
                            <a
                                href="tel:+8801892683582"
                                className="text-[#51A2FF] text-lg md:text-xl hover:underline transition-colors"
                            >
                                +88 01892683582
                            </a>
                            <a
                                href="mailto:tamim.uxui@gmail.com"
                                className="text-[#51A2FF] text-lg md:text-xl hover:underline transition-colors"
                            >
                                tamim.uxui@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="flex flex-col gap-6">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className="flex items-center gap-3 text-white hover:text-[#51A2FF] transition-colors group"
                            >
                                <span className="group-hover:scale-110 transition-transform">
                                    {link.icon}
                                </span>
                                <span className="text-lg md:text-xl font-normal">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Separator Line */}
                <div className="border-t border-gray-500 opacity-50 my-16"></div>

                {/* Bottom Section - Watermark */}
                <div className="relative -mt-8">
                    <h3 className="text-4xl md:text-5xl lg:text-[7rem] xl:text-[8rem] font-light text-[#1e2939] select-none leading-none">
                        Tamim
                    </h3>
                </div>
            </div>
        </div>
    );
}