import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard";


export default function Projects() {
    return <section className="scroll-mt-14 max-w-5xl mx-auto px-6" id="projects">
        <h2 className="text-3xl text-center text-black dark:text-cyan-50 ">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 text-black dark:text-white max-w-5xl mx-auto">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project}/>
            ))}
        </div>
        </section>;
}