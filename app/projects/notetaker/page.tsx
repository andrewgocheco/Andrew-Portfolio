import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectImages3 from "@/components/ProjectImages3"
import ProjectImages4 from "@/components/ProjectImages4"
import LinkButton from "@/components/LinkButton"
import ProjectInfo from "@/components/ProjectInfo"
import ProjectDescription3 from "@/components/ProjectDescription3"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <PageHeader
        title="Notetaker"
        location="/ Hack the North /"
        description="Turn video lectures into summaries and transcripts"
      />

      <ProjectInfo
        timeline="24"
        timelineUnit="Hours"
        teamsize="2"
        teamsizeUnit="Members"
        role="Designer/Developer"
        roleDesc="Role"
      />

      <ProjectDescription
        header="The Challenge"
        text="Since the start of the pandemic, many schools have adopted a virtual classroom format. Many lectures are recorded for students to watch, however, students can become fatigued by the large number of lectures they watch each day. Students cannot completely ignore lectures, but should not have to spend hours watching them."
        text2=""
      />
      <ProjectDescription
        header="The Question"
        text="How might we help students learn from audio/video lectures without fatiguing them from watching for several hours?"
        text2=""
      />
      <ProjectDescription
        header="Our Solution"
        text="We created a website that gives students a summary and transcript of their lecture. To receive the summary and transcript, the student pastes a link to their audio/video lecture into the website. The website generates the summary and transcript based on the link.
        "
        text2=""
      />
      <ProjectDescription
        header="Designing the Website"
        text="We wanted to design our website to be similar to other tools students already use. By doing this, we hoped to lower the learning curve for students to use the tool. The tool we chose to model our website after was Notion. We liked the simple black and white colour scheme of a Notion page."
        text2="We also wanted to ensure that the user followed the steps correctly when going through the process. To encourage the user to follow the correct steps, we put the first step at the top of the page and put the results at the bottom of the page. We also wanted to reduce visual clutter on the website when the user first arrives. To reduce clutter, we left the results sections collapsed or hidden until the results were ready to be given to the user."
      />
      <ProjectImages3
        header="Initial Wireframes"
        label="Landing Page"
        text="The landing page should inform the user of the purpose of the website. In this case, a sentence was added that tells the user our website’s capabilities and risks. The page also includes an input field that allows the user to complete the first step, which is to enter the link to the video/audio lecture."
        text11=""
        label2="Loading Page"
        text2="The loading page appears after the user enters the link and confirms it. The loading page gives the user some feedback to let them know that the link they provide is being summarized."
        text21=""
        label3="Results Page"
        text3="Once the summary is complete, the results appear below the initial input field. This allows the user to quickly view the summary and the link they provide at the same time. In the case that the summary is incorrect, the user can check that the provide link was correct."
        text31=""
        image1="/LandingNW.png"
        image2="/LoadingNW.png"
        image3="/ResultsNW.png"
      />

      <ProjectDescription3
        header="Revisions"
        text="After testing the API used to summarize the audio/video lectures, we realized that it could take up to 5 minutes for the summary to be generated. If a user did not receive any feedback from the website during those 5 minutes, they might believe that the website is not working and click off. To prevent this, we added a disclaimer to our animated loading bar, letting users know that the website would take a few minutes."
        text2="We also wanted to add the ability to retrieve the transcript from the lecture. This was done for students who may find our summaries to be inadequate for their study patterns. They may prefer to quickly read through the lecture instead of listening to it. For these students, we included the transcript of the lecture."
        text3="We also recognized that students may want to copy the summary or transcript given to them to place in a different document. In the original version, they would have to highlight the entire summary or transcript. This could be difficult for long lectures where the summary/transcript was also long. To make it easier for the student to copy the summary/transcript, we added a button underneath each of the sections that copies the respective section to the student's clipboard."
      />

      <ProjectImages4
        header="Final Website"
        label="Landing Page"
        text="The final landing page follows the same layout as the wireframe but adds the results section as a collapsable menu. The collapsable menu allows users to quickly open the transcript or summary if they want to view just one of them."
        label2="Loading Section"
        text2="An animated pencil was added to the loading section to simulate our website writing the summary and transcript. A time estimate of a few minutes was included after we tested sample lectures. This gives users an accurate expectation of how quickly they can expect to receive their summary."
        label3="Summary Section"
        text3="The summary section organizes the summary using both headings and body text to organize the summary. The copy button mentioned earlier was added at the bottom."
        label4="Transcript Section"
        text4="The transcript section displays the entire transcript to the user. In the future, we hope to use natural language processing to identify where paragraph breaks should occur in the transcript. This would prevent the user from feeling overwhelmed by the transcript as it would be broken down into more manageable chunks rather than being displayed all at once."
        image1="/LandingN.png"
        image2="/Loading.png"
        image3="/Summary.png"
        image4="/transcript.png"
      />
      <ProjectDescription
        header="Future Improvements"
        text="In the future, we want to add an extension to our summary feature by creating a worksheet for the user as well. The worksheet would replace key words in the summary with blanks to allow the user to test themselves on how well they know the topic."
        text2="We also wanted to include relevant images to the summary study guide. We believe that this would help students comprehend the material if the visual aspect of the material is relevant. We want to make our website the ultimate study tool for students who are tired of watching long lectures."
      />

      <ProjectDescription
        header="Learnings"
        text="This project helped me to better understand the design to development transistion. As I was responsible for both the design and front-end implementation of the website, I was responsible for handling the transition from a Figma design to HTML and CSS code. It helped me understand how the timeline for developers affects the complexity of the designs they can complete."
        text2=""
      />
      <LinkButton
        link="https://devpost.com/software/notetaker-ewh87s"
      />
    </main>
  )
}
