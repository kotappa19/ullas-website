// import { Playfair_Display, Montserrat } from "next/font/google";
// import Image from "next/image";

// const playfair = Playfair_Display({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

// interface TeamMemberProps {
//     name: string;
//     role: string;
//     bio: string;
//     imageUrl: string;
// }

// export default function TeamMemberCard(
//     { name, role, bio, imageUrl }: TeamMemberProps = {
//         name: "John Doe",
//         role: "Software Engineer",
//         bio: "John is an experienced software engineer with a passion for creating efficient and scalable solutions.",
//         imageUrl: "/placeholder.svg?height=300&width=200",
//     }
// ) {
//     return (
//         <div
//             className={`${montserrat.className} bg-[#2A2A5A] text-white w-72 rounded-lg overflow-hidden shadow-lg`}>
//             <Image
//                 src={imageUrl}
//                 width={500}
//                 height={300}
//                 alt={name}
//                 className="object-cover w-80 h-96"
//             />
//             <div className="p-6">
//                 <h3
//                     className={`${playfair.className} text-2xl font-bold mb-2`}
//                     style={{ color: "#C0C0C0" }}>
//                     {name}
//                 </h3>
//                 <p
//                     className="text-lg font-semibold mb-4"
//                     style={{ color: "#A0A0A0" }}>
//                     {role}
//                 </p>
//                 <p className="text-sm">{bio}</p>
//             </div>
//         </div>
//     );
// }


import { Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export default function TeamMemberCard(
    { name, role, bio, imageUrl }: TeamMemberProps = {
        name: "John Doe",
        role: "Software Engineer",
        bio: "John is an experienced software engineer with a passion for creating efficient and scalable solutions.",
        imageUrl: "/placeholder.svg?height=300&width=200",
    }
) {
    return (
        <div
            className={`${montserrat.className} bg-[#2A2A5A] text-white w-full sm:w-72 rounded-lg overflow-hidden shadow-lg`}>
            <Image
                src={imageUrl}
                width={500}
                height={300}
                alt={name}
                className="object-cover w-full h-48 sm:h-56" // Responsive height
            />
            <div className="p-4 sm:p-6"> {/* Adjust padding for mobile and larger screens */}
                <h3
                    className={`${playfair.className} text-xl sm:text-2xl font-bold mb-2`}
                    style={{ color: "#C0C0C0" }}>
                    {name}
                </h3>
                <p
                    className="text-base sm:text-lg font-semibold mb-4"
                    style={{ color: "#A0A0A0" }}>
                    {role}
                </p>
                <p className="text-sm">{bio}</p>
            </div>
        </div>
    );
}


