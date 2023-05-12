import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Better Jobs Ontario"
          location="/ FASSB /"
          description="Redesigning the upload page"
          />
        <ProjectDescription
        header="The Challenge"
        text="The upload page currently has two main issues. The first is that the input fields for the upload are difficult to find. Currently, to open the input fields, the user has to click a component that resembles a tab. No other form uses this tab component, making it difficult for the user to find the input fields."
        text2="Secondly, there is limited feedback for the user once the document finishes uploading. During the upload, there is now indication that the upload has started or progressed. The selected file simply disappears when the upload is complete and is added to the table of uploaded files. This happens extremely quickly, making it unlikely for the user to realize that the file has been uploaded."
        />
        <ProjectDescription 
        header="Making Uploading Easier"
        text="To make it easier for users to understand how to upload a document to the site, the tab shaped button was changed to a square button that matches the Ontario Design System. This matches other Ontario Government websites, creating consistency across Ontario Government websites. The order of the upload button and document table were also rearranged. The table is shown first to allow users to see what documents they have already uploaded before they upload any new documents."
        text2=""
        />
        <ProjectDescription 
        header="Giving More Feedback"
        text="To increase feedback during the upload process, additional confirmations were added. When a document is selected, a remove sign appears below the name of the document. This allows the user to quickly change what document is to be uploaded. When the user confirms that the correct document has been chosen, a progress bar shows the progress of the upload. When the upload is complete, the document is added to the table and the new row is highlighted with a light yellow. The input fields also clear and close, allowing the user to repeat the process if they need to upload multiple documents."
        text2=""
        />
      </main>
    )
  }
