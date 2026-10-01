export default function Hero() {
    return (
    <div className="relative overflow-hidden pt-80 pb-10 max-w-5xl mx-auto px-6" id="hero">
        <div aria-hidden="true" className="pointer-events-none absolute left-5/12 top-1/2 h-50 w-170 -translate-x-1/2 rounded-full bg-cyan-100 blur-3xl dark:bg-cyan-500/20" />
        <section className="relative flex flex-col items-center justify-center gap-8 px-6 md:flex-row">
            <img className ="w-60 h-60 rounded-full object-cover shadow-lg shadow-gray-900 dark:shadow-gray-200" src="/me.jpg" alt="Iiro Pääkkönen"/>
            <div className="md:text-left max-w-xl text-center">
                <h1 className="text-4xl font-bold text-black dark:text-cyan-50">Iiro Pääkkönen</h1>
                <p className="text-xl text-gray-500">Software Engineer and UI/UX Designer</p>
                <p className="text-black dark:text-cyan-50">I am a Master of Science (Tech) and Software Developer with passion for aesthetic, clean and functional software. I combine professional critical thinking with experience in UI/UX to create working and good-looking services.
                </p>
                <div className="flex flex-row justify-center md:justify-start py-4"><a className="p-3 mr-6 bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-cyan-100" href="#projects">View My Work</a><a className="p-3 bg-white outline text-black dark:bg-gray-900 dark:text-white hover:outline-2" href="#contact">Get in Touch</a></div>
            </div>
        </section>    
    </div>
    );
}