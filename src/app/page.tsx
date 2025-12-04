import Intro from "../components/intro";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import ClientReviews from "@/components/client-reviews";
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro/>
      <Services/>
      <Projects/>
      <About/>
      <ClientReviews/>
      <Contact />
    </main>
  );
}
