import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-950">
      <div>
        <Navbar />
      </div>
      <div className="text-white mt-20">
        <div className="justify-center items-center">
          <div className="text-5xl font-bold text-center mt-20">Gurjagjot</div>
          <div className="text-2xl font-bold text-center mt-5">
            Full Stack Developer
          </div>
          <div className="p-48 flex flex-col justify-center items-center text-center">
            <p>
              As a junior software developer, I embrace the significance of
              teamwork and the power of diverse perspectives. I thrive on
              solving problems and am always eager to explore new learning
              opportunities, which allows me to contribute innovative ideas to
              collaborative projects.
            </p>
            <br />
            <p>
              Currently pursuing a Software Development Diploma at the Southern
              Alberta Institute of Technology (SAIT) in Calgary, AB, I am set to
              graduate in December 2024. My educational journey also includes
              specialized training in Full Stack Web Development, Java, and
              C/C++ programming from renowned institutes in Bathinda, Punjab,
              India.
            </p>
            <br />
            <p>
              My technical skills encompass designing applications in C++ using
              VS Code, full-stack web development with React and Next.js, and
              proficiency in Python. I am well-versed in Git and GitHub, SQL and
              NoSQL databases, and mobile app development using React Native and
              Flutter. Additionally, I possess strong organizational abilities
              and excellent communication skills, ensuring effective
              collaboration in any team setting.
            </p>
            <br />
            <p>
              With a passion for continuous improvement and a commitment to
              leveraging my skills for innovative solutions, I am excited to
              contribute to dynamic development projects and grow as a
              professional in the software development field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
