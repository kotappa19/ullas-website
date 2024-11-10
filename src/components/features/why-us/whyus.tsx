import { Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function WhyChooseUs() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-24 mb-8 md:mb-0">
                    <h2
                        className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}
                        style={{
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                            letterSpacing: "1px"
                        }}>
                        Why Choose Us
                    </h2>
                    <p
                        className={`${montserrat.className} text-white text-base md:text-lg leading-relaxed`}>
                        Knac Pro combines diverse expertise with a
                        client-focused approach, delivering tailored solutions
                        on time. Our agile methods ensure flexibility, and our
                        ongoing support keeps your applications running
                        smoothly. With a proven track record, we are dedicated to
                        driving your success.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mb-6">
                    <Image
                        src="/assets/whyus.png"
                        alt="Why Choose Us Infographic"
                        width={500}
                        height={400}
                        className="rounded-xl md:ml-10 w-full max-w-[400px] h-auto" // Ensure responsive sizing
                    />
                </div>
            </div>
        </section>
    );
}
