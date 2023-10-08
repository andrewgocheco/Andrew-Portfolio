import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectInfo from "@/components/ProjectInfo"
import ProjectImages12 from "@/components/ProjectImages12"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <PageHeader
        title="Ontario Chatbot"
        location="/ FASSB /"
        description="Developing a chatbot"
      />

      <ProjectInfo
        timeline="2"
        timelineUnit="Months"
        teamsize="4"
        teamsizeUnit="Members"
        role="Researcher/Developer"
        roleDesc="Role"
      />

      <ProjectDescription
        header="The Challenge"
        text="One of the websites used to house reference material had a search bar that rarely found the correct results. Since the reference documents contained on the website were formatted as pdfs, the search bar could not search through material in the documents and could only search through the title of the document. In order to help internal and external users find the answers to their questions, the team decided to develop a chatbot. The chatbot would act as a backup to the search bar if the user felt the search results were not accurate. The chatbot needed to be compatible with the wordpress website."
        text2=""
      />

      <ProjectImages12
        header="Confirming Assumptions"
        text="To confirm that users were struggling to find the correct information on the website, I did an analysis of the feedback forms for the website. After completing a thematic analysis, it was evident that users were frustrated with the functionality of the search bar as over 70% of the responses to the feedback form on the website had a complaint related to the difficulty in searching for information."
        text2=""
        image1="/Chatbot1.png"
      />

      <ProjectDescription
        header="The Competition"
        text="To begin, the team researched different possible chatbot platforms that would be compatible with the website. Four chatbot platforms were identified. For each chatbot platform, the pricing and features of each chatbot were noted. The results were then presented to the team in charge of maintaining the website. The team was intrigued by all four platforms and decided to test each of the platforms."
        text2=""
      />

      <ProjectImages12
        header="Testing"
        text="Using a sandbox environment of the website, each of the platforms were tested. For each platform, a free trial account was created. The team would explore the functions of each chatbot and attempt to develop a basic chatbot capable of answering a sample question. The chatbot would then be integrated with the sandbox website to ensure that the testing product was compatible with the website. For each platform, the chatbot was judged on ease of development and maintenance, response accuracy, relevant features, interface customizability, security, and pricing."
        text2="To create a chatbot, many of the chatbot platforms also included a chatbot builder tool that utilized a flow-chart style to determine how a chatbot would respond to a given prompt."
        image1="/Chatbot2.png"
      />

      <ProjectDescription
        header="The Proof of Concept"
        text="After testing the four platforms, the team found that one of the platforms to be the most promising. In particiular, this chatbot platform was able to send both text and image responses. The team found this exteremely helpful when trying to guide users on how to complete a specific tasks. The use of screenshots could help users understand the instructions given to them. The team also found it helpful that a safety-net response could be set when the chatbot could not understand the user. The safety-net response could include links to important guides that often contained useful information. To further explore the platform, the team set out to develop a proof of concept. The proof of concept would be able to answer several of the frequently asked questions on the website. Using the platform’s chatbot builder, I created the proof of concept over two weeks."
        text2="As I created the chatbot, I had to determine how the chat with the chatbot would function. There were two options for user responses. The user could either click on a predetermined response or type their own response. I chose to include predetermined responses to help users narrow down their question. By asking questions such as, “Which of the following categories does your question relate to?” and listing the possible categories, the chatbot was more likely to find the correct answer and the user was made aware about the type of information the chatbot had access to. After narrowing down the question, the user would be able to select from common questions related to their area of focus or they could type their own question. The chatbot also asked if the response was accurate after responding to the question to allow the user to give feedback. The chat logs and statistics, such as how often people found the response not helpful and how many conversations occured that day, were useful for the team to better understand how the chatbot was performing."
      />

      <ProjectImages12
        header="User Testing"
        text="In order to understand how users felt about the potential implementation of the chatbot, a survey was sent out asking users of the website if they would be willing to participate in a test. Several users responded saying they would be interested. From the list of interested participants, the team chose 8 interviewees. The 8 interviewees consisted of 4 internal and 4 external users. The users also represented a diverse set of occupations and experience levels with the site. Since users were located far apart geographically, the tests were to be completed online."
        text2="Each test consisted of prelilminary background questions, an unmoderated exploration of the proof of concept, and follow-up questions. The background questions allowed us to better define the person’s experience level with the website and their use case. The unmoderated exploration allowed us to take notes on how users might interact with the chatbot if it were to be deployed. We would be able to capture any struggles the user might have and any weak/strong points of the chatbot. The follow-up questions allowed users to explain their experience after exploring the chatbot. It also allowed them to provide quantifiable feedback. In addition to that, they could comment on anything they found helpful or difficult."
        image1="/Chatbot3.png"
      />

      <ProjectDescription
        header="The Test Results"
        text="After completing the interviews, the results were compiled and analyzed. Based on the quantiative results of the follow-up questions, we concluded that the majority of users across different backgrounds found the chatbot easy to use and would use it frequently if deployed. We also found that many of the interviewees mentioned that the chatbot’s understanding of the question was often incorrect. This may have been caused by the minimal training the chatbot’s language processing had been given. We also received many suggestions for improvement on the chatbot, such as including the ability to use a different language. After compiling these results, they were presented to the team in charge of the website. The team was excited to continue the work and was willing to begin the procurement process for a membership to continue development. I also began compiling the possible improvements into possible user stories and documenting the proof of concept development learnings as I would be leaving the team."
        text2="Each test consisted of prelilminary background questions, an unmoderated exploration of the proof of concept, and follow-up questions. The background questions allowed us to better define the person’s experience level with the website and their use case. The unmoderated exploration allowed us to take notes on how users might interact with the chatbot if it were to be deployed. We would be able to capture any struggles the user might have and any weak/strong points of the chatbot. The follow-up questions allowed users to explain their experience after exploring the chatbot. It also allowed them to provide quantifiable feedback. In addition to that, they could comment on anything they found helpful or difficult."
      />

      <ProjectDescription
        header="Learnings"
        text="Throughout this process, I learned more about the inner workings of chatbots and how they can be developed and integrated into websites. I also learned about competitive analysis and how to plan and run user testing sessions as they were key to the decision making process."
        text2=""
      />
    </main>
  )
}
