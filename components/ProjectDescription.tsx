import React from "react"
import FadingText from "./FadingText";

interface ProjectDescriptionProps {
  challenge: string;
  question: string;
  goal1: string;
  goal2: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ challenge, question, goal1, goal2 }) => {
  return (
    <section id="SustainabiteDescription">
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="Challenge">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi"><FadingText text="The Challenge" /></h2>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
              <FadingText text={challenge} />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-5 py-2 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="Question">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi"><FadingText text="The Question" /></h2>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            <FadingText text={question} />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="User-Based Goals">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi"><FadingText text="User-Based Goals" /></h2>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            <FadingText text="1. " />
            </span>
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            <FadingText text={goal1} />
            </span>
          </p>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
          <span className="font-Satoshi animate-fadeIn animation-delay-1">
            <FadingText text="2. " />
            </span>
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            <FadingText text={goal2} />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription
