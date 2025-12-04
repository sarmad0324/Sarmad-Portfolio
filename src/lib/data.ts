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
        nameEng:"About",
        hash:"#about"
    },
    {
        nameEng:"Contact",
        hash:"#contact"
    },
]

// Curated portfolio with case study format (problem → solution → outcome)
export const projectsData: ProjectInfo[] = [
    {
        title: 'Triangle Wallets',
        description: 'A blockchain-based digital wallet App used for financial transactions, asset management, and transfers. Focused on user security and scalability.',
        problem: 'The client needed a secure, scalable digital wallet solution for blockchain transactions with multi-asset support and robust security features.',
        solution: 'Built a comprehensive mobile app using React Native, Redux for state management, Node.js backend, and MongoDB for data persistence. Implemented blockchain integration with advanced encryption and security protocols.',
        outcome: 'Delivered a production-ready wallet app with seamless user experience, handling thousands of transactions securely. Client reported 100% satisfaction with security and performance.',
        tags: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "Blockchain"],
        imageUrl: '/triangle.png',
        link: 'https://github.com/mohammadfahad112/triangle-app'
    },
    {
        title: 'Truckwise',
        description: 'A logistics and fleet management App designed to optimize truck routes, manage drivers, track shipments, and handle finances. Built for both vendors and customers.',
        problem: 'A logistics company needed a comprehensive solution to optimize routes, manage drivers, track shipments in real-time, and streamline financial operations.',
        solution: 'Developed a full-stack mobile application using React Native for cross-platform compatibility, Node.js/Express backend, and SQL database. Implemented real-time tracking, route optimization algorithms, and integrated financial management features.',
        outcome: 'Reduced route planning time by 40%, improved driver efficiency, and streamlined financial tracking. The app now serves both vendors and customers seamlessly.',
        tags: ["React Native", "SQL", "Node.js", "Express.js"],
        imageUrl: '/truck.png',
        link: 'https://github.com/sarmad0324/Truckwise'
    },
    {
        title: 'Ezrecova',
        description: 'A mental health and therapy booking platform designed for clients to connect with therapists, book sessions, and access resources online.',
        problem: 'A mental health startup needed an accessible, user-friendly platform for clients to connect with therapists, book sessions, and access mental health resources.',
        solution: 'Created a comprehensive WordPress-based platform using Elementor for custom design, PHP for backend functionality, and integrated booking systems with therapist profiles and resource library.',
        outcome: 'Launched a fully functional platform enabling seamless therapist-client connections. Increased booking efficiency and improved accessibility to mental health services.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/ezrecova.png',
        link: 'https://ezrecova.com/'
    },
    {
        title: 'ExactPrinto',
        description: 'An on-demand printing service platform for flyers, boxes, business cards, and custom products with real-time order tracking and quote generator.',
        problem: 'A printing business required an online platform to handle custom printing orders, generate quotes automatically, and provide real-time order tracking for customers.',
        solution: 'Built a WordPress-based e-commerce solution with custom Elementor designs, PHP backend for quote generation algorithms, and integrated order tracking system with email notifications.',
        outcome: 'Streamlined the order process, reduced quote generation time by 60%, and improved customer satisfaction with real-time tracking. Platform now handles hundreds of orders monthly.',
        tags: ["WordPress", "Elementor", "Custom CSS", "PHP"],
        imageUrl: '/exact.png',
        link: 'https://www.exactprinto.com/'
    },
    {
        title: 'Genius Arena',
        description: 'A color-based interactive game built with React, where users guess and match colors based on hints to advance through levels and earn rewards.',
        problem: 'A client wanted an engaging, educational color-matching game that could help users improve their color recognition skills while being entertaining.',
        solution: 'Developed an interactive React-based game with Tailwind CSS for modern UI design, implementing game logic, level progression, and reward systems with smooth animations.',
        outcome: 'Created an engaging game with intuitive user experience. Successfully demonstrated front-end development capabilities and modern UI/UX design principles.',
        tags: ["React", "Tailwind CSS", "JavaScript", "Game UI", "Frontend Only"],
        imageUrl: '/genius.png',
        link: '#'
    },
    {
        title: 'AdOdyss Growth Management',
        description: 'A comprehensive marketplace growth management platform for Amazon & Walmart brands. Helps businesses run ads, improve listings, and fix retail operations issues that block profit. Features weekly cadence and clear reporting.',
        problem: 'Consumer brands selling on Amazon and Walmart needed expert marketplace management including PPC advertising, listing optimization, inventory operations, and profit recovery. They required a partner to handle complexity while maintaining profitability.',
        solution: 'Built a modern, conversion-focused website showcasing full-funnel marketplace services. Developed clear value propositions for Amazon PPC, DSP, listing optimization, Walmart marketplace setup, and profit recovery. Implemented case study showcases, service pages, and consultation booking system.',
        outcome: 'Launched a professional platform that effectively communicates expertise and drives consultation bookings. The site highlights real results including +38% ROAS improvements, $187k profit recovery, and successful Walmart launches for 2,000+ brands.',
        tags: ["Web Development", "UI/UX Design", "Amazon Services", "Business Platform", "Conversion Design"],
        imageUrl: '/adodyss.png',
        link: 'https://adodyss.com/'
    },
    {
        title: 'HomeBites (Gemutly)',
        description: 'A food delivery platform connecting customers with passionate local chefs for restaurant-quality home-cooked meals. Features chef profiles, real-time order tracking, group ordering, and community reviews.',
        problem: 'Food lovers wanted access to authentic, home-cooked meals from local chefs, while talented chefs needed a platform to monetize their culinary skills. Traditional delivery apps lacked the personal connection and quality of home cooking.',
        solution: 'Developed a comprehensive meal-sharing platform with chef discovery, detailed chef profiles with specialties and reviews, real-time order tracking, group ordering with bill splitting, and community features. Built an inviting, food-focused UI with dark design that emphasizes culinary excellence.',
        outcome: 'Created a vibrant community platform connecting food lovers with local chefs. The platform features thousands of happy diners, hundreds of local chefs across multiple cities, group ordering capabilities, and maintains a 4.9 average rating. Chefs can set their own prices and keep 85% of earnings.',
        tags: ["Web Development", "React", "Food Tech", "UI/UX Design", "Full-Stack", "Community Platform"],
        imageUrl: '/homebites.png',
        link: 'https://homebites1.netlify.app/'
    },
    {
        title: 'Little Lemon Restaurant',
        description: 'A modern Mediterranean restaurant website featuring online reservations, menu display, and order management. Built for a family-owned Chicago restaurant.',
        problem: 'Little Lemon, a family-owned Mediterranean restaurant in Chicago, needed a modern website to showcase their menu, accept online reservations, and enable online ordering for customers.',
        solution: 'Developed a full-featured restaurant website with React and modern web technologies. Implemented reservation system with date/time selection, comprehensive menu display, and online ordering functionality with a clean, modern design.',
        outcome: 'Successfully launched a professional restaurant website that improved customer engagement and streamlined reservations. Enhanced online presence and enabled seamless online ordering.',
        tags: ["React", "Tailwind CSS", "Node.js", "REST API", "Reservation System"],
        imageUrl: '/lemon.png',
        link: 'https://litle-lemon.netlify.app/'
    },
]
