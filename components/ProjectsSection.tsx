import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRightSquare } from "react-icons/bs"
import FadingText from "./FadingText"

const projects = [
  {
    name: "Sustain-a-Bite",
    description:
      "Helping you find local deals and recipes!",
    location: "/ HackPrinceton /",
    image: "/sustainabite2.png",
    link: "../projects/sustainabite",
  },
  {
    name: "Ontario Upload Page",
    description:
      "Redesigning an upload page",
    location: "/ FASSB /",
    image: "/Ontario.png",
    link: "../projects/upload",
  },
  {
    name: "Ontario Form Page",
    description:
      "Redesigning an online form",
    location: "/ FASSB /",
    image: "/Ontario.png",
    link: "../projects/form",
  },
  {
    name: "Notetaker",
    description:"Turn video lectures into summaries and transcripts",
    location: "/ Hack the North /", 
    image: "/project-1.png",
    link: "../projects/notetaker#top",
  },
  {
    name: "Travel Green",
    description:
      "How much carbon are you releasing?",
    location: "/ TOHacks /",
    image: "/project-2.png",
    link: "../projects/travelgreen#top",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="font-Satoshi my-10 text-center font-bold text-5xl">
        <FadingText text="Projects"/>
        <hr className="w-6 h-1 mx-auto my-4 border-0 rounded"></hr>
      </h1>
      
      <div className=" font-Satoshi flex flex-col space-y-28 mb-10 pb-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link}>
                    <h1 className="text-4xl font-bold mb-6"><FadingText text={project.name}/></h1>
                    </Link>
                    <p className="text-2xl leading-7 mb-4"><FadingText text={project.location}/></p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    <FadingText text={project.description}/>
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link}>
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
