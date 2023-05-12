import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Navbar from "@/components/Navbar"
import SkillsSection from "@/components/SkillsSection"

export default function Home() {
  return (
    <main>
      <Navbar />
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
    </main>
  )
}
