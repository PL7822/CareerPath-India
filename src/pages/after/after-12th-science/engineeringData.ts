export interface EngineeringType {
    name: string;
    description: string;
    salary: string;
    skills: string[];
}

export interface EngineeringBranch {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
    types: EngineeringType[];
}

export const engineeringBranches: EngineeringBranch[] = [
    {
        id: "civil",
        name: "Civil & Structural Engineering",
        icon: "🏗️",
        description: "Design and build infrastructure — bridges, roads, buildings, and water systems.",
        color: "from-blue-600 to-blue-800",
        types: [
            { name: "Civil Engineering", description: "Design, construction, and maintenance of infrastructure such as roads, bridges, and buildings.", salary: "₹63L–₹101L", skills: ["Structural Analysis", "CAD", "Project Management"] },
            { name: "Structural Engineering", description: "Ensuring buildings and structures can withstand loads and environmental forces.", salary: "₹67L–₹109L", skills: ["FEA", "Structural Design", "Materials Science"] },
            { name: "Geotechnical Engineering", description: "Analysis of soil and rock mechanics for foundations and earthworks.", salary: "₹63L–₹97L", skills: ["Soil Mechanics", "Foundation Design", "Geology"] },
            { name: "Transportation Engineering", description: "Planning, design, and operation of transportation systems.", salary: "₹59L–₹92L", skills: ["Traffic Analysis", "Urban Planning", "GIS"] },
            { name: "Water Resources Engineering", description: "Management and distribution of water resources and flood control.", salary: "₹60L–₹97L", skills: ["Hydrology", "Hydraulics", "Environmental Modeling"] },
            { name: "Construction Engineering", description: "Managing and executing construction projects from planning to completion.", salary: "₹59L–₹101L", skills: ["Scheduling", "Cost Estimation", "Safety Management"] },
            { name: "Earthquake Engineering", description: "Designing structures to withstand seismic activity.", salary: "₹71L–₹114L", skills: ["Seismic Analysis", "Structural Dynamics", "Risk Assessment"] },
            { name: "Coastal Engineering", description: "Protection and development of coastal areas against erosion and flooding.", salary: "₹66L–₹105L", skills: ["Wave Mechanics", "Sediment Transport", "Marine Structures"] },
            { name: "Highway Engineering", description: "Design and maintenance of highway systems and road networks.", salary: "₹57L–₹88L", skills: ["Pavement Design", "Traffic Engineering", "Surveying"] },
            { name: "Municipal Engineering", description: "Infrastructure planning for municipalities including water, sewer, and roads.", salary: "₹59L–₹92L", skills: ["Urban Infrastructure", "Public Works", "Regulation Compliance"] },
            { name: "Surveying Engineering", description: "Precise measurement and mapping of land for engineering projects.", salary: "₹46L–₹76L", skills: ["GPS/GNSS", "Photogrammetry", "GIS"] },
            { name: "Architectural Engineering", description: "Integration of engineering principles into building design and construction.", salary: "₹60L–₹97L", skills: ["Building Systems", "HVAC", "Structural Design"] },
        ],
    },
    {
        id: "mechanical",
        name: "Mechanical & Industrial Engineering",
        icon: "⚙️",
        description: "Design and manufacture machines, engines, and production systems.",
        color: "from-slate-600 to-slate-800",
        types: [
            { name: "Mechanical Engineering", description: "Design and manufacture of mechanical systems, from engines to robotics.", salary: "₹63L–₹105L", skills: ["Thermodynamics", "CAD/CAM", "Fluid Mechanics"] },
            { name: "Industrial Engineering", description: "Optimization of complex processes, systems, and organizations.", salary: "₹60L–₹97L", skills: ["Lean Manufacturing", "Operations Research", "Six Sigma"] },
            { name: "Manufacturing Engineering", description: "Development and improvement of manufacturing processes and systems.", salary: "₹59L–₹92L", skills: ["CNC Programming", "Quality Control", "Process Design"] },
            { name: "Automotive Engineering", description: "Design and development of vehicles and automotive systems.", salary: "₹63L–₹109L", skills: ["Vehicle Dynamics", "Powertrain", "Emissions"] },
            { name: "Aerospace Engineering", description: "Design of aircraft, spacecraft, and propulsion systems.", salary: "₹71L–₹126L", skills: ["Aerodynamics", "Propulsion", "Avionics"] },
            { name: "Marine Engineering", description: "Design and maintenance of ships and offshore structures.", salary: "₹66L–₹105L", skills: ["Naval Architecture", "Marine Propulsion", "Ship Systems"] },
            { name: "Thermal Engineering", description: "Study and application of heat transfer and thermodynamic systems.", salary: "₹63L–₹101L", skills: ["Heat Transfer", "HVAC", "Combustion"] },
            { name: "Acoustical Engineering", description: "Control of sound and vibration in buildings and products.", salary: "₹59L–₹97L", skills: ["Sound Design", "Noise Control", "Vibration Analysis"] },
            { name: "Robotics Engineering", description: "Design, construction, and programming of robotic systems.", salary: "₹71L–₹122L", skills: ["ROS", "Machine Learning", "Control Systems"] },
            { name: "Mechatronics Engineering", description: "Combining mechanical, electrical, and software engineering.", salary: "₹67L–₹109L", skills: ["Embedded Systems", "Sensors", "PLC Programming"] },
            { name: "HVAC Engineering", description: "Design of heating, ventilation, and air conditioning systems.", salary: "₹55L–₹88L", skills: ["Load Calculations", "Refrigeration", "Building Codes"] },
            { name: "Reliability Engineering", description: "Ensuring products and systems perform consistently over time.", salary: "₹67L–₹105L", skills: ["FMEA", "Statistical Analysis", "Root Cause Analysis"] },
            { name: "Maintenance Engineering", description: "Planning and executing maintenance strategies for equipment.", salary: "₹55L–₹84L", skills: ["Preventive Maintenance", "CMMS", "Diagnostics"] },
            { name: "Quality Engineering", description: "Ensuring products meet quality standards throughout production.", salary: "₹57L–₹92L", skills: ["ISO Standards", "SPC", "Auditing"] },
        ],
    },
    {
        id: "electrical",
        name: "Electrical & Electronics Engineering",
        icon: "⚡",
        description: "Power systems, electronics, telecommunications, and signal processing.",
        color: "from-yellow-500 to-orange-600",
        types: [
            { name: "Computer Engineering", description: "Design of computer hardware and integration with software systems.", salary: "₹71L–₹126L", skills: ["Embedded Systems", "FPGA", "Computer Architecture"] },
            { name: "Software Engineering", description: "Design, development, and maintenance of software applications.", salary: "₹82L–₹155L", skills: ["Full-Stack", "Agile", "System Design"] },
            { name: "Computer Science Engineering", description: "Theoretical and practical foundations of computing and algorithms.", salary: "₹77L–₹142L", skills: ["Algorithms", "Data Structures", "Machine Learning"] },
            { name: "Network Engineering", description: "Design, implementation, and management of computer networks.", salary: "₹68L–₹118L", skills: ["Cisco/Juniper", "Cloud Networking", "Security"] },
            { name: "Cybersecurity Engineering", description: "Protection of systems, networks, and data from cyber threats.", salary: "₹82L–₹142L", skills: ["Penetration Testing", "SIEM", "Encryption"] },
            { name: "Data Engineering", description: "Building systems that collect, store, and analyze large datasets.", salary: "₹82L–₹141L", skills: ["ETL", "SQL/NoSQL", "Apache Spark"] },
            { name: "AI/Machine Learning Engineering", description: "Building intelligent systems that learn from data.", salary: "₹91L–₹182L", skills: ["Deep Learning", "Python/TensorFlow", "NLP"] },
            { name: "Cloud Engineering", description: "Designing and managing cloud computing infrastructure.", salary: "₹86L–₹150L", skills: ["AWS/Azure/GCP", "Kubernetes", "IaC"] },
            { name: "Embedded Systems Engineering", description: "Programming and designing software for embedded hardware devices.", salary: "₹73L–₹118L", skills: ["C/C++", "RTOS", "Hardware Interfacing"] },
            { name: "Game Engineering", description: "Development of video game engines, graphics, and interactive experiences.", salary: "₹64L–₹127L", skills: ["Unity/Unreal", "C++", "3D Graphics"] },
        ],
    },
    {
        id: "computer",
        name: "Computer & Software Engineering",
        icon: "💻",
        description: "Software development, computer hardware, AI, and cybersecurity.",
        color: "from-violet-600 to-purple-800",
        types: [
            { name: "Computer Engineering", description: "Design of computer hardware and integration with software systems.", salary: "₹71L–₹126L", skills: ["Embedded Systems", "FPGA", "Computer Architecture"] },
            { name: "Software Engineering", description: "Design, development, and maintenance of software applications.", salary: "₹82L–₹155L", skills: ["Full-Stack", "Agile", "System Design"] },
            { name: "Computer Science Engineering", description: "Theoretical and practical foundations of computing and algorithms.", salary: "₹77L–₹142L", skills: ["Algorithms", "Data Structures", "Machine Learning"] },
            { name: "Network Engineering", description: "Design, implementation, and management of computer networks.", salary: "₹68L–₹118L", skills: ["Cisco/Juniper", "Cloud Networking", "Security"] },
            { name: "Cybersecurity Engineering", description: "Protection of systems, networks, and data from cyber threats.", salary: "₹82L–₹142L", skills: ["Penetration Testing", "SIEM", "Encryption"] },
            { name: "Data Engineering", description: "Building systems that collect, store, and analyze large datasets.", salary: "₹82L–₹141L", skills: ["ETL", "SQL/NoSQL", "Apache Spark"] },
            { name: "AI/Machine Learning Engineering", description: "Building intelligent systems that learn from data.", salary: "₹91L–₹182L", skills: ["Deep Learning", "Python/TensorFlow", "NLP"] },
            { name: "Cloud Engineering", description: "Designing and managing cloud computing infrastructure.", salary: "₹86L–₹150L", skills: ["AWS/Azure/GCP", "Kubernetes", "IaC"] },
            { name: "Embedded Systems Engineering", description: "Programming and designing software for embedded hardware devices.", salary: "₹73L–₹118L", skills: ["C/C++", "RTOS", "Hardware Interfacing"] },
            { name: "Game Engineering", description: "Development of video game engines, graphics, and interactive experiences.", salary: "₹64L–₹127L", skills: ["Unity/Unreal", "C++", "3D Graphics"] },
        ],
    },
    {
        id: "chemical",
        name: "Chemical & Materials Engineering",
        icon: "🧪",
        description: "Chemical processes, materials science, polymers, and nanotechnology.",
        color: "from-green-600 to-teal-700",
        types: [
            { name: "Chemical Engineering", description: "Design of chemical processes for manufacturing, pharmaceuticals, and energy.", salary: "₹71L–₹118L", skills: ["Process Design", "Thermodynamics", "Reaction Engineering"] },
            { name: "Materials Engineering", description: "Development and testing of materials used in products and structures.", salary: "₹68L–₹109L", skills: ["Metallurgy", "Composites", "Material Testing"] },
            { name: "Polymer Engineering", description: "Design and processing of polymer materials and plastics.", salary: "₹65L–₹105L", skills: ["Polymer Chemistry", "Extrusion", "Injection Molding"] },
            { name: "Corrosion Engineering", description: "Prevention and control of material degradation from corrosion.", salary: "₹68L–₹109L", skills: ["Electrochemistry", "Coatings", "Cathodic Protection"] },
            { name: "Ceramic Engineering", description: "Development of ceramic materials for electronics, aerospace, and medical use.", salary: "₹65L–₹105L", skills: ["Sintering", "Crystal Structure", "Thermal Properties"] },
            { name: "Textile Engineering", description: "Design of textile manufacturing processes and fabric development.", salary: "₹50L–₹82L", skills: ["Fiber Science", "Weaving", "Dyeing Technology"] },
            { name: "Nanotechnology Engineering", description: "Manipulation of matter at the nanoscale for new materials and devices.", salary: "₹73L–₹127L", skills: ["Nanofabrication", "Microscopy", "Quantum Effects"] },
            { name: "Petroleum Engineering", description: "Extraction and production of oil and natural gas resources.", salary: "₹77L–₹146L", skills: ["Reservoir Engineering", "Drilling", "Production Optimization"] },
            { name: "Biochemical Engineering", description: "Applying engineering principles to biological and chemical processes.", salary: "₹68L–₹114L", skills: ["Bioprocessing", "Fermentation", "Bioreactors"] },
            { name: "Metallurgical Engineering", description: "Extraction and processing of metals from ores and recycling.", salary: "₹65L–₹105L", skills: ["Extractive Metallurgy", "Heat Treatment", "Alloy Design"] },
            { name: "Paper Engineering", description: "Design and optimization of paper and pulp manufacturing.", salary: "₹55L–₹87L", skills: ["Pulping", "Paper Chemistry", "Process Control"] },
        ],
    },
    {
        id: "environmental",
        name: "Environmental & Energy Engineering",
        icon: "🌍",
        description: "Sustainability, renewable energy, environmental protection, and resource management.",
        color: "from-emerald-500 to-green-700",
        types: [
            { name: "Environmental Engineering", description: "Solutions for environmental challenges including pollution and waste management.", salary: "₹65L–₹105L", skills: ["Water Treatment", "Air Quality", "EIA"] },
            { name: "Energy Engineering", description: "Design and optimization of energy production and distribution systems.", salary: "₹71L–₹118L", skills: ["Renewable Energy", "Grid Design", "Energy Storage"] },
            { name: "Solar Engineering", description: "Design and installation of solar energy systems.", salary: "₹64L–₹105L", skills: ["PV Systems", "Solar Thermal", "Grid Integration"] },
            { name: "Wind Engineering", description: "Design and optimization of wind energy systems and turbines.", salary: "₹68L–₹109L", skills: ["Turbine Design", "Wind Assessment", "Structural Loads"] },
            { name: "Nuclear Engineering", description: "Design and operation of nuclear power plants and radiation systems.", salary: "₹77L–₹127L", skills: ["Reactor Physics", "Radiation Safety", "Nuclear Fuel"] },
            { name: "Sanitary Engineering", description: "Design of systems for water supply, sewage, and public health.", salary: "₹62L–₹96L", skills: ["Wastewater Treatment", "Plumbing Design", "Public Health"] },
            { name: "Climate Engineering", description: "Technologies and systems to address climate change impacts.", salary: "₹68L–₹114L", skills: ["Carbon Capture", "Climate Modeling", "Sustainability"] },
            { name: "Ocean Engineering", description: "Design of structures and systems for ocean environments.", salary: "₹71L–₹114L", skills: ["Underwater Systems", "Marine Structures", "Oceanography"] },
            { name: "Agricultural Engineering", description: "Application of engineering to agricultural production and processing.", salary: "₹59L–₹91L", skills: ["Irrigation", "Farm Machinery", "Food Processing"] },
            { name: "Mining Engineering", description: "Design and operation of mines for extracting minerals and resources.", salary: "₹71L–₹123L", skills: ["Mine Planning", "Rock Mechanics", "Blasting"] },
        ],
    },
    {
        id: "biomedical",
        name: "Biomedical & Bioengineering",
        icon: "🧬",
        description: "Medical devices, biomechanics, genetic engineering, and healthcare technology.",
        color: "from-rose-500 to-pink-700",
        types: [
            { name: "Biomedical Engineering", description: "Design of medical devices, prosthetics, and healthcare equipment.", salary: "₹68L–₹118L", skills: ["Medical Devices", "Biomechanics", "FDA Regulation"] },
            { name: "Bioengineering", description: "Applying engineering to biological systems and organisms.", salary: "₹65L–₹114L", skills: ["Tissue Engineering", "Biomaterials", "Cell Biology"] },
            { name: "Genetic Engineering", description: "Modification of genetic material for medical and agricultural purposes.", salary: "₹71L–₹123L", skills: ["CRISPR", "Gene Therapy", "Molecular Biology"] },
            { name: "Clinical Engineering", description: "Management and maintenance of medical equipment in healthcare settings.", salary: "₹59L–₹96L", skills: ["Medical Equipment", "Hospital Systems", "Compliance"] },
            { name: "Pharmaceutical Engineering", description: "Design of processes for drug manufacturing and delivery.", salary: "₹73L–₹123L", skills: ["Drug Formulation", "GMP", "Process Validation"] },
            { name: "Rehabilitation Engineering", description: "Design of assistive technology for people with disabilities.", salary: "₹59L–₹91L", skills: ["Prosthetics", "Adaptive Tech", "Ergonomics"] },
            { name: "Neural Engineering", description: "Interface between engineering and the nervous system.", salary: "₹77L–₹132L", skills: ["Brain-Computer Interface", "Neuroscience", "Signal Processing"] },
            { name: "Tissue Engineering", description: "Creating biological tissues for medical applications.", salary: "₹68L–₹114L", skills: ["Scaffolding", "Stem Cells", "Bioreactors"] },
        ],
    },
    {
        id: "systems",
        name: "Systems & Interdisciplinary Engineering",
        icon: "🔧",
        description: "Systems design, safety, operations research, and cross-disciplinary fields.",
        color: "from-cyan-500 to-blue-700",
        types: [
            { name: "Systems Engineering", description: "Design and management of complex systems over their life cycles.", salary: "₹77L–₹132L", skills: ["Requirements Analysis", "MBSE", "V&V"] },
            { name: "Safety Engineering", description: "Ensuring safety in systems, products, and processes.", salary: "₹68L–₹109L", skills: ["Risk Assessment", "OSHA", "Hazard Analysis"] },
            { name: "Fire Protection Engineering", description: "Design of fire detection, suppression, and prevention systems.", salary: "₹65L–₹105L", skills: ["Fire Codes", "Sprinkler Design", "Smoke Control"] },
            { name: "Human Factors Engineering", description: "Designing systems that account for human capabilities and limitations.", salary: "₹71L–₹114L", skills: ["Ergonomics", "UX Research", "Cognitive Psychology"] },
            { name: "Operations Research Engineering", description: "Mathematical methods for decision-making and optimization.", salary: "₹73L–₹123L", skills: ["Linear Programming", "Simulation", "Statistics"] },
            { name: "Value Engineering", description: "Improving product value by analyzing functions and reducing costs.", salary: "₹68L–₹109L", skills: ["Cost Analysis", "Functional Analysis", "Design Review"] },
            { name: "Forensic Engineering", description: "Investigation of failures in structures, products, and systems.", salary: "₹71L–₹118L", skills: ["Failure Analysis", "Expert Testimony", "Inspection"] },
            { name: "Military Engineering", description: "Engineering for military applications including fortifications and logistics.", salary: "₹68L–₹114L", skills: ["Defense Systems", "Logistics", "Combat Engineering"] },
            { name: "Audio Engineering", description: "Recording, mixing, and reproduction of sound.", salary: "₹41L–₹82L", skills: ["DAW", "Acoustics", "Live Sound"] },
            { name: "Photonics Engineering", description: "Application of light-based technologies in communications and sensing.", salary: "₹74L–₹123L", skills: ["Fiber Optics", "Laser Design", "Optical Sensors"] },
            { name: "Packaging Engineering", description: "Design of packaging for protection, storage, and distribution.", salary: "₹55L–₹87L", skills: ["Material Selection", "Sustainability", "Testing"] },
            { name: "Plastics Engineering", description: "Development and processing of plastic materials and products.", salary: "₹59L–₹96L", skills: ["Injection Molding", "Polymer Science", "Tooling"] },
            { name: "Food Engineering", description: "Application of engineering to food processing and preservation.", salary: "₹55L–₹91L", skills: ["Food Safety", "Process Engineering", "Packaging"] },
            { name: "Genetic Algorithm Engineering", description: "Using evolutionary algorithms for optimization problems.", salary: "₹77L–₹127L", skills: ["Evolutionary Computation", "Optimization", "Python"] },
            { name: "Reverse Engineering", description: "Analyzing systems to understand design and recreate or improve them.", salary: "₹68L–₹114L", skills: ["3D Scanning", "Disassembly", "CAD Reconstruction"] },
        ],
    },
];

export const totalTypes = engineeringBranches.reduce((sum, b) => sum + b.types.length, 0);
