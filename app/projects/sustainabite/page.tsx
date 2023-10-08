import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectImages3 from "@/components/ProjectImages3"
import ProjectImages4 from "@/components/ProjectImages4"
import LinkButton from "@/components/LinkButton"
import ProjectInfo from "@/components/ProjectInfo"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <PageHeader
        title="Sustain-a-Bite"
        location="/ HackPrinceton /"
        description="Find the best recipes using deals near you"
      />

      <ProjectInfo
        timeline="24"
        timelineUnit="Hours"
        teamsize="4"
        teamsizeUnit="Members"
        role="Designer"
        roleDesc="Role"
      />

      <ProjectDescription
        header="The Challenge"
        text="American philosopher Ralph Waldo Emerson once claimed that the first wealth is health. A person's health is the key to the rest of their life. So why has it become more and more difficult for those in poverty to access healthy food? With rising grocery prices, it has become a struggle to find affordable, healthy meals."
        text2=""
      />
      <ProjectDescription
        header="The Question"
        text="How might we help those with lower income find healthy meals?"
        text2=""
      />
      <ProjectDescription
        header="User Requirements"
        text="1. Those with lower income are less likely to be technologically adept. The interface and flow of the website should be simple to help the user accomplish the task without assistance."
        text2="2. Users are likely to use a phone when going to shop for ingredients. The solution should incorporate a mobile aspect."
      />
      <ProjectDescription
        header="Our Solution"
        text="We created a website that allows users to find recipes for items on sale based on their city, budget, and ingredient preferences. Users can open a recipe to learn about the total cost, the nutrition facts, the time required to cook, and the ingredient list."
        text2="When a user finds a recipe they like, they can send the information to their phone by entering their phone number. There is also a link to the original source of the recipe that contains more detailed cooking instructions."
      />
      <ProjectImages3
        header="Initial Wireframes"
        label= "Landing Page"
        text="The landing page should inform the user what the website’s purpose is. To achieve this, one sentence was added below the title to summarize the website’s purpose. When the user opens this page, the first task they need to complete is to enter the necessary information to perform a search. Therefore, fields for the ZIP code and budget should be placed at the centre of attention." 
        text11 = "After the user enters the necessary information and clicks the search button, the results appear below the search area to minimize the number of page changes. The recipes should show a preview of the information in the recipe page. This includes: the name of the recipe, the main ingredients used, the price, and an image of the finished recipe. We also wanted to add filtering and sorting options for the results to help users find what they’re looking for. The button to send the recipe to the user’s phone should be placed at the end of each recipe to encourage users to look through all of the information related to the recipe prior to sending the recipe to their phone. We did not want users to spam their phones with recipes that they would not be using as it could make it difficult for them to find the recipe they actually wanted to use. It also helps to prevent the service used to send the texts from being overwhelmed."
        label2="Recipe Page"
        text2="Once the user clicks on a recipe, they are brought to the recipe page. The purpose of the recipe page is to expand upon the recipe results card. The recipe page should list the price, all ingredients used, the steps to cook the recipe, an image of the finished recipe, and a button to send the recipe to the user’s phone."
        text21= "The price was placed beside the recipe name since the focus of our website is to help people find recipes that match their budget. By placing it in the same large font as the title, users can quickly check that the recipe fits their budget. After checking the price, the ingredients were listed. This allows to ensure that the recipe ingredients match their dietary restrictions before they look at the instructions below. After reading the instructions, the user can then send the recipe to their phone using the button located at the bottom. Throughout the process, the image of the finished recipe allows the user to visualize what the recipe looks like."
        label3="Text Recipe Page"
        text3="After selecting the send recipe button, the user is brought to the text recipe page. This page allows users to send the ingredient list for the recipe to their phone. This saves them time as they do not have to write down the recipe, but can simply bring their phone to the grocery store. Before the user can send the recipe to their phone, the user must enter their phone number and confirm that they comply with the terms and conditions."
        text31=""
        image1="/Landing_Wireframe.png"
        image2="/RecipeW2.png"
        image3="/RecipeW1.png"
      />

      <ProjectImages4
        header="Hackathon Design"
        label="Landing Page"
        text="One change we made was to simplify the landing page to ensure that users are not confused by the large number of elements on the page. This was done by separating the input fields and the list of recipes into separate pages."
        label2="Recipe List Page"
        text2="Each of the recipes are displayed as cards with the title, total cost, and an image of the finished recipe. We chose to take out the ingredients list for the recipe list page since we felt it cluttered the card and users could click the card to find the ingredients list if needed. The sorting function was eliminated after the developers warned it may not be completed within the hackathon timeline."
        label3="Recipe Page"
        text3="Since our focus is on healthy recipes, the nutrition facts should appear before the list of ingredients in the expanded recipe page to draw the user's attention to the nutrition facts. A link to the original recipe that the API took the recipe from is also included in case more detail is required."
        label4="Text Recipe Page"
        text4="This page pops up when the user decides clicks the button to send the recipe to their phone. The pop up no longer includes the charges disclaimer since the service we used to implement the text messages did not charge users."
        image1="/landing.png"
        image2="/ResultsPage.png"
        image3="/RecipePage.png"
        image4="/PhonePage.png"
      />

      <ProjectDescription
        header="Developer Handoff"
        text="To help the developers understand the functionality of the UI elements on the mockup, I added interactions using Figma to create an interactive prototype."
        text2=""
      />

      <ProjectDescription
        header="Next Steps after the Hackathon"
        text="In the future, we want to implement a user registration system to allow users to save recipes and add dietary restriction filters. This helps them save time and allows them to receive more personalized recipes."
        text2="We also want to add a deal rating system to give the user a numerical value for the quality of the deal they are receiving. This ensures that we are maximizing our users' money."
      />

      <ProjectImages4
        header="Post-Hackathon Design"
        label="Landing Page"
        text="For the landing page, I decided to add images of the recipe cards that appear when the user searches for recipes. This informs of what users can expect to see through the use of our product. I also simplified the colour palette to black and white with green as an accent colour. I chose to use green as it has associations with healthy foods. The navbar in this iteration also includes the profile picture of the user, their saved recipes, preferences, and goals."
        label2="Recipe List Page"
        text2="In this iteration of the recipe list page, I displayed the search criteria used to find the results. This allows users to quickly edit the search filters if they made a mistake. I also chose to add the calories of each recipe. Since one of the main focuses is health, the user should be informed about the calorie count of the recipe before they decide to learn more about it. To highlight the recipe the user is looking at, a green outline appears on the card when the user is hovering over it. I also applied a blur to the image of the recipe and a “learn more” caption to encourage the user to click on the recipe if they are interested."
        label3="Recipe Page"
        text3="The contents of the recipe page remain the same, but I reorganized the layout to allow the user to see more information without having to scroll as much. I also chose to include the original cost of any items and highlighted the sale price using the accent green. This lets users know which of the ingredients is on sale."
        label4="Text Recipe Page"
        text4="For the text recipe pop-up, I decided to add a blur to the recipe when the pop-up appears. This draws more attention to the pop-up, allowing the user to quickly locate and fill it out."
        image1="/s2LandingPage.png"
        image2="/s2ResultsPage.png"
        image3="/s2RecipePage.png"
        image4="/s2TextPage.png"
      />

      <ProjectDescription
        header="Learnings"
        text="This project helped me to understand how different effects such as blur and drop shadows can affect the hierarchy of objects. This allows designers to draw the user’s attention to important components. I also learned how to communicate with developers to understand what would be feasible to develop during the 24 hour timeline of a hackathon. This helped me to better gauge the complexity of the design and what features would be prioritized."
        text2=""
      />

      <LinkButton
        link="https://devpost.com/software/bites-on-a-budget"
      />
    </main>
  )
}
