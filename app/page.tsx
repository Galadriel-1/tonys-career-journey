import resume from "@/data/resume.json";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Path } from "@/components/Path";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import type { ResumeData } from "@/lib/types";

const data = resume as ResumeData;

export default function Home() {
  return (
    <>
      <Nav name={data.name} />
      <main className="flex-1">
        <Hero resume={data} />
        <Path resume={data} />
        <Skills skills={data.skills} />
      </main>
      <Footer resume={data} />
    </>
  );
}
