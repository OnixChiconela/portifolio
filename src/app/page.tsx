
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiSection } from "./components/HiSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Experience from "./components/Experience";
import { listingdesc2, listingdesc3, listingsdesc1, webtraffic1, webtraffic2 } from "./types";
import { Navbar } from "./components/navbar/Navbar";

const scrollAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [sectionVisible, setSectionVisible] = useState({
    hiSection: false,
    about: false,
    experience: false,
    additionalExperience: false,
    projects: false,
    contact: false,
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Atualiza a visibilidade das seções com base na posição do scroll
    if (scrollY > 0) setSectionVisible((prev) => ({ ...prev, about: true }));
    if (scrollY > windowHeight) setSectionVisible((prev) => ({ ...prev, experience: true }));
    if (scrollY > windowHeight * 1.5) setSectionVisible((prev) => ({ ...prev, additionalExperience: true }));
    if (scrollY > windowHeight * 2) setSectionVisible((prev) => ({ ...prev, projects: true }));
    if (scrollY > windowHeight * 2.5) setSectionVisible((prev) => ({ ...prev, contact: true }));
  };

  useEffect(() => {
    // Animação de fade-in para a seção HiSection
    setSectionVisible((prev) => ({ ...prev, hiSection: true }));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiSectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const endAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const colorAnimation = {
    hidden: { opacity: 0, backgroundPosition: "0% 50%" },
    visible: {
      opacity: 1,
      backgroundPosition: "100% 50%"
    },
  };


  return (
    <div>
      <Navbar
        refs={{
          hiSection: hiSectionRef,
          about: aboutRef,
          experience: experienceRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <div className="bg-white h-full flex flex-col">
        {/* Seção HiSection */}
        <motion.div
          ref={hiSectionRef}
          className="mt-16 px-20 lg:px-28 flex items-center justify-center max-w-screen-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={scrollAnimation}
          transition={{ duration: 0.8 }}
        >
          <HiSection />
        </motion.div>

        <motion.div
          className="border-b-[1px] my-20"
          initial={{ opacity: 0 }}
          animate={sectionVisible.about ? "visible" : "hidden"}
          variants={scrollAnimation}
          transition={{ duration: 0.6 }}
        />

        {/* Seção About */}
        <motion.div
          ref={aboutRef}
          className="px-20 lg:px-28 flex justify-center items-center max-w-screen-xl mx-auto"
          initial="hidden"
          animate={sectionVisible.about ? "visible" : "hidden"}
          variants={scrollAnimation}
          transition={{ duration: 0.8 }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          className="border-b-[1px] my-20"
          initial={{ opacity: 0 }}
          animate={sectionVisible.experience ? "visible" : "hidden"}
          variants={scrollAnimation}
          transition={{ duration: 0.6 }}
        />

        {/* Seção Experience */}
        <motion.div
          className="px-4 lg:px-28 pb-10 max-w-screen-xl mx-auto"
          initial="hidden"
          animate={sectionVisible.experience ? "visible" : "hidden"}
          variants={scrollAnimation}
          transition={{ duration: 0.8 }}
        >

          <div className="flex justify-center items-center mb-10">
            <text className="
          font-extrabold text-xl lg:text-2xl text-transparent items-center
          bg-clip-text bg-gradient-to-r from-gray-900 
        via-fuchsia-950 to-black
  ">
              Experience
            </text>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-4 lg:px-28 max-w-screen-xl mx-auto">
          <Experience
            title="Leeva Digital Agency"
            companyName="Intern"
            duration="Sep 2023 - Jan 2024"
            content={[
              "Replaced Firebase with a custom backend service for scalability.",
              "Defined system requirements in close collaboration with clients.",
              "Enhanced system efficiency through RESTful API development."
            ]}
          />
          <Experience
            title="Reus Listing and Reserves"
            companyName="Software Developer"
            duration="Jan 2024 - Present"
            content={[
              "Designed and implemented user-friendly interfaces.",
              "Improved the backend performance of existing services.",
              "Worked with Agile teams to deliver high-quality software."
            ]}
          />
        </div> */}
          <div className="px-4 lg:px-28 mt-6 flex justify-center items-center max-w-screen-xl mx-auto">
            <Experience
              title="Intern Full-Stack Developer"
              companyName="Leeva Digital Agency"
              duration="Sep 2023 - Jan 2024"
              content={[
                "I worked on developing a backend service to replace Firebase for a custom printing company.",
                "Designed and implemented backend RESTful APIs using PHP, enhancing system efficiency and providing the client with control and scalabilty.",
                "Collabored closely with the client to define sytem requirements, establish goals, and ensure their vision was met.",
              ]}
              tools={"Tools"}
              toolsDesc="PHP, Angular, MySQL, others"
            />
          </div>
        </motion.div>


        {/* Seção Additional Experience */}
        <motion.div
          className="px-4 lg:px-28 pb-10 max-w-screen-xl mx-auto"
          initial="hidden"
          animate={sectionVisible.additionalExperience ? "visible" : "hidden"}
          variants={scrollAnimation}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="border-b-[1px] my-10"
            initial={{ opacity: 0 }}
            animate={sectionVisible.additionalExperience ? "visible" : "hidden"}
            variants={scrollAnimation}
            transition={{ duration: 0.6 }}
          />
          <div className="flex justify-center items-center mb-10">
            <text className="
           font-extrabold text-xl lg:text-2xl text-transparent items-center
           bg-clip-text bg-gradient-to-r from-gray-900 
         via-fuchsia-950 to-black
  ">
              Additional Experience
            </text>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 px-4 lg:px-28 max-w-screen-xl mx-auto">
            <Experience
              title="Software developer (owner)"
              companyName="Restaurants project"
              duration=""
              content={[
                listingsdesc1,
                listingdesc2,
                listingdesc3
              ]}
              tools="Tools"
              toolsDesc="TypeScript, Nest JS, react native, JWT, MongoDB, and other technologies to create both frontend and backend components"
              comp={"Project Completion"}
              compDesc="December 2024 - January 2025"
            />
            <Experience
              title="Software developer (owner)"
              companyName="Web Traffic Management"
              duration=""
              content={[
                webtraffic1,
                webtraffic2,
              ]}
              tools="Tools"
              toolsDesc="Java, Spring Boot, MySQL, others"
              comp={"Project Completion"}
              compDesc="No scheduled completation"
            />
          </div>
        </motion.div>

        {/* Seção Projects */}
        <div className="bg-[#161616] min-h-screen flex flex-col">

          <motion.div
            ref={projectsRef}
            className="px-4 lg:px-28 flex justify-center items-center max-w-screen-xl mx-auto"
            initial="hidden"
            animate={sectionVisible.projects ? "visible" : "hidden"}
            variants={scrollAnimation}
            transition={{ duration: 0.8 }}
          >
            <ProjectsSection />
          </motion.div>

          <motion.div
            className="bg-[#161616] h-full py-10"
            initial="hidden"
            animate={sectionVisible.contact ? "visible" : "hidden"}
            variants={scrollAnimation}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="border-b-[1px] my-16"
              initial={{ opacity: 0 }}
              animate={sectionVisible.projects ? "visible" : "hidden"}
              variants={scrollAnimation}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              ref={contactRef}
              className="px-14 lg:px-28 pb-10 max-w-screen-xl mx-auto"
              initial="hidden"
              animate={sectionVisible.about ? "visible" : "hidden"}
              variants={scrollAnimation}
              transition={{ duration: 0.8 }}
            >
              <ContactSection />
            </motion.div>
          </motion.div>
          <div className="flex-1"></div>
        </div>
        <motion.div
          className="flex justify-center items-center mt-20 mb-10"
          initial="hidden"
          animate="visible"
          variants={endAnimation}
          
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-xl font-extrabold bg-clip-text text-transparent 
          bg-gradient-to-r from-fuchsia-900 via-black to-red-500">
            If you think the code is perfect, it's because you have&apos;t run it in production yet 
          </div>
          <text>__</text>
          <text> 💀 😅 </text>
        </motion.div>

        {/* <div className="h-16 bg-gradient-to-b from-[#d2d2d2] to-[#fff]" /> */}
      </div>
    </div>
  );

}




