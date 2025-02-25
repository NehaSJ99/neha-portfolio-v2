import classNames from "classnames";
import Image from "next/image";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";

const awards = [
  {
    name: "PearlHack 2025",
    issuedBy: "Infosys USA Foundations - Best Use of Gen AI",
    issuedOn: "March 2025",
    image: "/images/awards/perlhacks.png",
    link: "https://www.linkedin.com/posts/nehasj99_pearlhack2025-hackathon-ai-activity-7298873288536051712-Gn38?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0H_PQBle2pDXLUbLhN-lajutSEd2YnNU8",
    isWinner: true,
  },
  {
    name: "DiamondHack 2024",
    issuedBy: "North Carolina State University",
    issuedOn: "April 2024",
    image: "/images/awards/dimondhack.png",
    link: "https://www.linkedin.com/posts/nehasj99_diamondhack2024-hackathon-ai-activity-7181488377936932864-nx-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0H_PQBle2pDXLUbLhN-lajutSEd2YnNU8",
    isWinner: true,
  },
  {
    name: "Spotlight Award",
    issuedBy: "Reliance Jio Infocomm Ltd.",
    issuedOn: "August 2023",
    image: "/images/awards/Jio.png",
    link: "https://www.jio.com/",
    isWinner: false,
  },
];

const AwardsSection = () => {
  return (
    <>
      <SectionTitle>Awards</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {awards.map((award, index) => (
          <div key={index} className="relative p-[3px] rounded-2xl w-80 h-96">
            {/* Animated Border */}
            <div className="absolute inset-0 animate-border-flow rounded-2xl border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 bg-[length:400%_400%]"></div>

            {/* Card Content */}
            <div className="relative flex flex-col items-center justify-between rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-lg w-full h-full">
              {/* Winner Badge */}
              {award.isWinner && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-lg shadow-md">
                  🏆 Winner
                </div>
              )}

              {/* Circular Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                <Image src={award.image} layout="fill" objectFit="cover" alt={award.name} />
              </div>

              {/* Award Details */}
              <div>
                <h4 className="mt-4 text-lg font-semibold">{award.name}</h4>
                <p className="mt-2 text-sm">Issued By: {award.issuedBy}</p>
                <p className="mt-1 text-sm">Issued On: {award.issuedOn}</p>
              </div>

              {/* View Details Button */}
              <Link
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for Animated Sparkling Border */}
      <style jsx>{`
        @keyframes border-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AwardsSection;
