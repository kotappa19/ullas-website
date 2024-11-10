import { Mail, Phone, MapPin } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function FooterSection() {
    return (
        <footer
            className="bg-[#2A2A5A] text-white py-12 px-4 sm:px-8"
            style={montserrat.style}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div>
                    <h2 className="font-bold text-lg md:text-xl mb-4 underline">
                        Contact Info
                    </h2>
                    <div className="space-y-2">
                        <div className="flex items-center hover:underline cursor-pointer">
                            <Link
                                href="mailto:knacprosolutions@gmail.com?subject=Subject"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex space-x-1">
                                <Mail
                                    className="w-5 h-5 mr-2"
                                    aria-label="Email"
                                />
                                <span>knacprosolutions@gmail.com</span>
                            </Link>
                        </div>
                        <div className="flex items-center hover:underline cursor-pointer">
                            <Link
                                href="tel:+917676193045"
                                className="flex space-x-1">
                                <Phone
                                    className="w-5 h-5 mr-2"
                                    aria-label="Phone"
                                />
                                <span>+91 7676193045</span>
                            </Link>
                        </div>
                        <div className="flex items-start">
                            <MapPin
                                className="w-5 h-5 mr-2 mt-1"
                                aria-label="Location"
                            />
                            <span>
                                Keshwapur Kusugal Road
                                <br />
                                Hubballi - 580023
                            </span>
                        </div>
                    </div>
                </div>

                {/* Service Links */}
                <div>
                    <h2 className="font-bold text-lg md:text-xl mb-4 underline">
                        Service Links
                    </h2>
                    <ul className="space-y-2">
                        {[
                            "Web Applications",
                            "Mobile Applications",
                            "Desktop Applications",
                            "UI/UX Designs",
                            "Unit/Automation Testing",
                            "Project Management"
                        ].map(service => (
                            <li
                                key={service}
                                className="hover:underline cursor-pointer">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Projects */}
                <div>
                    <h2 className="font-bold text-lg md:text-xl mb-4 underline">
                        Our Projects
                    </h2>
                    <ul className="space-y-2">
                        {[
                            "Mobile Apps",
                            "Web Development",
                            "Digital Marketing",
                            "Photography",
                            "Software Development",
                            "Data Science"
                        ].map(project => (
                            <li
                                key={project}
                                className="hover:underline cursor-pointer">
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Support */}
                <div>
                    <h2 className="font-bold text-lg md:text-xl mb-4 underline">
                        Quick Support
                    </h2>
                    <ul className="space-y-2 ml-2">
                        <li>
                            <Link
                                href="/contact"
                                className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-sm sm:text-base text-white hover:underline cursor-pointer">
                                Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left flex space-x-2">
                    <Image
                        src={"/assets/logo.png"}
                        width={400}
                        height={400}
                        alt={"logo"}
                        className="object-cover w-12 h-12 sm:w-20 sm:h-20"
                    />
                    <div className="sm:mt-2 mt-1">
                        <h1 className="text-base sm:text-2xl md:text-3xl font-bold tracking-wider">
                            KNACPRO SOLUTIONS
                        </h1>
                        <p className="text-xs sm:text-sm tracking-widest sm:ml-2">
                            YOUR VISION, OUR CODE
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4">
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
                                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
                            <path
                                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                                opacity=".05"></path>
                            <path
                                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                                opacity=".07"></path>
                            <path
                                fill="#fff"
                                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
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
                                <stop offset=".328" stopColor="#ff543f"></stop>
                                <stop offset=".348" stopColor="#fc5245"></stop>
                                <stop offset=".504" stopColor="#e64771"></stop>
                                <stop offset=".643" stopColor="#d53e91"></stop>
                                <stop offset=".761" stopColor="#cc39a4"></stop>
                                <stop offset=".841" stopColor="#c837ab"></stop>
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
                    <Link
                        href="https://github.com/KnacPro-Solutions"
                        aria-label="GitHub">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="40"
                            height="40"
                            viewBox="0 0 64 64">
                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                        </svg>
                    </Link>
                </div>
                <div className="text-center lg:text-right">
                    <p className="text-sm lg:text-base tracking-widest font-medium">
                        &copy; Knacpro Solutions Pvt Ltd. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
