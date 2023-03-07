import React, { ReactElement } from "react";
import ProfileImage from "../../../public/images/profile_image.jpeg";
import Image from "next/image";

type CardProps = {
  image: any;
  title: string;
  description: string;
  buttonTitle: string;
  imageSide: "left" | "right";
};

function Card({
  image,
  title,
  description,
  buttonTitle,
  imageSide,
}: CardProps) {
  return imageSide === "left" ? (
    <div className="card lg:card-side bg-base-200 shadow-xl m-6 lg:grid lg:grid-cols-4">
      <figure className="col-span-1 bg-purple-500 relative h-[300px]">
        <Image src={image} alt="asdf" objectFit="cover" layout="fill" />
      </figure>
      <div className="card-body col-span-3">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div className="card lg:card-side bg-base-200 shadow-xl m-6 lg:grid lg:grid-cols-4">
      <div className="card-body col-span-3">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <figure className="col-span-1 bg-purple-500 relative h-[300px]">
        <Image src={image} alt="asdf" objectFit="cover" layout="fill" />
      </figure>
    </div>
  );
}

export default Card;
