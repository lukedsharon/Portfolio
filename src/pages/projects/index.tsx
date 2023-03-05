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
        title="test"
        description="test"
        buttonTitle="Read More"
        imageSide="left"
      />
      <Card
        image={ConGeniusLogo}
        title="test"
        description="test"
        buttonTitle="Read More"
        imageSide="right"
      />
      <Card
        image={PlandaBudgetImage}
        title="test"
        description="test"
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
