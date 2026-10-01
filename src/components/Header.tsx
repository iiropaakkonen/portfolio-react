import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return <header className="flex justify-end items-center px-6 py-4 sticky top-0 z-50 bg-cyan-100 dark:bg-gray-950">
            <nav className="text-black dark:text-cyan-50">
                <a className="px-4" href="#hero">Iiro Pääkkönen</a>
                <a className="px-4" href="#projects">Projects</a>
                <a className="px-4" href="#contact">Contact</a>
            </nav>
            <ThemeToggle></ThemeToggle>
        </header>;
}