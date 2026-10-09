import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact/contact";
import { JsonLd } from "@/components/shared/json-ld";
import { profile } from "@/data/portfolio";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { siteDescription, siteUrl } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: profile.title,
  description: siteDescription,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: education
    .filter((e) => e.kind === "education")
    .map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
  award: education.filter((e) => e.kind === "achievement").map((e) => e.title),
  knowsAbout: skillCategories.flatMap((c) => c.skills.map((s) => s.name)),
  sameAs: profile.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema} />
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </>
  );
}
