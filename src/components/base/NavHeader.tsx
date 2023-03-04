import { useRouter } from "next/router";
import React from "react";

function NavHeader() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="fixed top-0 left-0 flex w-full h-20 justify-between p-3">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => handleNavigate("/projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/experience")}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/about")}>About</button>
            </li>
          </ul>
        </div>
        <button
          onClick={() => handleNavigate("/")}
          className="btn btn-ghost normal-case text-xl"
        >
          daisyUI
        </button>
      </div>
      <div className=" hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => handleNavigate("/projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("/experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("/about")}>About</button>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn my-1 mr-1">Get started</button>
      </div>
    </div>
  );
}

export default NavHeader;
