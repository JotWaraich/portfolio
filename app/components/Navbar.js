import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Gurjagjot</div>
        <div className="flex gap-5">
          <Link href={"/"} className="font-bold">
            Home
          </Link>
          <Link href={"/projects"} className="font-bold">
            Projects
          </Link>
          <Link href={"about"} className="font-bold">
            about
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/JotWaraich">
            <BsGithub className="text-2xl mt-[2px]" />
          </a>
          <a href="https://www.linkedin.com/in/gurjagjot-waraich/">
            <AiFillLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
