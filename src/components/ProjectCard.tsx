import type { Project } from "../data/projects"


export default function ProjectCard({ project }: { project: Project }) {
    return <article className="rounded-xl border-4 border-gray-200 p-5 flex flex-col gap-4 shadow-xl transition duration-200 hover:scale-105 hover:shadow-2xl motion-reduce:transition-none">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm max-w-fit text-black">{tech}</span>))}
        </div>
        <a href={project.link} className="rounded-lg mt-auto mx-auto px-4 text-center bg-gray-50 dark:bg-gray-50 shadow-gray-800 shadow text-black hover:bg-cyan-100">View demo / Github</a>
    </article>;
}