import React from "react";
import TypescriptIcon from "../../../public/logos/typescriptlang-icon.svg";
import ReactIcon from "../../../public/logos/reactjs-icon.svg";
import PostgresIcon from "../../../public/logos/postgresql-icon.svg";
import SupabaseIcon from "../../../public/logos/supabase-icon.svg";
import TailwindIcon from "../../../public/logos/tailwindcss-icon.svg";
import Image from "next/image";
import ApiIcon from "public/logos/api-icon.svg";
import JavascriptIcon from "public/logos/javascript-icon.svg";
import NextIcon from "public/logos/nextjs-icon.svg";
import ReduxIcon from "public/logos/redux-icon.svg";
import GASIcon from "public/logos/gas-icon.svg";
import ZustandIcon from "public/logos/zustand-icon.svg";
import ReactQueryIcon from "public/logos/react-query-icon.svg";
import PostmanIcon from "public/logos/postman-icon.svg";

const TECH_EXPERIENCE = [
  {
    name: "JavaScript",
    icon: <Image src={JavascriptIcon} alt="asdf" width={25} />,
    years: 3,
  },
  {
    name: "TypeScript",
    icon: <Image src={TypescriptIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "React JS",
    icon: <Image src={ReactIcon} alt="asdf" width={25} />,
    years: 3,
  },
  {
    name: "Next JS",
    icon: <Image src={NextIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "Google Apps Script",
    icon: <Image src={GASIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={TailwindIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "Redux / Redux Toolkit",
    icon: <Image src={ReduxIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "Zustand",
    icon: <Image src={ZustandIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "React Query",
    icon: <Image src={ReactQueryIcon} alt="asdf" width={25} />,
    years: 1,
  },
  {
    name: "3rd Party APIs",
    icon: <Image src={PostmanIcon} alt="asdf" width={25} />,
    years: 2,
  },
  {
    name: "PostgreSQL",
    icon: <Image src={PostgresIcon} alt="asdf" width={25} />,
    years: 2,
  },
  {
    name: "Supabase",
    icon: <Image src={SupabaseIcon} alt="asdf" width={25} />,
    years: 1,
  },
];

function TechExperience() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-6 bg-base-200 max-w-[1400px] mx-auto mt-6 rounded-2xl">
      {TECH_EXPERIENCE.map((tech, index) => (
        <div
          key={index}
          className="card bg-base-100 text-primary-content hover:shadow-lg hover:-translate-y-[2px] hover:-translate-x-[2px] transition duration-300 ease-in-out"
        >
          <div className="card-body grid grid-cols-6 grid-rows-2">
            <span className="col-span-1">{tech.icon}</span>
            <h2 className=" col-span-5 card-title text-black dark:text-white">
              {tech.name}
            </h2>
            <p className=" col-start-2 col-span-5 text-black dark:text-white">
              Years of Experience: {tech.years}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechExperience;
