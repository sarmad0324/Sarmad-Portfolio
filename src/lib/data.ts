import { Link,ProjectInfo } from "./types";
export const links:Link[]=[
    {
        nameEng:"Home",
        hash:"#home"
    },
    {
        nameEng:"Offers",
        hash:"#offers"
    },
    {
        nameEng:"Case Studies",
        hash:"#projects"
    },
    {
        nameEng:"About",
        hash:"#about"
    },
    {
        nameEng:"Contact",
        hash:"#contact"
    },
]

// Curated portfolio with business context and ownership
export const projectsData: ProjectInfo[] = [
    {
        slug: "triangle-wallets",
        title: 'Triangle Wallets',
        description: 'Fintech wallet product where transaction reliability and trust were critical.',
        context: 'A wallet team needed secure mobile flows for transfers and asset handling.',
        role: 'Mobile + Backend Execution',
        problem: 'Core transfer flows were unstable for production usage in a high-trust domain.',
        solution: 'Implemented and hardened wallet workflows across React Native and backend services.',
        ownership: 'Owned core app flow delivery and collaborated on backend behavior under production constraints.',
        outcome: 'Shipped a more stable wallet experience with higher transaction confidence.',
        tags: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "Blockchain"],
        imageUrl: '/triangle.png',
        link: 'https://github.com/mohammadfahad112/triangle-app',
        linkLabel: 'View Project'
    },
    {
        slug: "truckwise",
        title: 'Truckwise',
        description: 'Logistics platform for fleet workflows, dispatch visibility, and shipment tracking.',
        context: 'A logistics operation needed one product layer for daily coordination across teams.',
        role: 'Startup Product Build',
        problem: 'Fragmented workflows and weak real-time visibility slowed operations.',
        solution: 'Shipped full-stack features across React Native, Node.js, and SQL for tracking and routing flows.',
        ownership: 'Led hands-on engineering across mobile and backend modules with delivery ownership.',
        outcome: 'Improved execution speed and operational clarity for internal and end-user teams.',
        tags: ["React Native", "SQL", "Node.js", "Express.js"],
        imageUrl: '/truck.png',
        link: 'https://github.com/sarmad0324/Truckwise',
        linkLabel: 'View Project'
    },
    {
        slug: "ezrecova",
        title: 'Ezrecova',
        description: 'Mental health booking platform built for therapist discovery and scheduling.',
        context: 'A service startup needed a unified product flow for discovery, booking, and support content.',
        role: 'Platform Delivery',
        problem: 'The product lacked a clear end-to-end digital experience for users.',
        solution: 'Delivered booking flows, therapist profile structures, and clearer service journeys.',
        ownership: 'Owned implementation quality on key user paths and launch-focused delivery.',
        outcome: 'Launched a smoother booking experience and stronger product foundation.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/ezrecova.png',
        link: 'https://ezrecova.com/',
        linkLabel: 'View Live Product'
    },
    {
        slug: "adodyss-growth-management",
        title: 'AdOdyss Growth Management',
        description: 'Growth-management platform focused on clearer offer communication and conversion flow.',
        context: 'A performance team needed to translate complex service operations into cleaner decision journeys.',
        role: 'Product Engineering',
        problem: 'Strong services were hard to understand quickly, reducing conversion quality.',
        solution: 'Rebuilt service structure, proof presentation, and conversion pathways.',
        ownership: 'Led frontend implementation and product-level content architecture decisions.',
        outcome: 'Created stronger inbound clarity and better high-intent conversation quality.',
        tags: ["Next.js", "React", "Conversion UX", "Service Platform"],
        imageUrl: '/adodyss.png',
        link: 'https://adodyss.com/',
        linkLabel: 'View Live Product'
    },
]
