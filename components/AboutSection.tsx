import React from "react"
import FadingText from "./FadingText"

const skills = [
  { skill: "Figma" },
  { skill: "Miro" },
  { skill: "JIRA"},
  { skill: "Azure DevOps"},
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 h-screen">
        <h1 className="text-center font-bold text-4xl font-Satoshi">
          <FadingText text="About Me"/>
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>

        <div className="font-Satoshi flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p className="text-center text-2xl mb-6 md:text-left">
            <FadingText text="My name is Andrew, and I'm studying biomedical engineering at the University of Waterloo!"/>
            </p>
            <br />
            <p className="text-center text-2xl mb-6 md:text-left">
            <FadingText text="I have a passion for making technology accessible for all. I love learning new methods that help me grasp how people and technology interact."/>
            </p>
            <br />
            <p className="text-center text-2xl mb-6 md:text-left">
            <FadingText text="Outside of school, you can find me going for runs or playing hockey. You might also find me trying new foods or playing games like Teamfight Tactics."/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
