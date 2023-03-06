import { useRouter } from "next/router";
import React from "react";

const TESTAMONIALS_CONTENT = [
  {
    name: "John Doe",
    quote:
      "Luke is amazing at what he does. He is a great teacher and a great developer. He is very knowledgeable and has a great personality. I would recommend him to anyone who is looking to learn how to code or looking to hire a developer. He is a great asset to any team. I am very happy to have met him and to have had the opportunity to work with him. I look forward to working with him again in the future. Thank you Luke for all your help and support. You are the best!",
    position: "CEO of Company",
    company: "Company Name",
  },
  {
    name: "John Doe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor. Faucibus nisl tincidunt eget nullam non nisi est. Nec nam aliquam sem et tortor consequat id. Pulvinar etiam non quam lacus suspendisse faucibus.",
    position: "CEO of Company",
    company: "Company Name",
  },
  {
    name: "John Doe",
    quote:
      "Nisl tincidunt eget nullam non nisi est sit amet facilisis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Enim neque volutpat ac tincidunt vitae semper quis lectus. Commodo viverra maecenas accumsan lacus vel. Nulla malesuada pellentesque elit eget gravida cum. Tempor commodo ullamcorper a lacus vestibulum.",
    position: "CEO of Company",
    company: "Company Name",
  },
  {
    name: "John Doe",
    quote:
      "Arcu dui vivamus arcu felis bibendum. Id eu nisl nunc mi ipsum. Sed elementum tempus egestas sed sed risus pretium. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ac tincidunt vitae semper quis lectus. Risus nullam eget felis eget nunc lobortis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.",
    position: "CEO of Company",
    company: "Company Name",
  },
];

const StageLookup: any = {
  "/about#slide1": [2, TESTAMONIALS_CONTENT.length],
  "/about": [2, TESTAMONIALS_CONTENT.length],
  "/about#slide2": [3, 1],
  "/about#slide3": [4, 2],
  "/about#slide4": [1, 3],
};

function Testamonials() {
  const router = useRouter();
  console.log(router.asPath);
  console.log(StageLookup[router.asPath]);
  return (
    <div className="flex flex-row">
      <button
        className="  bg-red-500 btn btn-circle"
        onClick={() =>
          router.push(`about#slide${StageLookup[router.asPath][1]}`)
        }
      >
        ❮
      </button>

      <div className="carousel max-w-[1200px] mx-auto">
        <button className="w-[100px] h-[50px] bg-red-500">test</button>
        {TESTAMONIALS_CONTENT.map((testamonials, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <div className="w-full">{testamonials.quote}</div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {/* <a
              href={`#slide${StageLookup[index + 1][1]}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${StageLookup[index + 1][0]}`}
              className="btn btn-circle"
            >
              ❯
            </a> */}
            </div>
          </div>
        ))}
        <button className="btn btn-circle bg-red-500">next</button>
      </div>
      <button
        className="btn btn-circle bg-red-500"
        onClick={() =>
          router.push(`about#slide${StageLookup[router.asPath][0]}`)
        }
      >
        ❯
      </button>
    </div>
  );
}

export default Testamonials;
