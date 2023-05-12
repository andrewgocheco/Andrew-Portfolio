import React from "react"
import FadingText from "./FadingText";
import Image from "next/image";

interface ProjectImages1Props {
  header: string;
  text: string;
  image1: string;
}

const ProjectImages1: React.FC<ProjectImages1Props> = ({ header, text, image1 }) => {
  return (
    <section id="ProjectDescription">
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="Images">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi pb-10"><FadingText text={header} /></h2>
          <div className="pb-10 mb-10">
            <Image
              src={image1}
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectImages1
