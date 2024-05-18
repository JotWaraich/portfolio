import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import React from "react";
import Navbar from "../components/Navbar";
import Projectcard from "../components/Projectcard";

const Projects = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-950">
      <div>
        <Navbar />
      </div>
      <div className="text-white flex flex-col">
        <div className="">
          <div className="text-5xl font-bold text-center mt-20">Projects</div>
          <div className="ml-[120px] mt-16">
            <Projectcard
              photoLink={`/File organiser.png`}
              title={`File organiser`}
              description={`The File Organizer App is a powerful tool designed to streamline and simplify the management of files within a directory. By automatically categorizing files based on their types, this app ensures your workspace remains clutter-free and organized. Common file types such as audio, video, and images are sorted into clearly labeled folders, making it easy to locate and manage your files. This intuitive application supports various file extensions and provides a user-friendly interface, making it an essential utility for anyone looking to maintain a tidy and efficient file system.`}
              icons={
                <div>
                  <FaPython className="text-4xl" />
                </div>
              }
              side="left"
              link="https://github.com/JotWaraich/File-Sorting"
            />
          </div>
          <div className="ml-[600px] mt-16">
            <Projectcard
              photoLink={`/games discount.png`}
              title={`Games Discount`}
              description={`The Game Discount is your go-to platform for discovering the best deals on video games across all major game distributors. Built with Next.js, our website aggregates discounts from various sources, ensuring you can easily find and compare the latest offers. With a user-friendly interface, you can search and filter through a comprehensive list of discounted games to find exactly what you're looking for. Whether you're a casual gamer or a hardcore enthusiast, the Game Discount Tracker helps you save money while expanding your game collection.`}
              icons={
                <div>
                  <TbBrandNextjs className="text-5xl" />
                </div>
              }
              side="right"
              link="https://game-discount.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
