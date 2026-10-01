import { useState } from "react";
import { useEffect } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-sheme: dark)").matches;
    });
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return <button role="switch" aria-checked={dark} aria-label="Dark mode" className="relative h-8 w-14 rounded-full bg-gray-300 transition-colors dark:bg-gray-700" onClick={() => setDark(!dark)}>
        <span className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${dark ? "translate-x-6" : ""}`}></span>
    </button>;
    
}