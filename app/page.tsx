/** @format */

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import * as UsersActions from "@/actions/users";
import * as ExperienceActions from "@/actions/experience";
import * as SkillActions from "@/actions/skills";
import { revalidatePath } from "next/cache";

export default async function Home(props: any)
{
  revalidatePath('/')
  const exp = await ExperienceActions.findAll();
  const userData = await UsersActions.findById();
  const skills = await SkillActions.findAll();
  return (
    <main className="flex flex-col items-center px-4">
      <Intro user={ userData } />
      <SectionDivider />
      <About aboutMe={ userData.aboutMe } />
      <Skills skills={ skills } />
      <Projects />
      <Experience exp={ exp } />
      <Contact />
    </main>
  );
}

