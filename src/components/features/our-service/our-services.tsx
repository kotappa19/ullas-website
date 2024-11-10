"use client";

import { Playfair_Display, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import {
    Code,
    Smartphone,
    Monitor,
    LayoutGrid,
    TestTube2,
    Lightbulb
} from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const services = [
    { icon: Code, name: "Web Applications", color: "text-blue-500" },
    { icon: Smartphone, name: "Mobile Applications", color: "text-cyan-500" },
    { icon: Monitor, name: "Desktop Applications", color: "text-gray-500" },
    { icon: LayoutGrid, name: "UI/UX Designs", color: "text-yellow-500" },
    {
        icon: TestTube2,
        name: "Unit/Automation Testing",
        color: "text-blue-700"
    },
    { icon: Lightbulb, name: "Project Management", color: "text-yellow-400" }
];

interface PropType {
    isMenuOpen: boolean;
}

export default function OurServicesComponent({ isMenuOpen }: PropType) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            ) : (
                <section className={`container mx-auto px-4 py-16 flex flex-col md:flex-row items-center ${isMenuOpen ? "pt-64" : "pt-28"}`}>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2
                            className={`${playfair.className} text-4xl sm:text-5xl font-bold text-white text-center mb-4`}>
                            Our Services
                        </h2>
                        <p
                            className={`${montserrat.className} text-white text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg`}>
                            Tailored Solutions for your Success, Elevate your
                            Experience with Our Exceptional and Comprehensive
                            Services Today
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#2A2A5A] rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform">
                                    <service.icon
                                        className={`w-12 h-12 sm:w-16 sm:h-16 ${service.color} mb-4`}
                                    />
                                    <h3
                                        className={`${montserrat.className} text-center text-sm sm:text-xl font-semibold`}>
                                        {service.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
