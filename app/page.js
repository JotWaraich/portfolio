/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-950">
      <Navbar />
      <div className="text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold mb-10">Hello, I'm Gurjagjot</h1>
        <p className="text-center max-w-md">
          I'm a junior software developer passionate about creating innovative
          solutions. Explore my projects and learn more about me!
        </p>
        <div className="flex gap-5 mt-10">
          <Link
            href={"/projects"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Projects
          </Link>
          <Link
            href={"about"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
