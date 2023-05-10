import React from "react";

interface PageHeaderProps {
  title: string;
  location: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, location, description }) => {
  return (
    <section id={title}>
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left h-screen my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="ProjectName">
          <h1 className="text-4xl font-bold md:text-6xl font-Satoshi">{title}</h1>
          <p className="text-2xl mt-4 mb-2 smd:text-xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            {location}
            </span>
          </p>
          <p className="text-lg mt-4 mb-6 md:text-3xl font-Satoshi animate-fadeIn animation-delay-2">
            <span className="">
              {description}{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
