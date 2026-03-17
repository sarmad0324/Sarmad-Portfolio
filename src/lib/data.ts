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
        nameEng:"Engagement",
        hash:"#engagement"
    },
    {
        nameEng:"About",
        hash:"#about"
    },
    {
        nameEng:"Proof",
        hash:"#reviews"
    },
    {
        nameEng:"Contact",
        hash:"#contact"
    },
]

// Curated portfolio with business context and ownership
export const projectsData: ProjectInfo[] = [
    {
        title: 'Triangle Wallets',
        description: 'Fintech wallet product where trust, transaction reliability, and mobile UX could not break in production.',
        context: 'A wallet team needed a secure mobile product that could handle transaction flows and multi-asset behavior without sacrificing usability.',
        role: 'Mobile + Backend Execution',
        problem: 'The product required stronger app stability and secure transfer handling to support real user usage in a high-trust domain.',
        solution: 'Implemented key wallet workflows across React Native and backend services, including state reliability, transfer flow handling, and production hardening.',
        ownership: 'Owned delivery of core app flows, collaborated on backend behavior, and pushed feature implementation with production-level constraints in mind.',
        outcome: 'Shipped a stable wallet experience with stronger transaction confidence and better delivery velocity for the product team.',
        tags: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "Blockchain"],
        imageUrl: '/triangle.png',
        link: 'https://github.com/mohammadfahad112/triangle-app',
        linkLabel: 'View Project'
    },
    {
        title: 'Truckwise',
        description: 'Logistics platform for operational workflows, fleet coordination, and shipment visibility across mobile and backend.',
        context: 'A logistics operation needed one product layer for dispatch, drivers, shipment updates, and finance-related actions under daily execution pressure.',
        role: 'Startup Product Build',
        problem: 'Operations were slowed by fragmented workflows and limited real-time visibility for teams managing movement on the ground.',
        solution: 'Built and shipped full-stack features across React Native, Node.js, and SQL-backed services for route handling, status tracking, and role-based app flows.',
        ownership: 'Led hands-on product engineering for mobile and backend modules while collaborating closely with team members on delivery sequencing.',
        outcome: 'Improved operational clarity and sped up day-to-day execution with a platform that supports both internal teams and end users.',
        tags: ["React Native", "SQL", "Node.js", "Express.js"],
        imageUrl: '/truck.png',
        link: 'https://github.com/sarmad0324/Truckwise',
        linkLabel: 'View Project'
    },
    {
        title: 'Ezrecova',
        description: 'Mental health booking platform designed to match user experience quality with operational simplicity for the team.',
        context: 'A service startup needed to launch a platform where users could discover therapists, book sessions, and navigate resources without friction.',
        role: 'Platform Delivery',
        problem: 'The business needed a clear digital flow for therapist discovery and booking, but lacked a unified product experience.',
        solution: 'Delivered a complete platform experience with booking flows, therapist profile structures, and service-focused frontend journeys.',
        ownership: 'Owned implementation quality across key user paths and coordinated practical feature delivery around launch goals.',
        outcome: 'Enabled a smoother booking experience and gave the team a reliable platform foundation for growth.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/ezrecova.png',
        link: 'https://ezrecova.com/',
        linkLabel: 'View Live Product'
    },
    {
        title: 'AdOdyss Growth Management',
        description: 'Growth-management platform experience focused on clarity, conversion pathways, and service delivery operations.',
        context: 'A performance-focused team needed a platform that clearly translated complex service operations into decision-ready client journeys.',
        role: 'Product Engineering',
        problem: 'Their offer was strong but hard to communicate, making lead quality and conversion consistency harder than it should be.',
        solution: 'Rebuilt core pages, service logic, and proof presentation with clearer offer architecture and stronger decision-oriented flows.',
        ownership: 'Drove frontend implementation and content structure choices to align business goals with product-level UX decisions.',
        outcome: 'Improved clarity for inbound leads and created a more credible platform for high-intent conversations.',
        tags: ["Next.js", "React", "Conversion UX", "Service Platform"],
        imageUrl: '/adodyss.png',
        link: 'https://adodyss.com/',
        linkLabel: 'View Live Product'
    },
]
