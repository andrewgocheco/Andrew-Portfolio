import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectImages3 from "@/components/ProjectImages3"
import ProjectImages4 from "@/components/ProjectImages4"
import LinkButton from "@/components/LinkButton"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Notetaker"
          location="/ Hack the North /"
          description="Turn video lectures into summaries and transcripts"
          />
        <ProjectDescription
        header="The Challenge"
        text="Since the start of the pandemic, many schools have adopted a virtual classroom format.Many lectures are recorded for students to watch, however, students can become fatigued by the large number of lectures they watch each day. Students cannot completely ignore lectures, but should not have to spend hours watching them."
        text2="Note: This project had a time limit of 24 hours."
        />
        <ProjectDescription 
        header="The Question"
        text="How can we help students learn from lectures without fatiguing them from watching lectures?"
        text2=""
        />
        <ProjectDescription 
        header="Our Solution"
        text="We created a website that gives students a summary and transcript of their lecure. To receive the summary and transcript, the student pastes a link to their audio/video lecture into the website. The website generates the summary and transcript based on the link."
        text2=""
        />
        <ProjectDescription 
        header="Designing the Website"
        text="We wanted to design our website to be similar to other tools students already use. By doing this, we hoped to lower the learning curve for students to use the tool. The tool we chose to model our website after was Notion. We liked the simple black and white colour scheme of a notion page."
        text2="We also wanted to ensure that the user followed the steps correctly when going through the process. To encourage the user to follow the correct steps, we put the first step at the top of the page and put the results at the bottom of the page. We also wanted to reduce visiula clutter on the website when the user first arrives. To reduce clutter, we left the results sections collapsed until the results are ready to be given to the user."
        />
        <ProjectImages3
        header="Initial Wireframes"
        text="Landing Page"
        text2="Loading Page"
        text3="Results Page"
        image1="/LandingNW.png"
        image2="/LoadingNW.png"
        image3="/ResultsNW.png"
        />
        <ProjectDescription 
        header="Revisions"
        text="After testing the API used to summarize the audio/video lectures, we realized that it could take up to 5 minutes for the summary to be generated. If a user did not receive any feedback from the website during those 5 minutes, they might believe that the website is not working and click off. To prevent this, we add a disclaimer to our animated loading bar, letting users know that the website would take a few minutes."
        text2="We also recognized that students may want to copy the summary or transcript given to them to place in a different document. In the original version, they would have to highlight the entire summary or transcript. This could be difficult for long lectures where the summary/transcript was also long. To make it easier for the student to copy the summary/transcript, we added a button underneath each of the sections that copies the respective section to the student's clipboard."
        />
        <ProjectImages4 
         header="Final Website"
         text="Landing Page"
         text2="Loading Section"
         text3="Summary Section"
         text4="Transcript Section"
         image1="/LandingN.png"
         image2="/Loading.png"
         image3="/Summary.png"
         image4="/transcript.png"
        />
        <ProjectDescription 
        header="Future Improvements"
        text="In the future, we want to add an extension to our summary feature by creating a worksheet for the user as well. The worksheet would replace key words in the summary with blanks to allow the user to test themselves on how well they know the topic."
        text2="We also wanted to include relevant images to the summary study guide. We want to make our website the ultimate study tool for students who are tired of watching long lectures."
        />
        <LinkButton 
        link="https://devpost.com/software/notetaker-ewh87s"
        />
      </main>
    )
  }
