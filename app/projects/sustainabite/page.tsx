import PageHeader from "@/components/PageHeader"
import ProjectDescription from "@/components/ProjectDescription"

export default function Home() {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <PageHeader 
          title="Sustain-a-Bite"
          location="/ HackPrinceton /"
          description="Find the best recipes for the deals near you"
          />
        <ProjectDescription
        challenge="American philosopher Ralph Waldo Emerson once claimed that, 'the first wealth is health.' A person's health is the key to the rest of their life. So why has it become more and more difficult for those in poverty to access healthy food? With rising grocery prices, it has become a struggle to find affordable, healthy meals."
        question="How can we help those with lower income find healthy meals?"
        goal1="Those with lower income are less likely to be technologically adept. The interface and flow of the website should be simple to keep the user on the correct flow."
        goal2="Users are likely to use a phone when going to shop for ingredients. The solution should incorporate a mobile aspect to allow users to reference ingredient lists when at the store."
        />
      </main>
    )
  }
