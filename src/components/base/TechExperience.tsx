import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TypescriptIcon from "../../../public/logos/typescriptlang-icon.svg";
import ReactIcon from "../../../public/logos/reactjs-icon.svg";
import PostgresIcon from "../../../public/logos/postgresql-icon.svg";
import SupabaseIcon from "../../../public/logos/supabase-icon.svg";
import TailwindIcon from "../../../public/logos/tailwindcss-icon.svg";
import Image from "next/image";

const TECH_EXPERIENCE = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "Core programming language for adding functionality to web pages.",
    years: 3,
  },
  {
    name: "TypeScript",
    icon: <Image src={TypescriptIcon} alt="asdf" width={25} />,
    description:
      "A superset of JavaScript to add type safety; advantageous for large projects.",
    years: 1,
  },
  {
    name: "React JS",
    icon: <Image src={ReactIcon} alt="asdf" width={25} />,
    description:
      "A JavaScript library to building user interfaces, based on component reusability.",
    years: 3,
  },
  {
    name: "Next JS",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "A React JS framework that adds features like routing, server-side rendering, etc... to React.",
    years: 1,
  },
  {
    name: "Google Apps Script",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "A JavaScript runtime to build add-ons and custom functionality to Google products like Sheets.",
    years: 1,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={TailwindIcon} alt="asdf" width={25} />,
    description:
      "A utility-first CSS framework to build custom styling inline, providing quick styling, and easy responsive design.",
    years: 1,
  },
  {
    name: "Redux / Redux Toolkit",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "A state management library to manage global application state and queried data invalidations.",
    years: 1,
  },
  {
    name: "Zustand",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description: "A light-weight atomic state management library.",
    years: 1,
  },
  {
    name: "React Query",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "A library, specific to React JS, to manage asynchronous data fetching and caching.",
    years: 1,
  },
  {
    name: "3rd Party APIs",
    icon: <FontAwesomeIcon icon={faPlus} />,
    description:
      "Interact with other application's data within your own application.",
    years: 2,
  },
  {
    name: "PostgreSQL",
    icon: <Image src={PostgresIcon} alt="asdf" width={25} />,
    description:
      "A relational database management system to persist and query data.",
    years: 2,
  },
  {
    name: "Supabase",
    icon: <Image src={SupabaseIcon} alt="asdf" width={25} />,
    description:
      "A hosted PostgreSQL database with a REST API to query data and a realtime websocket API to subscribe to data changes.",
    years: 1,
  },
];

function TechExperience() {
  return (
    <div className="grid grid-cols-3 gap-3 p-6 bg-base-200 max-w-[1400px] mx-auto">
      {TECH_EXPERIENCE.map((tech, index) => (
        <div
          key={index}
          className="card bg-base-100 text-primary-content hover:shadow-lg hover:-translate-y-[2px] hover:-translate-x-[2px] transition duration-300 ease-in-out"
        >
          <div className="card-body grid grid-cols-6 grid-rows-12">
            <span className="col-span-1">{tech.icon}</span>
            <h2 className=" col-span-5 card-title text-black dark:text-white">
              {tech.name}
            </h2>
            <p className=" col-start-2 col-span-5">{tech.description}</p>
            <p className=" col-start-2 col-span-5">
              Years of Experience: {tech.years}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechExperience;
