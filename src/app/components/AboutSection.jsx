"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>.Net Core</li>
        <li>.Net Framework</li>
        <li>MVC, Blazor, WebForm</li>
        <li>Next.js Framework</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>TypeScript</li>
        <li>Bootstrap, Tailwindcss</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MCS (Master of Computer Science), Virtual University, Pakistan, 2015</li>
        <li>B.SC (Bachelor of Science), Punjab University, Pakistan, 2013</li>
        <li>B.Sc. (Higher Secondary School Certificate), Rawalpindi Board, Pakistan, 2010</li>
        <li>Matric (Secondary School Certificate), Rawalpindi Board, Pakistan, 2008</li>
        {/* Add more educational details as needed */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ">
        <li >
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.freecodecamp.org/certification/Abkhan/foundational-c-sharp-with-microsoft">
          Foundational C# with Microsoft Certification</a></li>
        <li><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.sololearn.com/certificates/CT-YYBOPNTK">
          C# Certificate with SoloLearn</a></li>
        <li><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.sololearn.com/certificates/CT-C2VFHXYC">SQL Certification with SoloLearn</a></li>
        <li><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.sololearn.com/certificates/CT-H8QANP8M">HTML Certification with SoloLearn</a></li>
        {/* Add more certifications as needed */}
      </ul>
    ),
  },
];

// You can continue to add more sections and content as needed


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Welcome to my portfolio landing page! I am Abdul Wahab, a highly skilled 
          and experienced Full Stack Web Developer with a strong background in 
          .NET Core development and a passion for creating efficient, 
          user-friendly web applications. I have experience
            working with JavaScript, React, Node.js, PostgreSQL, Prisma,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
