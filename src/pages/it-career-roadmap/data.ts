export interface SubBranch {
    title: string;
    description: string;
    salary: string;
    skills: string[];
    prospects: string;
}

export interface CareerBranch {
    id: string;
    title: string;
    icon: string;
    description: string;
    subBranches: SubBranch[];
}

export const careerBranches: CareerBranch[] = [
    {
        id: "software-development",
        title: "Software Development & Engineering",
        icon: "Code2",
        description: "Design, build, and maintain software applications across platforms.",
        subBranches: [
            {
                title: "Full-Stack Developer",
                description: "Builds both front-end interfaces and back-end server logic for complete web applications.",
                salary: "₹62L – ₹1.2Cr",
                skills: ["JavaScript", "React", "Node.js", "SQL", "REST APIs"],
                prospects: "Very high demand across all industries. Remote-friendly roles widely available.",
            },
            {
                title: "Mobile App Developer",
                description: "Creates applications for iOS and Android devices using native or cross-platform frameworks.",
                salary: "₹58L – ₹1.1Cr",
                skills: ["Swift", "Kotlin", "React Native", "Flutter", "UI/UX"],
                prospects: "Strong growth driven by mobile-first strategies and app economy.",
            },
            {
                title: "DevOps Engineer",
                description: "Bridges development and operations through CI/CD pipelines, automation, and infrastructure management.",
                salary: "₹75L – ₹1.3Cr",
                skills: ["Docker", "Kubernetes", "AWS/Azure", "Jenkins", "Terraform"],
                prospects: "Critical role in modern tech teams. Rapidly growing field.",
            },
            {
                title: "Embedded Systems Developer",
                description: "Programs firmware and software for hardware devices, IoT, and real-time systems.",
                salary: "₹66L – ₹1.1Cr",
                skills: ["C/C++", "RTOS", "Microcontrollers", "IoT Protocols", "Hardware Debugging"],
                prospects: "Growing with IoT expansion and smart device proliferation.",
            },
        ],
    },
    {
        id: "data-science",
        title: "Data Science & Analytics",
        icon: "BarChart3",
        description: "Extract insights from data using statistics, machine learning, and visualization.",
        subBranches: [
            {
                title: "Data Scientist",
                description: "Applies statistical models and machine learning to solve complex business problems with data.",
                salary: "₹70L – ₹1.3Cr",
                skills: ["Python", "R", "Machine Learning", "Statistics", "SQL"],
                prospects: "One of the fastest-growing careers. High demand in healthcare, finance, and tech.",
            },
            {
                title: "Data Analyst",
                description: "Interprets data sets to identify trends, create reports, and support decision-making.",
                salary: "₹46L – ₹79L",
                skills: ["SQL", "Excel", "Tableau", "Python", "Data Visualization"],
                prospects: "Entry-friendly role with strong pathways to senior analytics positions.",
            },
            {
                title: "Machine Learning Engineer",
                description: "Designs and deploys ML models at scale for production environments.",
                salary: "₹83L – ₹1.5Cr",
                skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud ML Services"],
                prospects: "Exceptional demand. AI/ML investment continues to accelerate globally.",
            },
            {
                title: "Business Intelligence Analyst",
                description: "Transforms raw data into actionable business insights through dashboards and reporting.",
                salary: "₹54L – ₹92L",
                skills: ["Power BI", "Tableau", "SQL", "Data Warehousing", "ETL"],
                prospects: "Stable demand as organizations become more data-driven.",
            },
        ],
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity & Information Security",
        icon: "Shield",
        description: "Protect systems, networks, and data from digital threats and attacks.",
        subBranches: [
            {
                title: "Security Analyst",
                description: "Monitors networks for security breaches and investigates incidents when they occur.",
                salary: "₹54L – ₹96L",
                skills: ["SIEM Tools", "Network Security", "Incident Response", "Firewalls", "Log Analysis"],
                prospects: "Critical shortage of professionals. Virtually zero unemployment rate.",
            },
            {
                title: "Penetration Tester",
                description: "Ethically hacks systems to identify vulnerabilities before malicious actors can exploit them.",
                salary: "₹66L – ₹1.2Cr",
                skills: ["Kali Linux", "Burp Suite", "Network Protocols", "Scripting", "OWASP"],
                prospects: "High demand with growing regulatory compliance requirements.",
            },
            {
                title: "Security Architect",
                description: "Designs and implements secure IT infrastructure and security frameworks for organizations.",
                salary: "₹92L – ₹1.5Cr",
                skills: ["Security Frameworks", "Cloud Security", "Risk Assessment", "Cryptography", "Compliance"],
                prospects: "Senior role with excellent compensation and strategic influence.",
            },
            {
                title: "Digital Forensics Analyst",
                description: "Investigates cybercrimes by recovering and analyzing digital evidence from devices and networks.",
                salary: "₹58L – ₹1Cr",
                skills: ["Forensic Tools", "Chain of Custody", "Malware Analysis", "Legal Knowledge", "OS Internals"],
                prospects: "Growing with increased cybercrime. Government and private sector opportunities.",
            },
        ],
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing & Infrastructure",
        icon: "Cloud",
        description: "Build, manage, and optimize cloud-based systems and services.",
        subBranches: [
            {
                title: "Cloud Solutions Architect",
                description: "Designs scalable, reliable cloud infrastructure aligned with business requirements.",
                salary: "₹1Cr – ₹1.5Cr",
                skills: ["AWS", "Azure", "GCP", "Architecture Design", "Cost Optimization"],
                prospects: "Top-tier demand as cloud migration accelerates across industries.",
            },
            {
                title: "Cloud Engineer",
                description: "Implements and maintains cloud infrastructure, services, and deployment pipelines.",
                salary: "₹70L – ₹1.2Cr",
                skills: ["IaC", "Networking", "Linux", "Containerization", "CI/CD"],
                prospects: "Excellent opportunities with cloud-first digital transformation.",
            },
            {
                title: "Site Reliability Engineer (SRE)",
                description: "Ensures system reliability and uptime through automation, monitoring, and incident management.",
                salary: "₹83L – ₹1.4Cr",
                skills: ["Monitoring Tools", "Automation", "Distributed Systems", "SLAs/SLOs", "Python/Go"],
                prospects: "High-impact role combining software engineering with operations expertise.",
            },
        ],
    },
    {
        id: "ai-ml",
        title: "Artificial Intelligence & Robotics",
        icon: "Brain",
        description: "Develop intelligent systems that can learn, reason, and interact with the physical world.",
        subBranches: [
            {
                title: "AI Research Scientist",
                description: "Pushes the boundaries of AI through novel research in deep learning, NLP, and computer vision.",
                salary: "₹1Cr – ₹2.1Cr",
                skills: ["Deep Learning", "Research Methods", "Mathematics", "Python", "Publications"],
                prospects: "Premium talent in extreme demand. Major tech companies compete aggressively.",
            },
            {
                title: "NLP Engineer",
                description: "Builds systems that understand, interpret, and generate human language.",
                salary: "₹79L – ₹1.4Cr",
                skills: ["NLP Libraries", "Transformers", "Text Processing", "Python", "Linguistics"],
                prospects: "Booming with ChatGPT-era AI adoption. Every industry needs NLP capabilities.",
            },
            {
                title: "Robotics Engineer",
                description: "Designs and programs robots for manufacturing, healthcare, and autonomous systems.",
                salary: "₹70L – ₹1.3Cr",
                skills: ["ROS", "Computer Vision", "Control Systems", "C++", "Sensor Integration"],
                prospects: "Growing rapidly in manufacturing, logistics, healthcare, and defense sectors.",
            },
            {
                title: "Computer Vision Engineer",
                description: "Develops systems that interpret and analyze visual information from images and video.",
                salary: "₹75L – ₹1.3Cr",
                skills: ["OpenCV", "Deep Learning", "Image Processing", "Python", "CNN Architectures"],
                prospects: "Strong demand in autonomous vehicles, medical imaging, and AR/VR.",
            },
        ],
    },
    {
        id: "networking",
        title: "Networking & Systems Administration",
        icon: "Network",
        description: "Design, implement, and manage computer networks and IT infrastructure.",
        subBranches: [
            {
                title: "Network Engineer",
                description: "Designs and maintains computer networks including LANs, WANs, and enterprise infrastructure.",
                salary: "₹54L – ₹1Cr",
                skills: ["Cisco/Juniper", "TCP/IP", "Routing & Switching", "Network Security", "CCNA/CCNP"],
                prospects: "Foundational IT role. Steady demand with 5G and network modernization.",
            },
            {
                title: "Systems Administrator",
                description: "Manages and maintains servers, operating systems, and enterprise IT environments.",
                salary: "₹50L – ₹88L",
                skills: ["Linux", "Windows Server", "Active Directory", "Scripting", "Virtualization"],
                prospects: "Evolving toward cloud and hybrid environments. Strong baseline demand.",
            },
            {
                title: "Database Administrator",
                description: "Manages, optimizes, and secures database systems for performance and availability.",
                salary: "₹58L – ₹1Cr",
                skills: ["SQL", "Oracle/PostgreSQL", "Performance Tuning", "Backup/Recovery", "Cloud Databases"],
                prospects: "Data-centric organizations continue to need skilled DBAs.",
            },
        ],
    },
    {
        id: "web-development",
        title: "Web Development & Design",
        icon: "Globe",
        description: "Create responsive websites and web applications with modern frameworks.",
        subBranches: [
            {
                title: "Front-End Developer",
                description: "Builds user-facing interfaces using HTML, CSS, and JavaScript frameworks.",
                salary: "₹50L – ₹1Cr",
                skills: ["HTML/CSS", "JavaScript", "React/Vue/Angular", "Responsive Design", "Accessibility"],
                prospects: "Consistently high demand. Web presence essential for every business.",
            },
            {
                title: "Back-End Developer",
                description: "Develops server-side logic, databases, and APIs that power web applications.",
                salary: "₹58L – ₹1.1Cr",
                skills: ["Node.js/Python/Java", "REST/GraphQL", "Databases", "Authentication", "Caching"],
                prospects: "Strong demand with growing complexity of web applications.",
            },
            {
                title: "UI/UX Designer",
                description: "Designs intuitive, accessible user interfaces and experiences through research and prototyping.",
                salary: "₹50L – ₹1Cr",
                skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
                prospects: "Growing emphasis on user experience drives demand across all tech sectors.",
            },
            {
                title: "WordPress / CMS Developer",
                description: "Builds and customizes websites using content management systems for clients and businesses.",
                salary: "₹37L – ₹71L",
                skills: ["WordPress", "PHP", "Theme Development", "SEO", "Plugin Customization"],
                prospects: "Large freelance market. Good entry point for web development careers.",
            },
        ],
    },
    {
        id: "it-management",
        title: "IT Management & Consulting",
        icon: "Briefcase",
        description: "Lead technology strategy, teams, and digital transformation initiatives.",
        subBranches: [
            {
                title: "IT Project Manager",
                description: "Plans, executes, and delivers technology projects on time and within budget.",
                salary: "₹66L – ₹1.2Cr",
                skills: ["Agile/Scrum", "JIRA", "Risk Management", "Stakeholder Communication", "PMP"],
                prospects: "Essential role in every tech organization. Strong career advancement path.",
            },
            {
                title: "IT Consultant",
                description: "Advises organizations on technology strategy, implementation, and optimization.",
                salary: "₹62L – ₹1.3Cr",
                skills: ["Business Analysis", "Solution Design", "Communication", "Industry Knowledge", "Strategy"],
                prospects: "Lucrative consulting firms and independent practice opportunities.",
            },
            {
                title: "Chief Technology Officer (CTO)",
                description: "Sets technology vision and strategy as a senior executive leader.",
                salary: "₹1.3Cr – ₹2.5Cr+",
                skills: ["Leadership", "Strategic Planning", "Architecture", "Team Building", "Business Acumen"],
                prospects: "Pinnacle of tech leadership. Requires deep experience and proven track record.",
            },
        ],
    },
];
