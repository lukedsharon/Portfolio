import MainLayout from "@/components/layouts/MainLayout";
import ProfileImage from "../../public/images/profile_image.jpeg";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] gap-4">
        <div className="avatar">
          <div className="w-52 mask mask-squircle">
            <Image src={ProfileImage} alt="asdf" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Hello, Im Luke Sharon</h1>
      </div>
    </MainLayout>
  );
}
