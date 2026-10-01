import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: "0px 0px -25% 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
}