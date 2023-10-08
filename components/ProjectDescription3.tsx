import React from "react"
import FadingText from "./FadingText";

interface ProjectDescription3Props {
  header: string;
  text: string;
  text2: string;
  text3: string;
}

const ProjectDescription3: React.FC<ProjectDescription3Props> = ({ header, text, text2, text3 }) => {
  return (
    <section id="SustainabiteDescription">
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="Challenge">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi"><FadingText text={header} /></h2>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
              <FadingText text={text} />
            </span>
          </p>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
              <FadingText text={text2} />
            </span>
          </p>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
              <FadingText text={text3} />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription3
