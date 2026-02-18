import { FlaskConical, Microscope, Atom, Leaf, Pill, Monitor, Shield, Rocket } from "lucide-react";

export interface SubJob {
  title: string;
  description: string;
  salary: string;
  skills: string[];
  exam: string;
}

export interface JobBranch {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  openings: string;
  subJobs: SubJob[];
}

export const governmentJobs: JobBranch[] = [
  {
    id: "research-scientist",
    title: " 🔬 Research & Scientific Services",
    icon: "🔬",
    color: "hsl(213 80% 50%)",
    description: "Government research labs and scientific organizations offering cutting-edge research roles.",
    openings: "5,000+ annually",
    subJobs: [
      {
        title: "ISRO Scientist / Engineer",
        description: "Work on satellite design, space missions, and rocket propulsion systems at the Indian Space Research Organisation.",
        salary: "₹56,100 – ₹2,18,200/month",
        skills: ["Aerospace Engineering", "Physics", "Mathematics", "Satellite Communication"],
        exam: "ISRO Centralized Recruitment"
      },
      {
        title: "DRDO Scientist 'B'",
        description: "Develop defence technologies, weapons systems, and strategic research for national security.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Electronics", "Mechanical Engineering", "Computer Science", "Material Science"],
        exam: "DRDO RAC Exam / GATE"
      },
      {
        title: "CSIR - Scientist",
        description: "Conduct fundamental and applied research across 38 national laboratories in diverse science fields.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Chemical Sciences", "Life Sciences", "Engineering Sciences", "Research Methodology"],
        exam: "CSIR NET / JRF"
      },
      {
        title: "BARC Scientific Officer",
        description: "Nuclear research, reactor design, radiochemistry, and atomic energy applications.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Nuclear Physics", "Chemistry", "Mechanical Engineering", "Radiation Safety"],
        exam: "BARC OCES/DGFS"
      }
    ]
  },
  {
    id: "medical-health",
    title: " 💊 Medical & Health Services",
    icon: "💊",
    color: "hsl(160 70% 40%)",
    description: "Healthcare roles in government hospitals, public health agencies, and medical research institutions.",
    openings: "15,000+ annually",
    subJobs: [
      {
        title: "Medical Officer (UPSC CMS)",
        description: "Serve as doctors in government hospitals, railway medical services, and ESI dispensaries.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["MBBS", "Clinical Medicine", "Surgery", "Public Health"],
        exam: "UPSC Combined Medical Services"
      },
      {
        title: "Pharmacist (Government)",
        description: "Dispense medicines, manage pharmacy operations in government hospitals and health centers.",
        salary: "₹29,200 – ₹92,300/month",
        skills: ["Pharmacy", "Drug Management", "Pharmacology", "Inventory Control"],
        exam: "State PSC / Staff Selection"
      },
      {
        title: "AYUSH Medical Officer",
        description: "Practice Ayurveda, Yoga, Unani, Siddha, or Homeopathy in government health facilities.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["BAMS/BHMS/BUMS", "Traditional Medicine", "Patient Care", "Diagnosis"],
        exam: "State AYUSH Recruitment"
      },
      {
        title: "Lab Technician (Government)",
        description: "Perform diagnostic tests, pathology, microbiology, and biochemistry analysis in govt labs.",
        salary: "₹25,500 – ₹81,100/month",
        skills: ["DMLT/BMLT", "Pathology", "Microbiology", "Lab Equipment Handling"],
        exam: "State Health Department Exam"
      }
    ]
  },
  {
    id: "agriculture-forestry",
    title: " 🍀 Agriculture & Forestry Services",
    icon: "🍀",
    color: "hsl(142 60% 40%)",
    description: "Roles in agricultural research, extension services, forest conservation, and rural development.",
    openings: "8,000+ annually",
    subJobs: [
      {
        title: "Indian Forest Service (IFS)",
        description: "Manage and conserve forests, wildlife, and environment as a senior administrative officer.",
        salary: "₹56,100 – ₹2,50,000/month",
        skills: ["Forestry", "Environmental Science", "Botany", "Wildlife Management"],
        exam: "UPSC Civil Services Exam"
      },
      {
        title: "Agricultural Research Scientist (ICAR)",
        description: "Conduct research in crop science, horticulture, soil science, and agricultural engineering.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Agriculture", "Genetics", "Plant Pathology", "Soil Science"],
        exam: "ICAR ARS/NET Exam"
      },
      {
        title: "Food Safety Officer",
        description: "Inspect food processing units, ensure food quality standards, and enforce FSSAI regulations.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Food Technology", "Microbiology", "Quality Assurance", "Regulatory Compliance"],
        exam: "State PSC / FSSAI Recruitment"
      },
      {
        title: "Soil Conservation Officer",
        description: "Plan and implement soil conservation programs, watershed management, and land reclamation.",
        salary: "₹35,400 – ₹1,12,400/month",
        skills: ["Soil Science", "Hydrology", "GIS Mapping", "Agricultural Engineering"],
        exam: "State PSC Exam"
      }
    ]
  },
  {
    id: "engineering-technical",
    title: " ⚛️ Engineering & Technical Services",
    icon: "⚛️",
    color: "hsl(280 60% 50%)",
    description: "Technical positions in government engineering departments, PSUs, and infrastructure agencies.",
    openings: "20,000+ annually",
    subJobs: [
      {
        title: "Indian Engineering Services (IES)",
        description: "Work as Class-1 officers in railways, telecom, defence, and public works departments.",
        salary: "₹56,100 – ₹2,50,000/month",
        skills: ["Civil/Mechanical/Electrical/Electronics Engineering", "Design", "Project Management"],
        exam: "UPSC Engineering Services Exam"
      },
      {
        title: "PSU Engineer (NTPC, BHEL, ONGC)",
        description: "Technical roles in major public sector enterprises handling energy, manufacturing, and petroleum.",
        salary: "₹40,000 – ₹1,80,000/month",
        skills: ["Engineering Fundamentals", "Domain Expertise", "Project Execution", "Safety Management"],
        exam: "GATE Score Based Recruitment"
      },
      {
        title: "Technical Officer (BIS/Patent Office)",
        description: "Standards development, patent examination, and technical regulation enforcement.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Technical Writing", "Standards Development", "Patent Law", "Research Analysis"],
        exam: "Direct Recruitment / UPSC"
      },
      {
        title: "Junior Engineer (SSC JE)",
        description: "Civil, mechanical, and electrical engineering roles in central government departments.",
        salary: "₹35,400 – ₹1,12,400/month",
        skills: ["Engineering Diploma/Degree", "AutoCAD", "Surveying", "Site Management"],
        exam: "SSC Junior Engineer Exam"
      }
    ]
  },
  {
    id: "it-cyber",
    title: " 🖥️ IT & Cyber Security",
    icon: "🖥️",
    color: "hsl(199 89% 48%)",
    description: "Technology roles in e-governance, cyber security, and digital India initiatives.",
    openings: "10,000+ annually",
    subJobs: [
      {
        title: "NIC Scientist / Technical Director",
        description: "Build e-governance platforms, government portals, and national IT infrastructure.",
        salary: "₹56,100 – ₹2,18,200/month",
        skills: ["Software Development", "Cloud Computing", "Database Management", "System Architecture"],
        exam: "NIC Scientist Exam"
      },
      {
        title: "CERT-In Analyst",
        description: "Protect government digital infrastructure, respond to cyber threats, and conduct security audits.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Cyber Security", "Network Security", "Ethical Hacking", "Incident Response"],
        exam: "Direct Recruitment"
      },
      {
        title: "IT Officer (IBPS SO)",
        description: "Manage banking technology, core banking systems, and digital banking platforms.",
        salary: "₹36,000 – ₹1,20,000/month",
        skills: ["DBMS", "Networking", "Programming", "Information Security"],
        exam: "IBPS Specialist Officer Exam"
      },
      {
        title: "Scientific Assistant (NIA/CBI)",
        description: "Digital forensics, cyber crime investigation, and electronic evidence analysis.",
        salary: "₹35,400 – ₹1,12,400/month",
        skills: ["Digital Forensics", "Data Recovery", "Python/Java", "Operating Systems"],
        exam: "Direct / SSC Recruitment"
      }
    ]
  },
  {
    id: "defence-science",
    title: "🛡️Defence & Strategic Sciences",
    icon: "🛡️",
    color: "hsl(0 70% 50%)",
    description: "Scientific and technical roles supporting India's defence and strategic capabilities.",
    openings: "3,000+ annually",
    subJobs: [
      {
        title: "Defence Research Scientist",
        description: "Develop advanced weapons, radar systems, combat vehicles, and electronic warfare technologies.",
        salary: "₹56,100 – ₹2,18,200/month",
        skills: ["Defence Technology", "Electronics", "Aeronautics", "Signal Processing"],
        exam: "DRDO SET / RAC"
      },
      {
        title: "Naval Dockyard Scientist",
        description: "Ship design, marine engineering, and naval weapons system development.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Marine Engineering", "Naval Architecture", "Metallurgy", "Welding Technology"],
        exam: "Indian Navy Recruitment"
      },
      {
        title: "Ordnance Factory Technical",
        description: "Manufacturing of ammunition, weapons, and defence equipment in government factories.",
        salary: "₹35,400 – ₹1,12,400/month",
        skills: ["Mechanical Engineering", "Quality Control", "Production Management", "Material Testing"],
        exam: "OFSS Recruitment"
      }
    ]
  },
  {
    id: "environment-geology",
    title: " ⚗️ Environment & Earth Sciences",
    icon: "⚗️",
    color: "hsl(170 60% 40%)",
    description: "Roles in environmental protection, geological survey, meteorology, and natural resource management.",
    openings: "4,000+ annually",
    subJobs: [
      {
        title: "Geologist (GSI)",
        description: "Geological mapping, mineral exploration, and groundwater assessment for the Geological Survey of India.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Geology", "Mineralogy", "Remote Sensing", "GIS"],
        exam: "UPSC Geologist Exam"
      },
      {
        title: "Meteorologist (IMD)",
        description: "Weather forecasting, climate analysis, and cyclone/tsunami early warning systems.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Meteorology", "Atmospheric Science", "Data Analysis", "Numerical Modeling"],
        exam: "IMD Scientist Recruitment"
      },
      {
        title: "Environment Engineer (CPCB/SPCB)",
        description: "Monitor pollution, enforce environmental regulations, and design waste treatment solutions.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Environmental Engineering", "Water Treatment", "Air Quality Monitoring", "EIA"],
        exam: "Direct Recruitment / State PSC"
      },
      {
        title: "Seismologist",
        description: "Monitor seismic activities, assess earthquake risks, and develop early warning systems.",
        salary: "₹44,900 – ₹1,42,400/month",
        skills: ["Geophysics", "Seismology", "Data Interpretation", "Instrumentation"],
        exam: "UPSC / Direct Recruitment"
      }
    ]
  },
  {
    id: "space-nuclear",
    title: "🚀Space & Nuclear Science",
    icon: "🚀",
    color: "hsl(25 90% 55%)",
    description: "Prestigious roles in India's space program and nuclear energy sector.",
    openings: "2,000+ annually",
    subJobs: [
      {
        title: "ISRO Technical Assistant",
        description: "Support satellite assembly, testing, launch operations, and ground station management.",
        salary: "₹35,400 – ₹1,12,400/month",
        skills: ["Electronics", "Mechanical Systems", "Instrumentation", "Testing & Calibration"],
        exam: "ISRO Technician Exam"
      },
      {
        title: "Nuclear Plant Engineer (NPCIL)",
        description: "Operate and maintain nuclear power plants, ensuring safety and efficient power generation.",
        salary: "₹40,000 – ₹1,40,000/month",
        skills: ["Nuclear Engineering", "Reactor Physics", "Radiation Protection", "Thermal Engineering"],
        exam: "GATE Score / NPCIL Recruitment"
      },
      {
        title: "Atomic Energy Regulatory Officer",
        description: "Ensure nuclear safety compliance, conduct inspections, and enforce radiation protection standards.",
        salary: "₹56,100 – ₹1,77,500/month",
        skills: ["Nuclear Safety", "Regulatory Framework", "Health Physics", "Risk Assessment"],
        exam: "AERB Recruitment"
      }
    ]
  }
];
