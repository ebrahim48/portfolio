"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] py-24 px-4 md:px-8 lg:px-16 mt-[88px]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Right Side - Descriptive Text */}
                    <div className="lg:hidden flex-1 w-full flex items-start pt-12 lg:pt-0">
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed lg:w-[320px] ">
                            Let's make it happen together! We’re
                            eager to connect with you.
                        </p>
                    </div>
                    {/* Left Side - Form */}
                    <div className="flex-1 w-full lg:w-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-12">
                            Get in Touch!
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-[#111111] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-[#111111] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Write Your Message Here....."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-[#111111] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-max px-6 lg:px-20 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-normal cursor-pointer rounded-lg transition-colors text-base"
                            >
                                Send Email
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Descriptive Text */}
                    <div className="hidden lg:block flex-1 w-full flex items-start pt-12 lg:pt-0">
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed lg:w-[320px] ">
                            Let's make it happen together! We’re
                            eager to connect with you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}