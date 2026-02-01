// constants.ts
export const SOCIAL_ICONS = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    email: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
};

/** Resume file in public/resumes/. Change fileName when you add or rename your resume. */
export const RESUME_DOWNLOAD = {
  /** Filename of the resume in the public/resumes/ folder */
  fileName: "FS_TX_Developer_Lakshman_N .pdf",
  /** Optional: name used when saving the file (defaults to fileName if not set) */
  downloadAs: "Lakshman_Nadipilli_Resume.pdf",
};

export const LANDING_SECTION_DATA = {
    greeting: {
        preTitle: "Hi, my name is",
        name: "Lakshman.",
        fullname: "Lakshman Kumar Nadipilli",
        title: "Java Full Stack Developer",
        emoji: {
            symbol: "☕",
            ariaLabel: "coffee"
        }
    },
    description: "Java Full Stack Developer with nearly 4 years of experience building scalable, cloud-native web applications using Java, Spring Boot, React.js, and AWS. Proven expertise in RESTful APIs, microservices, CI/CD, and secure application design within e-commerce, HR tech, and financial domains.",
    socialLinks: {
        github: {
            url: "https://github.com/Lakshman-Nadipilli",
            ariaLabel: "GitHub Profile"
        },
        linkedin: {
            url: "https://www.linkedin.com/in/lakshman-nadipilli",
            ariaLabel: "LinkedIn Profile"
        },
        email: {
            address: "nadipillilakshmankumar@gmail.com",
            ariaLabel: "Email Contact"
        }
    }
};

export const navItems = {
    iconLogo: "L",
    navItems: [
        { number: '01.', text: 'About' },
        { number: '02.', text: 'Skill' },
        { number: '03.', text: 'Experience' },
        { number: '04.', text: 'Work' },
        { number: '05.', text: 'Recognition' },
        { number: '06.', text: 'Contact' },
    ]
};

export const ABOUT_SECTION_DATA = {
    sectionNumber: "01",
    title: "About Me",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcmYzYeu4yRimTk2DLd1mcq8r391m468Arg&s",
    imageAlt: "Profile",
    paragraphs: [
        "I'm a Java Full Stack Developer with nearly 4 years of combined professional and project experience building scalable, cloud-native web applications using Java, Spring Boot, React.js, and AWS. I specialize in designing RESTful APIs, developing end-to-end full stack features, integrating third-party services, and deploying applications via CI/CD pipelines.",
        "Currently, as a Java Full Stack Developer at <a href='https://www.fidelity.com/' class='text-site-accent hover:underline'>Fidelity Investments</a> in Westlake, TX, I design and develop scalable backend services supporting high-volume financial reporting and transaction workflows. I'm passionate about Agile development, performance optimization, secure application design, and collaborating with cross-functional teams to translate business requirements into high-quality technical solutions."
    ]
};

export const skilleducation = {
    sectionNumber: "02.",
    sectionName: "Skills & Education",
    education: {
        schools: [
            {
                name: "Illinois Institute of Technology",
                degree: "Master of Science, Computer Science",
                date: "May 2025",
                location: "Chicago, IL"
            },
            {
                name: "GMR Institute of Technology",
                degree: "Bachelor of Technology, Computer Science and Engineering",
                date: "May 2022",
                location: "India"
            }
        ]
    },
    skillCategories: [
        {
            icon: "💻",
            title: "Programming Languages",
            description: "Java, SQL, Python, JavaScript, HTML, CSS"
        },
        {
            icon: "⚙️",
            title: "Frameworks & Libraries",
            description: "Spring Boot, Angular, React.js, Bootstrap, Hibernate, JUnit"
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "AWS (Lambda, S3, SNS, ECS, EC2), Docker, Jenkins, Git, GitHub Actions (CI/CD)"
        },
        {
            icon: "🛢️",
            title: "Databases",
            description: "MySQL, DynamoDB, PostgreSQL"
        },
        {
            icon: "🔧",
            title: "Backend & Architecture",
            description: "Microservices, REST API Design, OAuth 2.0, JWT, MVC Architecture, Design Patterns"
        },
        {
            icon: "📊",
            title: "Monitoring & Automation",
            description: "AWS CloudWatch, ServiceNow (SNOW), Postman, JMeter"
        },
        {
            icon: "🤖",
            title: "Machine Learning",
            description: "Python (NumPy, Pandas) — project-level exposure"
        },
        {
            icon: "⌨️",
            title: "Methodologies & Soft Skills",
            description: "Agile (Scrum), Team collaboration, Problem-solving"
        }
    ]
};

export const experiences = {
    sectionNumber: "03.",
    sectionName: "Where I've Worked",
    experiences: [
        {
            company: "Fidelity Investments",
            link: "https://www.fidelity.com/",
            role: "Java Full Stack Developer",
            date: "June 2024 – Present",
            startDate: new Date('2024-06-01'),
            endDate: new Date(),
            highlights: [
                "Designed and developed scalable backend services using Java and Spring Boot, supporting high-volume financial reporting and transaction workflows.",
                "Built and maintained RESTful APIs to process, validate, and persist financial transaction data across microservices deployed on AWS ECS.",
                "Engineered serverless backend components using AWS Lambda, integrating them with Spring Boot microservices for automated report generation and data validation.",
                "Implemented secure role-based access control (RBAC) using IAM and application-level authorization, ensuring compliance with financial data security standards.",
                "Integrated backend services with AWS S3 for structured file ingestion, transformation, and lifecycle management.",
                "Enhanced application reliability by implementing centralized logging, error handling, and performance monitoring, improving system uptime by 20%.",
                "Automated application deployments using GitHub Actions CI/CD pipelines, reducing release cycles by 25%.",
                "Collaborated closely with frontend and DevOps teams in an Agile/Scrum environment, contributing to sprint planning, code reviews, and production releases.",
                "Optimized backend service performance and reduced latency through efficient API design, asynchronous processing, and resource tuning."
            ]
        },
        {
            company: "WIPRO Ltd.",
            link: "https://www.wipro.com/",
            role: "Project Engineer (Java Full Stack Developer)",
            date: "September 2022 – July 2023",
            startDate: new Date('2022-09-01'),
            endDate: new Date('2023-07-31'),
            highlights: [
                "Developed and enhanced core modules of the Bullhorn ATS using Java, Spring Boot, and React.js, increasing recruiter productivity by 30% through automation and intuitive UI design.",
                "Integrated third-party APIs for resume parsing, email notifications, and secure authentication via OAuth 2.0, streamlining external service connectivity and improving user flow.",
                "Engineered scalable React.js dashboards for enterprise analytics and recruiter workflows, improving UI efficiency and cross-module consistency by 25%.",
                "Optimized backend service performance by fine-tuning SQL queries and introducing asynchronous processing, lowering overall API response latency by 20%.",
                "Automated the complete build, testing, and deployment lifecycle using Jenkins CI/CD pipelines, minimizing deployment errors and reducing release turnaround time by 25%.",
                "Collaborated in Agile sprints with cross-functional teams, actively leading code reviews and maintaining consistent coding standards to ensure on-time, high-quality feature delivery."
            ]
        },
        {
            company: "Ajio E-Commerce Platform",
            link: "https://www.ajio.com/",
            role: "Java Full Stack Developer Intern",
            date: "May 2021 – August 2022",
            startDate: new Date('2021-05-01'),
            endDate: new Date('2022-08-31'),
            highlights: [
                "Architected and implemented a high-performance e-commerce platform backend using Java, Spring Boot, and MySQL, enabling secure product listings, cart management, and seamless online transactions.",
                "Implemented RESTful APIs for inventory, orders, and customer management, and integrated Razorpay and Stripe payment gateways, automating order-confirmation emails via AWS SES.",
                "Refined and optimized SQL indexing and query plans to drastically reduce database load, resulting in improved page response times by 22%.",
                "Integrated a product-recommendation feature using a Python microservice (API-driven ML model), which successfully increased cross-sell conversions by 18%.",
                "Designed an analytics dashboard with React Charts for real-time sales and user insights, enhancing UI/UX with responsive components, leading to a 15% improvement in average session duration.",
                "Conducted rigorous load testing with Postman and JMeter, enhancing system stability and deploying microservices on AWS EC2 via Docker to achieve 99.9% uptime during promotions."
            ]
        }
    ]
};

export const projects = {
    sectionNumber: "04.",
    sectionName: "Key Work & Projects",
    projects: [
        {
            title: "Financial Reporting & Transaction Services",
            description: "Scalable backend services and RESTful APIs for financial reporting and transaction workflows on AWS ECS. Serverless components with AWS Lambda, S3 integration, RBAC, and GitHub Actions CI/CD.",
            tech: ["Java", "Spring Boot", "AWS ECS", "Lambda", "S3", "REST APIs", "CI/CD"]
        },
        {
            title: "Bullhorn ATS Core Modules",
            description: "Core modules of enterprise ATS with resume parsing, OAuth 2.0, and React.js dashboards. Jenkins CI/CD and SQL/async optimizations for recruiter productivity.",
            tech: ["Java", "Spring Boot", "React.js", "OAuth 2.0", "Jenkins", "REST APIs"]
        },
        {
            title: "Ajio E-Commerce Platform",
            description: "E-commerce backend with product/cart/orders, Razorpay & Stripe, AWS SES. Python ML recommendation microservice, React Charts analytics, Docker on AWS EC2.",
            tech: ["Java", "Spring Boot", "React", "MySQL", "Python", "AWS SES", "Docker"]
        }
    ]
};

export const achievements = {
    competitions: [
        {
            title: "YOLO-based Object Detection for Self-Driving Cars",
            subtitle: "Journal of Advanced Research in Automotive Tech (2021)"
        }
    ],
    certifications: [
        {
            title: "Java Full Stack",
            subtitle: "StackRoute"
        },
        {
            title: "Machine Learning",
            subtitle: "Internshala"
        },
        {
            title: "Foundations of AI",
            subtitle: "SkillUp India"
        }
    ],
    philanthropy: []
};

export const CONTACT_SECTION_DATA = {
    sectionNumber: "06",
    title: "What's Next?",
    subtitle: "Get In Touch",
    description: "I'm always open to discussing new opportunities, innovative projects, or just having a friendly chat about technology and development. Feel free to reach out!",
    contactInfo: {
        email: "nadipillilakshmankumar@gmail.com",
        phone: "312-868-9952"
    },
    buttonText: "Say Hello"
};
