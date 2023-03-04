import React from "react";
import ProfileImage from "../../../public/images/profile_image.jpeg";
import Image from "next/image";

function Card() {
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl m-6">
      <figure>
        <Image src={ProfileImage} alt="asdf" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
