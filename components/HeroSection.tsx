"use client" // this is a client component
import React from "react"
import { useEffect } from 'react';
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Script from "next/script"
import animateHeading from 'public/static/animateHeading'

const HeroSection = () => {
  useEffect(() => {
    const heading = document.querySelector('h1.my-heading');
    animateHeading(heading);
  }, []);

  return (
    <section id="home">
      <Script defer src="/static/Random.js"></Script>
      <div className="flex flex-row text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left h-screen my-10 py-16 sm:py-32 md:py-48">
        <div className="md:w-3/5" id="name">
          <h1 className="text-5xl font-bold md:text-7xl font-Satoshi my-heading" data-value="ANDREW GOCHECO">ANDREW GOCHECO</h1>
          <p className="text-3xl mt-4 mb-2 smd:text-2xl">
            <span className="font-Satoshi animate-fadeIn animation-delay-1">
            / ændru /
            </span>
          </p>
          <p className="text-lg mt-4 mb-6 md:text-3xl font-Satoshi animate-fadeIn animation-delay-2">
            <span className="">
              Biomedical Engineering at UWaterloo{" "}
            </span>
          </p>
          <div className="mt-6 py-20 flex items-center text-center justify-center">
          <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce opacity-20 mx-auto" />
        </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center h-1/6">
      </div>
    </section>
  )
}

export default HeroSection
