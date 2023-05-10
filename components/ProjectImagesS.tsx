import React from "react"
import FadingText from "./FadingText";
import Image from "next/image";

interface ProjectImagesSProps {
  header: string;
  text: string;
  text2: string;
  text3: string;
}

const ProjectImagesS: React.FC<ProjectImagesSProps> = ({ header, text, text2, text3 }) => {
  return (
    <section id="SustainabiteDescription">
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="Images">
          <h2 className="text-3xl font-bold smd:text-xl font-Satoshi pb-10"><FadingText text={header} /></h2>
          <div className="pb-10 mb-10">
            <Image
              src="/Landing_Wireframe.png"
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
          <p className="text-xl mt-4 mb-6 smd:text-xl"></p>
          <div className="pb-8">
            <Image
              src="/Sustainabite/RecipeW2.png"
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text2} />
              </span>
            </p>
          </div>
          <p className="text-xl mt-4 mb-6 smd:text-xl"></p>
          <div className="pb-8">
            <Image
              src="/Sustainabite/RecipeW1.png"
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text3} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectImagesS
