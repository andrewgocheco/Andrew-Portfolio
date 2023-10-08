import React from "react"
import FadingText from "./FadingText";

interface ProjectInfoProps {
  timeline: string;
  timelineUnit: string;
  teamsize: string;
  teamsizeUnit: string;
  role: string;
  roleDesc: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ timeline, timelineUnit, teamsize, teamsizeUnit, role, roleDesc }) => {
  return (
    <section id="ProjectInfo">
      <div className="font-Satoshi flex flex-col items-center justify-center h-screen md:text-left">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 pr-12 items-start">
            <h1 className="text-4xl font-bold mb-6"><FadingText text={timeline} /></h1>
            <p className="text-2xl leading-7 mb-4"><FadingText text={timelineUnit} /></p>
          </div>
          <div className="md:w-1/3 pr-12 items-start">
            <h1 className="text-4xl font-bold mb-6"><FadingText text={teamsize} /></h1>
            <p className="text-2xl leading-7 mb-4"><FadingText text={teamsizeUnit} /></p>
          </div>
          <div className="md:w-1/3 pr-12 items-start">
            <h1 className="text-4xl font-bold mb-6"><FadingText text={role} /></h1>
            <p className="text-2xl leading-7 mb-4"><FadingText text={roleDesc} /></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo
