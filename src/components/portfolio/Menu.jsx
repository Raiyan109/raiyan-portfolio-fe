import Work1 from '../../assets/Vedic energie.png'
import Work2 from '../../assets/Leviathan.png'
import Work3 from '../../assets/hiking warehouse.png'
import Work4 from '../../assets/RKK.png'
import Work5 from '../../assets/College mern.png'
import Work6 from '../../assets/Weather app.png'
import Work7 from '../../assets/loan app mern.png'
import Work8 from '../../assets/readify-hero.png'

const Menu = [
    {
        id: 1,
        image: Work1,
        title: "Vedic Energie",
        desc: 'I developed and deployed an innovative Energy Calculator web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This app enables users to accurately calculate and track their energy consumption, promoting energy efficiency and informed decision-making.',
        features: [
            {
                id: 1,
                feature: 'User-friendly interface: The app provides a seamless user experience with an intuitive and visually appealing interface, ensuring easy navigation and interaction.'
            },
            {
                id: 2,
                feature: 'Real-time calculations: Leveraging the power of React.js and Node.js, the app performs calculations in real-time, delivering instant results to users.'
            },
            {
                id: 3,
                feature: 'Customizable preferences: Users can input their energy consumption details, set personalized goals, and receive tailored recommendations for reducing their environmental impact and utility costs.'
            },
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Chart.js', 'Tailwind'],
        category: "MERN",
        liveLink: "https://vedicenergie.com/",
    },
    {
        id: 2,
        image: Work2,
        title: "Manufacturer Website",
        desc: 'Developed a complete submarine manufacturer"s website using the MERN stack.',
        features: [
            {
                id: 1,
                feature: 'MERN Authentication'
            },
            {
                id: 2,
                feature: 'Role-based Authorization'
            },
            {
                id: 3,
                feature: 'Searching, Filtering by category and price,and Pagination.'
            },
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Mongoose', 'Axios', 'JWT'],
        category: "Frontend",
        liveLink: "https://assignment-12-e077a.web.app/",
        clientSide: "https://github.com/Raiyan109/manufacturer-website",
        serverSide: "https://github.com/Raiyan109/leviathan-server",
    },
    {
        id: 3,
        image: Work3,
        title: "Hiking Inventory Website",
        desc: 'Created a comprehensive MERN stack landing page for a hiking gear warehouse management system.',
        features: [
            {
                id: 1,
                feature: 'User-friendly interface: The app provides a seamless user experience with an intuitive and visually appealing interface, ensuring easy navigation and interaction.'
            }
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Mongoose', 'Axios', 'JWT'],
        category: "Backend",
        liveLink: "https://assignment-11-7e69c.web.app/",
        clientSide: "https://github.com/Raiyan109/warehouse-management-client",
        serverSide: "https://github.com/Raiyan109/warehouse-management-server",
    },
    {
        id: 4,
        image: Work8,
        title: "Readify Library Service",
        desc: 'NextJS Library Management Project',
        features: [
            {
                id: 1,
                feature: 'Implemented user authentication using Next-auth and MongoDB.'
            },
            {
                id: 2,
                feature: 'All books are sourced from a MongoDB database, allowing users to browse, search, and filter by genre and price.'
            },
            {
                id: 3,
                feature: 'Utilized Next.js 14 latest server actions to implement full CRUD methods.'
            },
        ],
        technologies: ['NextJS 14 (app router)', 'Next-auth', 'Mongoose', 'Framer-motion', 'Tailwind'],
        category: "NextJS",
        liveLink: "https://readify-library-service-next.vercel.app/",
        clientSide: "https://github.com/Raiyan109/readify-library-service-next",
    },
    {
        id: 5,
        image: Work5,
        title: "College Admission App",
        desc: 'Developed a complete college admission website using the MERN stack.',
        features: [
            {
                id: 1,
                feature: 'MERN Authentication'
            },
            {
                id: 2,
                feature: 'Role-based Authorization'
            }
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Mongoose', 'Axios', 'JWT'],
        category: "MERN",
        liveLink: "https://college-mern-frontend.vercel.app/",
        clientSide: "https://github.com/Raiyan109/college-MERN-frontend",
        serverSide: "https://github.com/Raiyan109/college-MERN-backend",
    },
    {
        id: 6,
        image: Work6,
        title: "Weather App",
        desc: 'Developed a weather app',
        features: [
            {
                id: 1,
                feature: 'User-friendly interface: The app provides a seamless user experience with an intuitive and visually appealing interface, ensuring easy navigation and interaction.'
            }
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Chart.js', 'Tailwind'],
        category: "MERN",
        liveLink: "https://dotix-weather-app.vercel.app/",
        clientSide: "https://github.com/Raiyan109/Dotix-weather-app"
    },
    {
        id: 7,
        image: Work7,
        title: "Loan App",
        desc: 'Developed a loan app',
        features: [
            {
                id: 1,
                feature: 'User-friendly interface: The app provides a seamless user experience with an intuitive and visually appealing interface, ensuring easy navigation and interaction.'
            }
        ],
        technologies: ['React.js', 'Express.js', 'Firebase', 'Tailwind'],
        category: "MERN",
        liveLink: "https://techdome-fe.vercel.app/",
        clientSide: "https://github.com/Raiyan109/techdome-loan-app-FE"
    }
];


export default Menu;