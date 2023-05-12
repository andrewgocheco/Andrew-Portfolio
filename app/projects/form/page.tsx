import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Better Jobs Ontario"
          location="/ FASSB /"
          description="Redesigning the form page"
          />
        <ProjectDescription
        header="The Challenge"
        text="During the pandemic, the Better Jobs Ontario form was moved from a paper form to an online form on the Better Jobs Ontario portal. The online form mimicked the paper form by following the same structure. The paper and online form was broken up into 5 main sections. However, one of the sections was much longer than the others. As a result, one of the pages was extremely long and was fatiguing for users to complete."
        text2=""
        />
        <ProjectDescription 
        header="Shortening Descriptions"
        text="After looking through the longest page, the team realized that the descriptions after each question contributed a large amount to the length of the page. Therefore, it was important to find a way to keep the description for those who wanted clarification for each question."
        text2="To solve this, the team decided to implement a Learn More button. Users could click the button to show the description if they need clarification. For users who do not need to read a description to answer a question, they can access the input fields faster, saving them time and reducing scrolling fatigue."
        />
        <ProjectDescription 
        header="Reorganizing the Form"
        text="While the paper form was able to condense the longest section into one page using a table, the online version of the form could not use the same table due to the Acessibility for Ontarians with Disabilities Act. The table format is not screen reader friendly."
        text2="Instead, team decided to reorganize the online form into 7 sections instead of 5. By grouping similar questions together and creating separate pages, the largest section was broken down into smaller, digestible sections. The user could also save after completing each smaller section, allowing them to pick up where they left off after a break. Smaller sections allow the user to complete a section before leaving, making it easier for them to remember where they left off."
        /> 
        <ProjectDescription 
        header="Mobile Accessibility"
        text="The team also recognized that the progress bar located at the top of the page was not mobile-friendly. The current design had a circle for each of the sections lined up horizontally along a progress line. This design functioned well on large screens, such as desktops, but was difficult to use on mobile screens due to their smaller screen width."
        text2="To allow mobile users to keep track of their progress, the team took inspiration from the Ontario Design System. The system recommended using a text label at the top of the page that displayed the step the user was currently on and the total number of steps. This solution allowed users on mobile devices to keep track of their progress."
        />
      </main>
    )
  }
