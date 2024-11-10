"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PropType {
    isMenuOpen: boolean;
}

export function HeroSection({ isMenuOpen }: PropType) {
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
                <main
                    className={`container mx-auto px-4 py-16 flex flex-col md:flex-row items-center ${isMenuOpen ? "pt-64" : "pt-28"}`}>
                    <div className="w-full md:w-1/2 md:mr-12 mb-8 md:mb-0">
                        <Image
                            src="/assets/hero.png"
                            width={500}
                            height={400}
                            alt="Stylized computer monitor"
                            className="rounded-xl w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                        <h2
                            className={`${playfair.className} text-4xl md:text-6xl font-bold mb-6`}>
                            Knacpro Solutions
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed mb-4">
                            In todays fast-paced digital landscape, investing in
                            mobile and web app development is essential for
                            businesses. Studies show that the number of app
                            users is rapidly growing each year, making it
                            crucial for companies to harness this trend. The
                            right mobile app strategy can propel a business to
                            new heights, driving growth and customer engagement.
                        </p>
                    </div>
                </main>
            )}
        </>
    );
}

