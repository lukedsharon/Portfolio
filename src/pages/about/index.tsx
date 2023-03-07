import ContactCard from "@/components/base/ContactCard";
import Testamonials from "@/components/base/Testamonials";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

function index() {
  return (
    <MainLayout>
      <Testamonials />
      <ContactCard />
    </MainLayout>
  );
}

export default index;
