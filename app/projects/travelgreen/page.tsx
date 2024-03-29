import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectImages1 from "@/components/ProjectImages1"
import ProjectImages3 from "@/components/ProjectImages3"
import LinkButton from "@/components/LinkButton"
import ProjectInfo from "@/components/ProjectInfo"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Travel Green"
          location="/ TOHacks /"
          description="How much carbon are you releasing?"
          />

        <ProjectInfo
        timeline="24"
        timelineUnit="Hours"
        teamsize="4"
        teamsizeUnit="Members"
        role="Designer/Dev"
        roleDesc="Role"
        />

        <ProjectDescription
        header="The Challenge"
        text="The inspiration came from the lack of awareness that our team members had about transportation and carbon emissions. We knew that cars were unsustainable, and that there are many different eco-friendly modes of transportation, but saying something was unsustainable was vague. How much better is public transportation or biking as opposed to driving? How much carbon do we actually emit by traveling a certain distance with a certain number of people? We didn't have answers to these questions and wanted to see the impact our travel has on the environment."
        text2=""
        />
        <ProjectDescription 
        header="The Solution"
        text="We wanted to create a website that would allow users to visualize their carbon footprint. The user could input their travel distance and the number of travelers, and the website would return the estimated carbon emissions of the trip for different methods of transportation. This would allow the user to see the difference in carbon emissions for different methods of transportation."
        text2=""
        />
        <ProjectImages1 
        header="Model"
        text="Project Model"
        image1="/TGFinal.png"
        />
        <ProjectDescription 
        header="Future Improvements"
        text="In the future, we would like to allow users to create profiles. Creating profiles would allow users to track their carbon footprint over a period of time. Users could also set goals for reducing carbon emissions and track how well they are progressing towards these goals."
        text2=""
        />
        <ProjectImages3 
        header="Sketches for Future"
        label="Landing Page"
        label2="Profile Page"
        label3="Goal Setting Page"
        text=""
        text11=""
        text2=""
        text21=""
        text3=""
        text31=""
        image1="/LandingTG.jpg"
        image2="/FutureProfile.jpg"
        image3="/FutureGoal.jpg"
        />
        <LinkButton 
        link="https://devpost.com/software/tohacks2022-ugesy0"
        />
      </main>
    )
  }
