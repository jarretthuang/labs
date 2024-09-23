import {Project} from "@/models/project";
import Image from "next/image";

export default function ProjectCard({ project } : { project: Project}) {
    return (
        <div key={project.id} className="flex flex-col gap-3 md:gap-2 items-center md:items-start">
            <a  href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center gap-2 active:opacity-60 md:hover:opacity-60"
            >
                <h2 className="text-lg font-medium">{project.title}</h2>
                <Image
                    className="pointer-events-none select-none object-contain dark:invert"
                    src="/img/share-icon.svg"
                    alt="Link"
                    width={18}
                    height={18}
                />
            </a>
            <p className="text-center md:text-pretty max-w-56 md:max-w-full">{project.description}</p>
            <ul className="flex gap-2">
                {project.tags.map((tag) => (
                    <li key={tag} className="text-sm bg-mono-200 dark:bg-mono-800 px-2 py-1 rounded-xl active:bg-mono-400 md:hover:bg-mono-400 active:dark:bg-mono-700 md:hover:dark:bg-mono-700">
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
}
