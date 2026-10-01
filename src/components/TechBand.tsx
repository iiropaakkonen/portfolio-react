
const technologies = ["React", "TypeScript", "JavaScript", "Java", "Python", "Kotlin", "Node.js", "MongoDB", "Figma", "UI/UX", "HTML", "CSS", "TailWind", "Claude", "SQL", "APIs", "Godot"];
const doubled = [...technologies, ...technologies, ...technologies, ...technologies];

export default function TechBand() {
    return <div className="mx-auto max-w-4xl px-6 py-8 pb-50 ">
        <section className="overflow-hidden text-lg font-medium text-black dark:text-cyan-50">
        <div className="flex w-max marquee">
            {doubled.map((tech, i) => (<span key={tech+i} className="pr-8 shrink-0">{tech}</span>))}
        </div>

    </section>
    </div>;

}