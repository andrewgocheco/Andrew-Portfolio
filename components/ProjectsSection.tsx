import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Sustain-a-Bite",
    description:
      "Helping you find local deals and recipes!",
    location: "/ HackPrinceton /",
    image: "/project-3.png",
    link: "../projects/sustainabite",
  },
  {
    name: "Notetaker",
    description:"Turn video lectures into summaries and transcripts",
    location: "/ Hack the North /", 
    image: "/project-1.png",
    link: "../projects/notetaker",
  },
  {
    name: "Travel Green",
    description:
      "How much carbon are you releasing?",
    location: "/ TOHacks /",
    image: "/project-2.png",
    link: "../projects/travelgreen",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="font-Satoshi my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-purpleblue border-0 rounded"></hr>
      </h1>

      <div className=" font-Satoshi flex flex-col space-y-28 mb-10 pb-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
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
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-2xl leading-7 mb-4">{project.location}</p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
