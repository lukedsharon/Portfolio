import Image from "next/image";
import CofO from "../../../public/images/college_of_the_ozarks.jpeg";
import ClassyLlama from "../../../public/images/classy_llama.jpeg";
import ConGenius from "public/images/congenius_logo.png";

const EXPERIENCE = [
  {
    superTitle: "Education",
    logo: <Image src={CofO} alt="asdf" width={100} />,
    company: "College of the Ozarks",
    position: "Point Lookout, MO",
    startDate: "May, 2017",
    endDate: "December, 2021",
    description: [
      {
        title: "Computer Information Science",
        description: "GPA: 3.8/4.0",
      },
      {
        title: "Accounting",
        description: "GPA: 3.8/4.0",
      },
    ],
  },
  {
    superTitle: "Business Office",
    logo: <Image src={CofO} alt="asdf" width={100} />,
    company: "College of the Ozarks",
    position: "3 yrs 8 mos",
    startDate: "",
    endDate: "",
    description: [
      {
        title: "Balanced daily cash flow and prepared daily bank deposits",
      },
      {
        title: "Processed account transactions",
      },
      {
        title:
          "Interpreted student account information and communicated details clearly",
      },
    ],
  },
  {
    superTitle: "Technical Finance Developer",
    logo: <Image src={ClassyLlama} alt="asdf" width={100} />,
    company: "Classy Llama, LLC.",
    position: "1 yr 4 mos",
    startDate: "",
    endDate: "",
    description: [
      {
        title:
          "Built and maintained system integrations with Salesforce, Quickbooks, Atlassian, and Google",
      },
      {
        title: "Developed automations using REST APIs and the Celigo platform",
      },
      {
        title:
          "Customized Salesforce functionality using formulas, flows, and the Apex programming language",
      },
      {
        title:
          "Built and customized financial tools using Google Sheets and Apps Script for the Finance department",
      },
      {
        title: "Wrote user stories and acceptance criteria for coding projects",
      },
    ],
  },
  {
    superTitle: "Full Stack Developer",
    logo: (
      <Image src={ConGenius} alt="asdf" width={100} className="rounded-xl" />
    ),
    company: "ConGenius, LLC.",
    position: "6 mos",
    startDate: "",
    endDate: "",
    description: [
      {
        title:
          "Built front-end components based on UI designs and functional specifications",
      },
      {
        title:
          "Implemented font-end and back-end logic to ensure proper functionality",
      },
      {
        title:
          "Solved bugs and errors to align the website with expected functionality",
      },
      {
        title:
          "Performed modifications and additions to database code for proper data persistence, data integrity, and security",
      },
      {
        title:
          "Collaborated with team members to gain and provide assistance on relevant tasks",
      },
    ],
  },
];
function ExperienceCard() {
  return (
    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box max-w-[1400px] mx-auto">
      {EXPERIENCE.map((job, index) => (
        <div key={index} className="carousel-item flex flex-col">
          <div className="card w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] bg-base-100 shadow-xl overflow-scroll">
            <div className="card-body grid grid-cols-12 grid-rows-12">
              <div className="col-span-3 row-span-1">{job.logo}</div>
              <div className="col-span-8">
                <h2 className="card-title">{job.company}</h2>
                <p className="">
                  {job.superTitle} | {job.position}
                </p>
              </div>
              <ul className="list-disc col-span-12 row-start-2 row-end-12">
                {job.description.map((desc, index) => (
                  <li key={index}>{desc.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCard;
