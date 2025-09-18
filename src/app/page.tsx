import Intro from "../components/intro";
import Services from "@/components/services";
import Projects from "@/components/projects";
import ClientReviews from "@/components/client-reviews";
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4 " >
      <Intro/>
      <Services/>
      <Projects/>
      <ClientReviews/>
      <Contact />
    </main>
  );
}
