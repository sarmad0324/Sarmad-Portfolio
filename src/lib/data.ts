import { Link,ProjectInfo } from "./types";
export const links:Link[]=[
    {
        nameEng:"Home",
        hash:"#home"
    },
    {
        nameEng:"Services",
        hash:"#services"
    },
    {
        nameEng:"Projects",
        hash:"#projects"
    },
   
    {
        nameEng:"Contact",
        hash:"#contact"
    },
]
export const projectsData: ProjectInfo[] = [
    {
        title: 'Truckwise',
        description: 'A logistics and fleet management App designed to optimize truck routes, manage drivers, track shipments, and handle finances. Built for both vendors and customers.',
        tags: ["React Native",  "SQL", "Node.js", "Express.js"],
        imageUrl: '/image1.png',
        link: 'https://www.google.com'
        },
        {
        title: 'Triangle Wallets',
        description: 'A blockchain-based digital wallet App used for financial transactions, asset management, and transfers. Focused on user security and scalability.',
        tags: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "Blockchain"],
        imageUrl: '/image2.png',
        link: 'https://www.google.com'
        },
        {
        title: 'Genius Arena',
        description: 'A color-based interactive game built with React, where users guess and match colors based on hints to advance through levels and earn rewards. Currently focused on front-end development only.',
  tags: ["React", "Tailwind CSS", "JavaScript", "Game UI", "Frontend Only"],
        imageUrl: '/Ga.png',
        link: 'https://www.google.com'
        },
        {
        title: 'Ezrecova',
        description: 'A mental health and therapy booking platform designed for clients to connect with therapists, book sessions, and access resources online.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/image3.png',
        link: 'https://www.google.com'
        },
        {
        title: 'ExactPrinto',
        description: 'An on-demand printing service platform for flyers, boxes, business cards, and custom products with real-time order tracking and quote generator.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/image4.png',
        link: 'https://www.google.com'
        },
        {
        title: 'Movies Website',
        description: 'A sleek movie listing web app with trending, searching, and filtering functionality. Powered by Appwrite and a public movie API.',
        tags: ["React", "Tailwind CSS", "Appwrite", "REST API"],
        imageUrl: '/image4.png',
        link: 'https://www.google.com'
        }
]