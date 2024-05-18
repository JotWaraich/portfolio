import React from "react";
import { motion } from "framer-motion";

const Projectcard = ({ photoLink, title, description, icons, side, link }) => {
  if (side == "left") {
    return (
      <div className="flex flex-row gap-20">
        <div className="">
          <a href={`${link}`}>
            <img
              src={`${photoLink}`}
              alt="Website Photo"
              width={500}
              height={350}
            />
          </a>
        </div>
        <div className="flex flex-col w-[600px] justify-center gap-10">
          <div className="text-white text-center font-bold text-2xl">
            {title}
          </div>
          <div className="text-white text-center">{description}</div>
          <div className="flex justify-center">{icons}</div>
        </div>
      </div>
    );
  }
  if (side == "right") {
    return (
      <div className="flex flex-row gap-20">
        <div className="flex flex-col w-[600px] justify-center gap-10">
          <div className="text-white text-center font-bold text-2xl">
            {title}
          </div>
          <div className="text-white text-center">{description}</div>
          <div className="flex justify-center">{icons}</div>
        </div>
        <div className="">
          <a href={`${link}`}>
            <img
              src={`${photoLink}`}
              alt="Website Photo"
              width={500}
              height={350}
            />
          </a>
        </div>
      </div>
    );
  }
};

export default Projectcard;
