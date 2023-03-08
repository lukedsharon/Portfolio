import React from "react";
import Image from "next/image";
import EmailIcon from "public/logos/email-icon.svg";
import PhoneIcon from "public/logos/phone-icon.svg";
import LinkedInIcon from "public/logos/linkedin-icon.svg";
import LocationIcon from "public/logos/location-icon.svg";

const CONTACT_INFO = [
  {
    icon: <Image src={EmailIcon} alt="asdf" width={25} />,
    title: <p>lukedsharon@gmail.com</p>,
  },
  {
    icon: <Image src={PhoneIcon} alt="asdf" width={25} />,
    title: <p>{`(479) 212-3657`}</p>,
  },
  {
    icon: <Image src={LinkedInIcon} alt="asdf" width={25} />,
    title: (
      <a
        href={"https://www.linkedin.com/in/luke-sharon/"}
        className="underline hover:text-blue-500"
      >
        linkedin.com/in/luke-sharon
      </a>
    ),
  },
  {
    icon: <Image src={LocationIcon} alt="asdf" width={25} />,
    title: <p>Springfield, MO</p>,
  },
];

function ContactCard() {
  return (
    <div className="card w-full sm:w-1/2 lg:w-1/3 bg-base-200 m-3 lg:m-6">
      <div className="card-body">
        <h2 className="card-title">
          {"Contact Me - I'd love to hear from you!"}
        </h2>
        {CONTACT_INFO.map((info, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-row">
              {info.icon}
              <p className="ml-2">{info.title}</p>
            </div>
          </div>
        ))}
        <div className="card-actions justify-end">
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
