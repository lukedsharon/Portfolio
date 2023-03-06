import ExperienceCard from "@/components/base/ExperienceCard";
import TechExperience from "@/components/base/TechExperience";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

function index() {
  return (
    <MainLayout>
      <ExperienceCard />
      <TechExperience />
    </MainLayout>
  );
}

export default index;
