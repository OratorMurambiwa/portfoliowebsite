import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex w-full flex-col">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}