import Image from "next/image";
import { projects } from "@/models/project";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col py-20 gap-20">
          <main className="m-auto flex gap-20 md:gap-8 flex-col md:flex-row items-center px-10 max-w-6xl">
              <Image
                  className="pointer-events-none select-none object-contain"
                  src="/img/logo-wide.png"
                  alt="JH"
                  width={200}
                  height={200}
              />
              <div className="flex flex-col gap-16 md:gap-8">
                  {
                      projects.map((project) => <ProjectCard key={project.id} project={project}/>)
                  }
              </div>
          </main>
          <footer className="text-mono-800 dark:text-mono-500 md:fixed md:bottom-0 w-full self-center text-xs flex h-24 items-center justify-center md:justify-end px-10 max-w-6xl">
              <div className="flex flex-row gap-1">
                  <span>Copyright © {new Date().getFullYear()}</span>
                  <a className="underline active:opacity-50 md:hover:opacity-50" target="_blank" href="https://jhuang.ca">Jarrett Huang</a>
                  <span>|</span>
                  <a className="underline active:opacity-50 md:hover:opacity-50" target="_blank"
                     href="https://github.com/jarretthuang">Github</a>
              </div>
          </footer>
      </div>

  );
}
