import { Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function TeamSection() {
    const teamMembers = [
        {
            name: "Abhishek Pawar",
            role: "Full Stack Developer",
            bio: "With over 5+ years of experience in the IT industry, I specialize in full stack web development, adept at both front-end and back-end technologies. My passion lies in creating robust, scalable applications that provide exceptional user experiences.",
            imageUrl: "/assets/abhishek.png"
        },
        {
            name: "Kotappa Gandudi",
            role: "Full Stack Developer",
            bio: "With over a 3+ years of experience in the IT field, I specialize in full stack web development, focusing on creating responsive, user-friendly applications and optimizing performance for an enhanced user experience.",
            imageUrl: "/assets/kotappa.png"
        },
        {
            name: "Naveen Kuratti",
            role: "Back End Developer",
            bio: "With over a 2+ years of experience in the IT field, I specialize in front-end development, dedicated to crafting responsive, user-friendly interfaces and optimizing performance to enhance the overall user experience.",
            imageUrl: "/assets/naveen.png"
        },
        {
            name: "Chetan Shiratti",
            role: "Front End Developer",
            bio: "Bringing over a 2+ years of experience in the IT field, I focus on front-end development, committed to designing responsive and engaging user interfaces while optimizing performance for a seamless user experience.",
            imageUrl: "/assets/chetan.png"
        }
    ];

    return (
        <div
            className={`${montserrat.className} text-white rounded-lg overflow-hidden shadow-lg mb-10 p-6`}>
            <h2 className={`${playfair.className} text-3xl font-bold mb-6 text-center`}>Meet the Team</h2> {/* Optional heading */}
            <div className="flex flex-wrap justify-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"> {/* Responsive widths */}
                        <div className="bg-[#2A2A5A] rounded-lg overflow-hidden h-full flex flex-col"> {/* Full height */}
                            <Image
                                src={member.imageUrl}
                                width={400} // Set a fixed width
                                height={400} // Set a fixed height
                                alt={member.name}
                                className="object-cover w-full h-96 sm:h-96" // Responsive height
                            />
                            <div className="p-4 flex-grow"> {/* Flexible growth */}
                                <h3
                                    className={`${playfair.className} text-xl sm:text-2xl font-bold mb-2`}
                                    style={{ color: "#C0C0C0" }}>
                                    {member.name}
                                </h3>
                                <p
                                    className="text-base sm:text-lg font-semibold mb-4"
                                    style={{ color: "#A0A0A0" }}>
                                    {member.role}
                                </p>
                                <p className="text-sm">{member.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
