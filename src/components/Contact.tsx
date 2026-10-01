export default function Contact() {
    return <div className="scroll-mt-14 max-w-5xl mx-auto px-6" id="contact">
        <section className="flex flex-col items-center gap-4 py-16 text-center mx-auto px-6 max-w-sm">
        <h2 className="text-black dark:text-cyan-50 text-2xl">Contact</h2>
        <p className="text-black dark:text-cyan-50">Like my work or have something to talk about? Don't be afraid to contact me through these channels:</p>
        <div className="flex w-full justify-center gap-6 pl-6">
            <a href="mailto:iiro.paakkonen@gmail.com" className="hover:underline text-cyan-500 dark:text-cyan-500">Email</a>
            <a href="https://github.com/iiropaakkonen" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-500 dark:text-cyan-500">Github</a>
            <a href="https://www.linkedin.com/in/iiropaakkonen/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-500 dark:text-cyan-500">LinkedIn</a>
        </div>
        </section>
        </div>;

}