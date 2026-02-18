export interface BscSubType {
  name: string;
  description: string;
  careers: string[];
  salaryRange: string;
  skills: string[];
}

export interface BscBranch {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  subTypes: BscSubType[];
}

export const bscBranches: BscBranch[] = [
  {
    id: "computer-science",
    title: "Computer Science & IT",
    icon: "Monitor",
    color: "220 70% 45%",
    description: "Technology-driven degrees covering software, data, AI, and digital systems.",
    subTypes: [
      { name: "BSc Computer Science", description: "Core computing principles, algorithms, software engineering and systems design.", careers: ["Software Engineer", "Systems Architect", "Tech Lead"], salaryRange: "₹6L–₹12L", skills: ["Programming", "Algorithms", "Data Structures", "System Design"] },
      { name: "BSc Information Technology", description: "Management of technology infrastructure, networks, and enterprise systems.", careers: ["IT Manager", "Network Admin", "Cloud Engineer"], salaryRange: "₹5L–₹10L", skills: ["Networking", "Cloud Computing", "IT Security", "Database Management"] },
      { name: "BSc Software Engineering", description: "Systematic approach to software development, testing, and project management.", careers: ["Software Developer", "QA Engineer", "DevOps Engineer"], salaryRange: "₹5.5L–₹11L", skills: ["Software Design", "Agile", "Testing", "CI/CD"] },
      { name: "BSc Data Science", description: "Extracting insights from complex datasets using statistics and machine learning.", careers: ["Data Scientist", "ML Engineer", "Data Analyst"], salaryRange: "₹6.5L–₹13L", skills: ["Python", "Machine Learning", "Statistics", "SQL"] },
      { name: "BSc Artificial Intelligence", description: "Building intelligent systems, neural networks, and autonomous agents.", careers: ["AI Engineer", "Research Scientist", "NLP Specialist"], salaryRange: "₹7L–₹14L", skills: ["Deep Learning", "NLP", "Computer Vision", "TensorFlow"] },
      { name: "BSc Cybersecurity", description: "Protecting digital assets, networks, and systems from cyber threats.", careers: ["Security Analyst", "Penetration Tester", "CISO"], salaryRange: "₹6L–₹12L", skills: ["Ethical Hacking", "Cryptography", "Risk Assessment", "SIEM"] },
      { name: "BSc Information Systems", description: "Bridging business needs with technology solutions and enterprise software.", careers: ["Business Analyst", "Systems Analyst", "ERP Consultant"], salaryRange: "₹5L–₹9L", skills: ["Business Process", "ERP", "Project Management", "SQL"] },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Technology",
    icon: "Cog",
    color: "200 60% 40%",
    description: "Applied science degrees focused on designing, building, and optimizing systems.",
    subTypes: [
      { name: "BSc Mechanical Engineering", description: "Design of machines, thermal systems, and manufacturing processes.", careers: ["Mechanical Engineer", "Product Designer", "Manufacturing Engineer"], salaryRange: "₹4.5L–₹9L", skills: ["CAD", "Thermodynamics", "Materials Science", "FEA"] },
      { name: "BSc Electrical Engineering", description: "Power systems, electronics, signal processing, and electromagnetic systems.", careers: ["Electrical Engineer", "Power Systems Engineer", "Electronics Designer"], salaryRange: "₹5L–₹10L", skills: ["Circuit Design", "Power Systems", "Signal Processing", "MATLAB"] },
      { name: "BSc Civil Engineering", description: "Infrastructure design including buildings, bridges, roads, and water systems.", careers: ["Civil Engineer", "Structural Engineer", "Urban Planner"], salaryRange: "₹4.5L–₹9L", skills: ["Structural Analysis", "AutoCAD", "Project Management", "Surveying"] },
      { name: "BSc Aerospace Engineering", description: "Aircraft and spacecraft design, propulsion, and aerodynamics.", careers: ["Aerospace Engineer", "Flight Test Engineer", "Propulsion Specialist"], salaryRange: "₹6L–₹11L", skills: ["Aerodynamics", "Propulsion", "Flight Mechanics", "MATLAB"] },
      { name: "BSc Biomedical Engineering", description: "Engineering principles applied to healthcare and medical device development.", careers: ["Biomedical Engineer", "Clinical Engineer", "Medical Device Designer"], salaryRange: "₹5L–₹10L", skills: ["Biomechanics", "Medical Devices", "Signal Processing", "Biomaterials"] },
      { name: "BSc Chemical Engineering", description: "Chemical processes for manufacturing, energy, and pharmaceutical production.", careers: ["Chemical Engineer", "Process Engineer", "Pharmaceutical Engineer"], salaryRange: "₹5L–₹11L", skills: ["Process Design", "Thermodynamics", "Chemical Kinetics", "Safety Engineering"] },
    ],
  },
  {
    id: "life-sciences",
    title: "Life Sciences & Biology",
    icon: "Leaf",
    color: "150 50% 40%",
    description: "Study of living organisms from molecular biology to ecology and evolution.",
    subTypes: [
      { name: "BSc Biology", description: "Comprehensive study of life processes, organisms, and ecosystems.", careers: ["Biologist", "Lab Technician", "Conservation Scientist"], salaryRange: "₹3.5L–₹7L", skills: ["Lab Techniques", "Genetics", "Ecology", "Microbiology"] },
      { name: "BSc Biotechnology", description: "Using biological systems for developing products in medicine and agriculture.", careers: ["Biotechnologist", "Research Associate", "Quality Control Analyst"], salaryRange: "₹4L–₹8L", skills: ["Genetic Engineering", "Cell Culture", "Bioinformatics", "GMP"] },
      { name: "BSc Microbiology", description: "Study of microorganisms including bacteria, viruses, and fungi.", careers: ["Microbiologist", "Clinical Scientist", "Food Safety Specialist"], salaryRange: "₹4L–₹7L", skills: ["Microscopy", "Aseptic Technique", "PCR", "Culture Methods"] },
      { name: "BSc Biochemistry", description: "Chemical processes within living organisms at the molecular level.", careers: ["Biochemist", "Pharmaceutical Researcher", "Clinical Biochemist"], salaryRange: "₹4L–₹8L", skills: ["Protein Analysis", "Enzymology", "Chromatography", "Molecular Biology"] },
      { name: "BSc Genetics", description: "Study of heredity, DNA, gene expression, and genomic medicine.", careers: ["Genetic Counselor", "Genomics Researcher", "Lab Geneticist"], salaryRange: "₹4.5L–₹8.5L", skills: ["DNA Sequencing", "CRISPR", "Bioinformatics", "Statistical Genetics"] },
      { name: "BSc Zoology", description: "Study of animal biology, behavior, physiology, and conservation.", careers: ["Zoologist", "Wildlife Biologist", "Animal Behaviorist"], salaryRange: "₹3L–₹6L", skills: ["Taxonomy", "Animal Behavior", "Field Research", "Conservation"] },
    ],
  },
  {
    id: "health-medical",
    title: "Health & Medical Sciences",
    icon: "Heart",
    color: "0 65% 50%",
    description: "Healthcare-focused degrees preparing for clinical, research, and public health roles.",
    subTypes: [
      { name: "BSc Nursing", description: "Clinical nursing practice, patient care, and healthcare management.", careers: ["Registered Nurse", "Nurse Practitioner", "Clinical Nurse Specialist"], salaryRange: "₹4L–₹9L", skills: ["Patient Care", "Clinical Assessment", "Pharmacology", "CPR"] },
      { name: "BSc Pharmacy", description: "Pharmaceutical sciences, drug design, and clinical pharmacy practice.", careers: ["Pharmacist", "Pharmaceutical Scientist", "Drug Safety Associate"], salaryRange: "₹5L–₹10L", skills: ["Pharmacology", "Drug Formulation", "Clinical Trials", "Regulatory Affairs"] },
      { name: "BSc Biomedical Science", description: "Laboratory science supporting diagnosis and treatment of diseases.", careers: ["Biomedical Scientist", "Lab Manager", "Clinical Researcher"], salaryRange: "₹4L–₹8L", skills: ["Haematology", "Histopathology", "Immunology", "Lab Management"] },
      { name: "BSc Public Health", description: "Population health, epidemiology, and healthcare policy.", careers: ["Public Health Officer", "Epidemiologist", "Health Policy Analyst"], salaryRange: "₹4L–₹8L", skills: ["Epidemiology", "Biostatistics", "Health Policy", "Community Health"] },
      { name: "BSc Nutrition & Dietetics", description: "Science of nutrition, diet therapy, and food science.", careers: ["Dietitian", "Nutritionist", "Food Scientist"], salaryRange: "₹3.5L–₹7L", skills: ["Clinical Nutrition", "Meal Planning", "Food Chemistry", "Counseling"] },
      { name: "BSc Physiotherapy", description: "Physical rehabilitation, movement science, and musculoskeletal therapy.", careers: ["Physiotherapist", "Sports Therapist", "Rehabilitation Specialist"], salaryRange: "₹4L–₹8L", skills: ["Manual Therapy", "Exercise Prescription", "Anatomy", "Rehabilitation"] },
    ],
  },
  {
    id: "physical-sciences",
    title: "Physical Sciences & Mathematics",
    icon: "Atom",
    color: "270 50% 50%",
    description: "Fundamental sciences exploring matter, energy, and mathematical structures.",
    subTypes: [
      { name: "BSc Physics", description: "Fundamental laws of nature, quantum mechanics, and theoretical physics.", careers: ["Physicist", "Research Scientist", "Data Analyst"], salaryRange: "₹4.5L–₹9L", skills: ["Quantum Mechanics", "Mathematical Modeling", "Lab Physics", "Computational Physics"] },
      { name: "BSc Chemistry", description: "Study of matter, chemical reactions, and material properties.", careers: ["Chemist", "Analytical Scientist", "Quality Analyst"], salaryRange: "₹4L–₹8L", skills: ["Organic Chemistry", "Spectroscopy", "Lab Safety", "Analytical Chemistry"] },
      { name: "BSc Mathematics", description: "Pure and applied mathematics, proof theory, and mathematical analysis.", careers: ["Mathematician", "Actuary", "Quantitative Analyst"], salaryRange: "₹5L–₹10L", skills: ["Calculus", "Linear Algebra", "Probability", "Mathematical Proof"] },
      { name: "BSc Statistics", description: "Statistical theory, data analysis, and probability modeling.", careers: ["Statistician", "Data Analyst", "Biostatistician"], salaryRange: "₹5L–₹10L", skills: ["R Programming", "Regression Analysis", "Bayesian Statistics", "Survey Design"] },
      { name: "BSc Geology", description: "Earth's materials, processes, structure, and geological history.", careers: ["Geologist", "Mining Engineer", "Environmental Consultant"], salaryRange: "₹4.5L–₹8.5L", skills: ["Mineralogy", "GIS", "Field Mapping", "Petrology"] },
      { name: "BSc Astronomy", description: "Study of celestial objects, cosmology, and space science.", careers: ["Astronomer", "Planetarium Director", "Space Scientist"], salaryRange: "₹4.5L–₹9L", skills: ["Astrophysics", "Telescope Operation", "Data Analysis", "Spectroscopy"] },
    ],
  },
  {
    id: "environmental",
    title: "Environmental & Earth Sciences",
    icon: "Globe",
    color: "160 55% 38%",
    description: "Sustainability-focused degrees addressing climate, ecology, and natural resources.",
    subTypes: [
      { name: "BSc Environmental Science", description: "Study of environmental systems, pollution, and sustainability.", careers: ["Environmental Scientist", "Sustainability Consultant", "Conservation Officer"], salaryRange: "₹3.5L–₹7L", skills: ["Environmental Impact", "GIS", "Ecology", "Policy Analysis"] },
      { name: "BSc Marine Biology", description: "Ocean ecosystems, marine organisms, and aquatic conservation.", careers: ["Marine Biologist", "Aquatic Ecologist", "Fisheries Scientist"], salaryRange: "₹3L–₹6L", skills: ["Diving", "Marine Ecology", "Species ID", "Water Chemistry"] },
      { name: "BSc Agricultural Science", description: "Crop science, soil management, and sustainable farming practices.", careers: ["Agronomist", "Farm Manager", "Agricultural Consultant"], salaryRange: "₹3.5L–₹7L", skills: ["Crop Science", "Soil Analysis", "Pest Management", "Agribusiness"] },
      { name: "BSc Forestry", description: "Forest management, conservation, and woodland ecology.", careers: ["Forester", "Conservation Manager", "Arborist"], salaryRange: "₹3L–₹6L", skills: ["Silviculture", "Forest Ecology", "GIS", "Wildlife Management"] },
      { name: "BSc Meteorology", description: "Weather systems, climate science, and atmospheric physics.", careers: ["Meteorologist", "Climate Scientist", "Weather Forecaster"], salaryRange: "₹4L–₹8L", skills: ["Atmospheric Science", "Data Modeling", "Remote Sensing", "Climatology"] },
    ],
  },
  {
    id: "business",
    title: "Business & Economics",
    icon: "TrendingUp",
    color: "38 80% 48%",
    description: "Science-based business degrees combining analytics with management principles.",
    subTypes: [
      { name: "BSc Economics", description: "Economic theory, market analysis, and policy evaluation.", careers: ["Economist", "Policy Analyst", "Financial Analyst"], salaryRange: "₹4.5L–₹10L", skills: ["Econometrics", "Macroeconomics", "Data Analysis", "Policy Modeling"] },
      { name: "BSc Finance", description: "Financial markets, investment analysis, and corporate finance.", careers: ["Financial Analyst", "Investment Banker", "Portfolio Manager"], salaryRange: "₹5L–₹12L", skills: ["Financial Modeling", "Valuation", "Risk Management", "Bloomberg"] },
      { name: "BSc Accounting", description: "Financial reporting, auditing, and management accounting.", careers: ["Accountant", "Auditor", "Tax Consultant"], salaryRange: "₹4L–₹8L", skills: ["GAAP", "Auditing", "Tax Law", "Financial Reporting"] },
      { name: "BSc Business Analytics", description: "Data-driven decision making for business strategy and operations.", careers: ["Business Analyst", "Operations Analyst", "Strategy Consultant"], salaryRange: "₹5L–₹10L", skills: ["SQL", "Tableau", "Predictive Analytics", "Business Intelligence"] },
      { name: "BSc Actuarial Science", description: "Risk assessment using mathematics, statistics, and financial theory.", careers: ["Actuary", "Risk Analyst", "Insurance Underwriter"], salaryRange: "₹5.5L–₹11L", skills: ["Probability", "Risk Modeling", "Financial Mathematics", "Excel VBA"] },
    ],
  },
  {
    id: "psychology",
    title: "Psychology & Social Sciences",
    icon: "Brain",
    color: "280 45% 50%",
    description: "Scientific study of human behavior, cognition, and social systems.",
    subTypes: [
      { name: "BSc Psychology", description: "Scientific study of mind, behavior, and mental processes.", careers: ["Psychologist", "Counselor", "UX Researcher"], salaryRange: "₹3.5L–₹8L", skills: ["Research Methods", "Statistics", "Clinical Skills", "Cognitive Science"] },
      { name: "BSc Cognitive Science", description: "Interdisciplinary study of mind, brain, and intelligent systems.", careers: ["Cognitive Scientist", "UX Designer", "AI Researcher"], salaryRange: "₹4.5L–₹9L", skills: ["Neuroscience", "Linguistics", "Programming", "Experimental Design"] },
      { name: "BSc Criminology", description: "Study of crime, criminal behavior, and the justice system.", careers: ["Criminologist", "Probation Officer", "Policy Researcher"], salaryRange: "₹3L–₹6L", skills: ["Research Methods", "Criminal Law", "Data Analysis", "Forensics"] },
      { name: "BSc Sociology", description: "Scientific study of social behavior, institutions, and structures.", careers: ["Sociologist", "Social Researcher", "Policy Analyst"], salaryRange: "₹3L–₹6L", skills: ["Qualitative Research", "Survey Design", "Social Theory", "SPSS"] },
      { name: "BSc Forensic Science", description: "Application of science to criminal investigations and legal proceedings.", careers: ["Forensic Scientist", "Crime Scene Investigator", "Lab Analyst"], salaryRange: "₹3.5L–₹7L", skills: ["DNA Analysis", "Fingerprinting", "Toxicology", "Evidence Collection"] },
    ],
  },
];
