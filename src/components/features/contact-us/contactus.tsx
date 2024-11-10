"use client";

import { Playfair_Display, Montserrat } from "next/font/google";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface PropType {
    isMenuOpen: boolean;
}

export default function ContactUsSection({ isMenuOpen }: PropType) {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("Your name");
    const [email, setEmail] = useState("Your email");
    const [message, setMessage] = useState("Message");
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "23edcf39-1e81-4564-bef2-2de46cae2c29");

        const formObject = Object.fromEntries(formData);
        const json = JSON.stringify(formObject);

        if (resultRef.current) resultRef.current.innerHTML = "Please wait...";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (response.ok) {
                resultRef.current!.innerHTML = result.message;
            } else {
                console.error(result);
                resultRef.current!.innerHTML =
                    result.message || "Error occurred";
            }
        } catch (error) {
            console.error(error);
            resultRef.current!.innerHTML = "Something went wrong!";
        } finally {
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                if (resultRef.current) resultRef.current.style.display = "none";
            }, 3000);
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            ) : (
                <div
                    className={`flex flex-col items-center justify-center p-8 ${
                        isMenuOpen ? "pt-64" : "pt-28"
                    }`}
                    style={montserrat.style}>
                    <h1
                        className={`${playfair.className} text-white text-3xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center`}>
                        Why wait? Lets Connect Now
                    </h1>
                    <h1
                        className={`${playfair.className} text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-center`}>
                        Contact Us
                    </h1>

                    <div className="w-full max-w-4xl flex flex-col sm:flex-row sm:justify-around items-center mb-12">
                        <div className="flex flex-col items-center mb-6 sm:mb-0">
                            <div className="rounded-full border-2 border-white p-3 mb-4">
                                <Link href="tel:+917676193045">
                                    <Phone className="text-white w-6 h-6" />
                                </Link>
                            </div>
                            <p className="text-white text-center">
                                +91 7676193045
                            </p>
                        </div>
                        <div className="flex flex-col items-center mb-6 sm:mb-0">
                            <div className="rounded-full border-2 border-white p-3 mb-4">
                                <Link
                                    href="mailto:knacprosolutions@gmail.com?subject=Subject"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Mail className="text-white w-6 h-6" />
                                </Link>
                            </div>
                            <p className="text-white text-center">
                                knacprosolutions@gmail.com
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="rounded-full border-2 border-white p-3 mb-4">
                                <MapPin className="text-white w-6 h-6" />
                            </div>
                            <p className="text-white text-center">
                                Keshwapur Kusugal Road
                                <br />
                                Hubballi - 580023
                            </p>
                        </div>
                    </div>

                    <form
                        method="POST"
                        id="form"
                        onSubmit={handleSubmit}
                        className="w-full max-w-4xl space-y-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full sm:w-[50%] bg-white text-black placeholder-gray-900 py-3 px-4 rounded"
                                required
                            />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                placeholder="Your Email"
                                className="w-full sm:w-[50%] bg-white text-black py-3 px-4 rounded placeholder-gray-900"
                                required
                            />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className="w-full bg-white py-3 px-4 rounded mb-6 h-40 text-black placeholder-gray-900"
                            required></textarea>
                        <div className="justify-center sm:justify-end">
                            <button
                                type="submit"
                                className="bg-[#4A7AFF] text-white py-2 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors mb-2 ml-4">
                                Submit
                            </button>
                            <div
                                id="result"
                                ref={resultRef}
                                className="dark:text-white ml-4"></div>
                        </div>
                    </form>
                    <h1
                        className={`${playfair.className} text-white text-2xl sm:text-3xl font-bold mb-4 mt-12 text-center`}>
                        Follow us on
                    </h1>
                    <div className="flex justify-center space-x-4 mt-4">
                        {/* Social Media Icons */}
                        <Link
                            href="https://www.linkedin.com/in/knacpro-solutions/"
                            aria-label="LinkedIn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 48 48">
                                <path
                                    fill="#0078d4"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path>
                                <path
                                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z"
                                    opacity=".05"></path>
                                <path
                                    fill="#fff"
                                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.479,0-2.505,0.943-2.934,2.364C24.791,26.71,25,28.033,25,29.901V36h-5V18h5v2.061C26.563,19.243,27.825,18,29.738,18 C33.422,18,36,20.874,36,26.274V36z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/knacprosolutions?igsh=ZmZ0eno5Z29meGY0"
                            aria-label="Instagram">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 48 48">
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                    cx="19.38"
                                    cy="42.035"
                                    r="44.899"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fd5"></stop>
                                    <stop
                                        offset=".328"
                                        stopColor="#ff543f"></stop>
                                    <stop
                                        offset=".348"
                                        stopColor="#fc5245"></stop>
                                    <stop
                                        offset=".504"
                                        stopColor="#e64771"></stop>
                                    <stop
                                        offset=".643"
                                        stopColor="#d53e91"></stop>
                                    <stop
                                        offset=".761"
                                        stopColor="#cc39a4"></stop>
                                    <stop
                                        offset=".841"
                                        stopColor="#c837ab"></stop>
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                    cx="11.786"
                                    cy="5.54"
                                    r="29.813"
                                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#4168c9"></stop>
                                    <stop
                                        offset=".999"
                                        stopColor="#4168c9"
                                        stopOpacity="0"></stop>
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <path
                                    fill="#fff"
                                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                <circle
                                    cx="31.5"
                                    cy="16.5"
                                    r="1.5"
                                    fill="#fff"></circle>
                                <path
                                    fill="#fff"
                                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
