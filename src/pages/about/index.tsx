import ContactCard from "@/components/base/ContactCard";
import Testamonials from "@/components/base/Testamonials";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

function index() {
  return (
    <MainLayout>
      <Testamonials />
      <div className="w-full flex justify-center">
        <ContactCard />
      </div>
    </MainLayout>
  );
}

export default index;
