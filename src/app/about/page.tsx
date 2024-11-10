"use client";

import { AboutUsComponent } from "@/components/features/about-us/about";
import FooterSection from "@/components/footer/footer";
import { HeaderSection } from "@/components/header/header";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function AboutUs() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-3CT1Y43Z0M"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3CT1Y43Z0M');`
                    }}></script>
            </head>
            <div
                className="bg-[#1a1a2e] text-white min-h-screen"
                style={montserrat.style}>
                <HeaderSection
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />
                <AboutUsComponent isMenuOpen={isMenuOpen} />
                <FooterSection />
            </div>
        </>
    );
}
