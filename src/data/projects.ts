export type Project = {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

export const projects: Project[] = [
    {
        title: "UI/UX critique tool",
        description: "An AI-powered web app that users can upload their UI screenshots to and gain critique on the perceived trustworthiness of the given UI. This tool was built upon my own Master's Thesis' research. In this project I learned to use an AI API as to use AI in the development process.",
        technologies: ["Anthropic API", "TypeScript", "SQL", "Tailwind", "Claude"],
        link: "https://ux-critique-ai.vercel.app"
    },
    {
        title: "Android Compass app",
        description: "A mobile application built for tourists to navigate and find points of interest in any city they visit. The app shows a compass and points of interest, which can be filtered for the users' needs. This project taught me mobile development through Kotlin, mobile testing and UI development. This project was built with 3 other team members for a university course.",
        technologies: ["Android Studio", "Kotlin", "Jetpack Compose", "Android"],
        link: "https://github.com/iiropaakkonen/android_compass_app"
    },
    {
        title: "Workshifts to Calendar Script",
        description: "A simple script that fetches my convenience store workshifts from my Gmail inbox, parses the needed info and creates events for them in my Google Calendar. This script runs once a week on my computer to fetch the newest workshifts. With this project I learned to use the APIs through Google APIs as well as task scheduling.",
        technologies: ["Python", "Google Mail API", "Google Calendar API", "Windows Task Manager"],
        link: "https://github.com/iiropaakkonen/WorkshiftsToCalendar"
    },
    {
        title: "Old Portfolio Website",
        description: "My old portfolio website used to showcase my projects and information about me before the one currently being used. This project was built on a template to relearn the usage of CSS and HTML after a break from using them.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://iiropaakkonen.github.io"
    },
    {
        title: "Capstone Project for SPÅT",
        description: "A project made for a Capstone-project course. The project consisted of creating a metric for football players to measure their physical load. This metric was then calculated and fetched from an API I and another team member developed.",
        technologies: ["Python", "FastAPI", "MongoDB", "PyMongo"],
        link: "https://capstone.utu.fi/en-spatalytics"
    },
    {
        title: "Boss Monster / Underlord's Ascension -game",
        description: "A game project made for a university game development course. In the game you control a dungeon boss that has to defend its dungeon from the raiding and attacking heroes.",
        technologies: ["Godot", "GDScript"],
        link: "Demonstration available by request"
    },
    {
        title: "Peter, Go to Hell -game",
        description: "A game project made for a university game development course. In the game you control Peter, who got laid of and decided to purge Hell of its demons.",
        technologies: ["Godot", "GDScript"],
        link: "Demonstration available by request"
    }
]