import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectDescription3 from "@/components/ProjectDescription3"
import ProjectImages1 from "@/components/ProjectImages1"
import ProjectInfo from "@/components/ProjectInfo"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <PageHeader
        title="Ontario Form Page"
        location="/ FASSB /"
        description="Redesigning an online form"
      />

      <ProjectInfo
        timeline="2"
        timelineUnit="Weeks"
        teamsize="4"
        teamsizeUnit="Members"
        role="Designer"
        roleDesc="Role"
      />

      <ProjectDescription3
        header="The Challenge"
        text="During the pandemic, the form was moved from a paper form to an online form on an Ontario portal. The online form mimicked the paper form by following the same structure. The paper and online form was broken up into 5 main sections. However, one of the sections was much longer than the others. As a result, one of the pages was extremely long and was fatiguing for users to complete."
        text2="In addition, documents that were originally submitted in-person or by mail were now being submitted through the same portal. The upload page currently has two main issues. The first is that the input fields are difficult to find. Currently, to open the input fields, the user has to click a component that resembles a tab. No other form uses this tab component, making it difficult for the user to find the input fields."
        text3="Secondly, there is limited feedback for the user during the upload process and after the document finishes uploading. During the upload, there is no indication that the upload has started or progressed. The selected file simply disappears when the upload is complete and is added to the table of uploaded files. This happens extremely quickly, making it unlikely for the user to realize that the file has been uploaded."
      />

      <ProjectDescription
        header="Shortening Descriptions"
        text="After looking through the longest page, the team realized that the descriptions after each question contributed a large amount to the length of the page. Therefore, it was important to find a way to keep the descriptions for those who wanted clarification for each question but also limit the space they take up."
        text2='To solve this, the team decided to implement a "Learn More" button. Users could click the button to show the description if they needed clarification. For users who do not need to read a description to answer a question, they can access the input fields faster, saving them time and reducing scrolling fatigue.'
      />
      <ProjectDescription
        header="Reorganizing the Form"
        text="While the paper form was able to condense the longest section into one page using a table, the online version of the form could not use the same table due to the Accessibility for Ontarians with Disabilities Act. The table format is not screen reader friendly."
        text2="Instead, the team decided to reorganize the online form into 7 sections instead of 5. By grouping similar questions together and creating separate pages, the largest section was broken down into smaller, more digestible sections. The user could also save after completing each smaller section, allowing them to pick up where they left off after a break. Smaller sections allow the user to complete a section before leaving, making it easier for them to remember where they left off."
      />
      <ProjectDescription
        header="Mobile Accessibility"
        text="The team also recognized that the progress bar located at the top of the page was not mobile-friendly. The current design had a circle for each of the sections lined up horizontally along a progress line. This design functioned well on large screens, such as desktops, but was difficult to use on mobile screens due to their smaller screen width."
        text2="To allow mobile users to keep track of their progress, the team took inspiration from the Ontario Design System. The system recommended using a text label at the top of the page that displayed the step the user was currently on and the total number of steps. This solution allowed users on mobile devices to keep track of their progress."
      />
      <ProjectImages1
        header="Ontario Design System"
        text="Mobile-friendly step indicator used"
        image1="/Step.png"
      />

      <ProjectDescription
        header="Making Uploading Easier"
        text="To make it easier for users to understand how to upload a document to the site, the tab shaped button was changed to a square button that matches the Ontario Design System. This matches other Ontario Government websites, creating consistency across Ontario Government websites and allows the user to draw on past experiences. The order of the upload button and document table were also rearranged. The table is shown first to allow users to see what documents they have already uploaded before they upload any new documents. This limits the number of accidental duplicate files."
        text2=""
      />

      <ProjectImages1
        header="Ontario Design System"
        text="Sample Button"
        image1="/Button.png"
      />

      <ProjectDescription
        header="Giving More Feedback"
        text="To increase feedback during the upload process, additional confirmations were added. When a document is selected, a remove sign appears below the name of the document. This allows the user to quickly change what document is to be uploaded. When the user confirms that the correct document has been chosen, a progress bar shows the progress of the upload. When the upload is complete, the document is added to the table and the new row is highlighted with a light yellow. The input fields also clear and close, allowing the user to repeat the process if they need to upload multiple documents."
        text2=""
      />

      <ProjectDescription
        header="Presenting the Changes"
        text="After determining what changes would be necessary to tackle the challenges facing the portal, I created an updated prototype of the website in Figma. The prototype demonstrated how the new changes would function and what the screens that the end user would see. I presented this interactable prototype to the team responsible for the maintenance of the portal. I received feedback on the designs and the feasability of certain features. Using the feedback, I was able to make tweaks to the final prototype before it was sent to the development team."
        text2=""
      />
    </main>
  )
}
