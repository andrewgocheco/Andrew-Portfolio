import React from "react"
import FadingText from "./FadingText";
import Image from "next/image";

interface ProjectImages4Props {
  header: string;
  label: string;
  label2: string;
  label3: string;
  label4: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

const ProjectImages4: React.FC<ProjectImages4Props> = ({ header, label, label2, label3, label4, text, text2, text3, text4, image1, image2, image3, image4 }) => {
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
             <p className="text-2xl mt-4 mb-6 smd:text-xl font-bold">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={label} />
              </span>
            </p>
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text} />
              </span>
            </p>
          </div>
          <p className="text-xl mt-4 mb-6 smd:text-xl"></p>
          <div className="pb-8">
            <Image
              src={image2}
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
             <p className="text-2xl mt-4 mb-6 smd:text-xl font-bold">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={label2} />
              </span>
            </p>
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text2} />
              </span>
            </p>
          </div>
          <p className="text-xl mt-4 mb-6 smd:text-xl"></p>
          <div className="pb-8">
            <Image
              src={image3}
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
             <p className="text-2xl mt-4 mb-6 smd:text-xl font-bold">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={label3} />
              </span>
            </p>
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text3} />
              </span>
            </p>
          </div>
          <p className="text-xl mt-4 mb-6 smd:text-xl"></p>
          <div className="pb-8">
            <Image
              src={image4}
              alt=""
              width={900}
              height={900}
              className="rounded-xl shadow-xl"
            />
             <p className="text-2xl mt-4 mb-6 smd:text-xl font-bold">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={label4} />
              </span>
            </p>
            <p className="text-2xl mt-4 mb-6 smd:text-xl">
              <span className="font-Satoshi animate-fadeIn animation-delay-1">
                <FadingText text={text4} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectImages4
