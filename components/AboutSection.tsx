import React from "react"

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
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-purpleblue border-0 rounded"></hr>
        </h1>

        <div className="font-Satoshi flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Who am I?
            </h1>
            <p>
              My name is Andrew, and I'm studying biomedical engineering at the University of Waterloo!
            </p>
            <br />
            <p>
              I have a passion for making technology accessible for all. I love learning new methods that help me grasp how people and technology interact.
            </p>
            <br />
            <p>
              Outside of school, you can find me going for runs or playing hockey. You might even catch me playing games like Teamfight Tactics.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
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

export default AboutSection
