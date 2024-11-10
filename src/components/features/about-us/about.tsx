"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import TeamSection from "../team-overview/team";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PropType {
    isMenuOpen: boolean;
}

export function AboutUsComponent({ isMenuOpen }: PropType) {
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
                <div>
                    container mx-auto py-16 flex flex-col lg:flex-row
                    <div
                        className={`container mx-auto px-4 pb-16 flex flex-col md:flex-row items-center ${
                            isMenuOpen ? "pt-60" : "pt-16 sm:pt-28"
                        }`}>
                        <div className="w-full lg:w-1/2 lg:mr-12 mb-8 lg:mb-0">
                            <Image
                                src="/assets/aboutus.png"
                                width={500}
                                height={400}
                                alt="Stylized computer monitor"
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-6 text-center lg:text-left">
                            <h2
                                className={`${playfair.className} text-white text-4xl lg:text-6xl font-bold mb-6`}>
                                About Us
                            </h2>
                            <p className="text-white text-base lg:text-lg leading-relaxed">
                                At KnacPro Solutions, we have built a solid
                                foundation of expertise to meet the growing
                                demands of our clients. Our skilled and
                                proficient teams have helped companies enhance
                                their efficiency, knowledge, and profitability.
                                As a closely held company, we pride ourselves on
                                delivering a personalized, hands-on approach to
                                every partnership.
                            </p>
                        </div>
                    </div>
                    <TeamSection />
                </div>
            )}
        </>
    );
}

