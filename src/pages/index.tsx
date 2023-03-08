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
        <h1 className="text-4xl font-bold">{`Hello, I'm Luke Sharon`}</h1>
        <p className="max-w-[600px] p-3">{`I am passionate about Web Development, and specifically JavaScript and React. Take a look at my portfolio, and feel free to reach out; I'd love to hear from you!`}</p>
        <span className="font-bold text-lg p-3">{`(479) 212-3657 // lukedsharon@gmail.com`}</span>
      </div>
    </MainLayout>
  );
}
