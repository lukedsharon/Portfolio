import Card from "@/components/base/Card";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import LedgerlyLogo from "../../../public/images/ledgerly_logo.jpeg";
import ConGeniusLogo from "../../../public/images/congenius_logo.png";
import PlandaBudgetImage from "../../../public/images/planda_budget_image.png";
function index() {
  return (
    <MainLayout>
      <div>Projects Landing Page!!!</div>
      <Card
        image={LedgerlyLogo}
        title="Ledgerly"
        description="I developed responsive mobile/desktop application for my senior capstone project. I worked on it for 250 hours over the course of one semester, and used / learned a variety of technologies. I used React JS for the front end and Node JS for the back end. I wrote custom CSS for all the styling, and used a MySQL database for data persistence. For my hosting stack, I used an RDS instance on AWS for the database, and an AWS Elastic Beanstalk environment to host the back end. I hosted the front end on Google Firebase. This project is an accounting platform that enables users to intuitively manage financial records, accounting systems, and reporting through the lifecycle of their business.
"
        buttonTitle="Read More"
        imageSide="left"
      />
      <Card
        image={ConGeniusLogo}
        title="ConGenius"
        description="I worked for this local startup for 6 months as a full stack developer. The tech stack included React JS, TypeScript, TailwindCSS, postgreSQL, and Redux and RTK Query. The hosting platform was Vercel and Supabase. I build reusable components for use throughout the app, primarily focused on data visualization and layout for the website's dashboard. I built chart components, project tracking tools, and project stage workflows. This included building UI components, implementing correct data flow with Redux / RTK Query, and necessary modifications with the database."
        buttonTitle="Read More"
        imageSide="right"
      />
      <Card
        image={PlandaBudgetImage}
        title="Budget Cents"
        description="This is a personal project that is currently in development. I am building a personal budgeting tool that allows users to define a budget, then track their income and expenses against their financial goals. This includes a balance between manual interaction and automation. The primary problem I am trying to solve is that many budget apps use integrations and AI in an attempt to do it all for the user. These types of applications remove the budgeting responsibility and awareness from the user, which are required for responsible budgeting and financial awareness. My app will ask a user to define a budget, then allow them to connect bank accounts and credit cards to monitor transactions. Once a transaction is made, the app will create a transaction entry and send it to a queue, waiting for the user to categorize it correctly. My tech stack includes Next JS, TypeScript, TailwindCSS, postgreSQL, Zustand, React Query, several UI libraries including daisyUI, Radix, and HeadlessUI, and API interactions with Plaid, Stripe, React PDF Viewer, and Sendgrid. Deployment stack includes vercel and supabase for the time being, but I have intentions of switching to a node server and hosting on AWS and Google Firebase."
        buttonTitle="Read More"
        imageSide="left"
      />

      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            Youve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default index;
