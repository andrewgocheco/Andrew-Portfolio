import React from "react"
import FadingText from "./FadingText"

const skills = [
  { skill: "Figma" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "Bootstrap" },
  { skill: "Tailwind" },
  { skill: "GitHub" },
  { skill: "JIRA"},
  { skill: "Azure"},
  { skill: "Miro" },
  { skill: "C++"},
  { skill: "C#"},
  { skill: "XML" },
]

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="md:pt-16 md:pb-42 h-screen">
        <h1 className="text-center font-bold text-5xl font-Satoshi">
        <FadingText text="Skills"/>
          <hr className="w-6 h-1 mx-auto my-4 border-0"></hr>
        </h1>

        <div className="font-Satoshi flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="text-right md:w-1/2">
            <div className="flex flex-wrap flex-row z-10 justify-between uppercase group">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-5xl px-3 py-1 fancy"
                  >
                    <FadingText text={item.skill}/>
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
