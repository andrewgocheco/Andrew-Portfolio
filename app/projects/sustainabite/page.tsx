import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"
import ProjectImagesS from "@/components/ProjectImagesS"
import ProjectImagesS2 from "@/components/ProjectImagesS2"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Sustain-a-Bite"
          location="/ HackPrinceton /"
          description="Find the best recipes for the deals near you"
          />
        <ProjectDescription
        header="The Challenge"
        text="American philosopher Ralph Waldo Emerson once claimed that, 'the first wealth is health.' A person's health is the key to the rest of their life. So why has it become more and more difficult for those in poverty to access healthy food? With rising grocery prices, it has become a struggle to find affordable, healthy meals."
        text2=""
        />
        <ProjectDescription 
        header="The Question"
        text="How can we help those with lower income find healthy meals?"
        text2=""
        />
        <ProjectDescription 
        header="User-Based Goals"
        text="1. Those with lower income are less likely to be technologically adept. The interface and flow of the website should be simple to keep the user on the correct flow."
        text2="2. Users are likely to use a phone when going to shop for ingredients. The solution should incorporate a mobile aspect to allow users to reference ingredient lists when at the store."
        />
        <ProjectDescription 
        header="Our Solution"
        text="We created a website that allows users to find recipes for sale items based on their city, budget, and any specific ingredient. The website displays a list of recipes based on these search criteria. Users can open a recipe to learn more about it. The recipe pages contain information such as the total cost, the nutrition facts, the minutes required to cook, and the ingredients. When a user selects a recipe, they can also send the information to their phone by entering their phone number. There is also a link to the original source of the recipe that contains detailed cooking instructions."
        text2=""
        />
        <ProjectImagesS
        header="Initial Wireframes"
        text="Landing Page"
        text2="Recipe Page"
        text3="Text Recipe Page"
        />
        <ProjectDescription
        header="Initial Revisions"
        text="1. Simplify the landing page to ensure that users are not confused about the number of elements on the page. This can be done by separating the input fields and the list of recipes into separate pages."
        text2="2. Since our focus is on healthy recipes, the nutrition facts should appear before the list of ingredients in the expanded recipe page to draw the user's attention to the nutrition facts."
        />
        <ProjectImagesS2
        header="Final Design"
        text="Landing Page"
        text2="Recipe Page"
        text3="Text Recipe Page"
        text4=""
        />

      </main>
    )
  }
