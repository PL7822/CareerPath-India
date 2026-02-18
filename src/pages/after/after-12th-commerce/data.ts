export interface SubBranch {
  name: string;
  description: string;
  salary: string;
  skills: string[];
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
    id: "accounting-finance",
    title: "Accounting & Finance",
    icon: "Calculator",
    description: "Manage financial records, audits, taxation, and corporate finance for organizations.",
    subBranches: [
      { name: "Chartered Accountant (CA)", description: "Handle auditing, taxation, and financial advisory for businesses and individuals.", salary: "₹7–30 LPA", skills: ["Accounting Standards", "Taxation", "Auditing", "Financial Analysis"] },
      { name: "Company Secretary (CS)", description: "Ensure corporate governance and legal compliance for companies.", salary: "₹5–20 LPA", skills: ["Corporate Law", "Compliance", "Governance", "Legal Drafting"] },
      { name: "Cost & Management Accountant (CMA)", description: "Focus on cost optimization, budgeting, and management accounting.", salary: "₹6–18 LPA", skills: ["Cost Accounting", "Budgeting", "Financial Planning", "ERP Systems"] },
      { name: "Tax Consultant", description: "Advise clients on tax planning, filing, and compliance strategies.", salary: "₹4–15 LPA", skills: ["Income Tax", "GST", "Tax Planning", "Filing Returns"] },
      { name: "Financial Analyst", description: "Analyze financial data to guide investment and business decisions.", salary: "₹5–25 LPA", skills: ["Financial Modeling", "Excel", "Data Analysis", "Valuation"] },
    ],
  },
  {
    id: "banking-insurance",
    title: "Banking & Insurance",
    icon: "Landmark",
    description: "Work in banks, insurance companies, and financial institutions managing funds and risk.",
    subBranches: [
      { name: "Bank Probationary Officer (PO)", description: "Entry-level bank officer managing branch operations, loans, and customer service.", salary: "₹5–12 LPA", skills: ["Banking Operations", "Customer Service", "Financial Products", "Risk Assessment"] },
      { name: "Insurance Advisor", description: "Help clients choose suitable insurance policies and manage claims.", salary: "₹3–10 LPA", skills: ["Insurance Products", "Risk Analysis", "Sales", "Claims Management"] },
      { name: "Investment Banker", description: "Facilitate mergers, acquisitions, and capital raising for corporations.", salary: "₹10–50 LPA", skills: ["M&A", "Valuation", "Financial Modeling", "Deal Structuring"] },
      { name: "Loan Officer", description: "Evaluate and approve loan applications for individuals and businesses.", salary: "₹3–8 LPA", skills: ["Credit Analysis", "Documentation", "Risk Assessment", "Customer Relations"] },
    ],
  },
  {
    id: "business-management",
    title: "Business & Management",
    icon: "Briefcase",
    description: "Lead teams, manage operations, and drive business growth across industries.",
    subBranches: [
      { name: "Business Analyst", description: "Bridge business needs with technology solutions through data-driven insights.", salary: "₹6–20 LPA", skills: ["Data Analysis", "Process Mapping", "SQL", "Communication"] },
      { name: "Human Resource Manager", description: "Manage recruitment, employee relations, training, and organizational development.", salary: "₹5–18 LPA", skills: ["Recruitment", "Employee Relations", "HRIS", "Labor Laws"] },
      { name: "Marketing Manager", description: "Plan and execute marketing strategies to grow brand awareness and revenue.", salary: "₹6–25 LPA", skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Campaign Management"] },
      { name: "Operations Manager", description: "Oversee daily business operations ensuring efficiency and quality.", salary: "₹6–20 LPA", skills: ["Supply Chain", "Process Improvement", "Leadership", "Project Management"] },
      { name: "Entrepreneur / Startup Founder", description: "Launch and manage your own business venture from ideation to execution.", salary: "Variable", skills: ["Business Planning", "Fundraising", "Leadership", "Innovation"] },
    ],
  },
  {
    id: "digital-ecommerce",
    title: "Digital Marketing & E-Commerce",
    icon: "Globe",
    description: "Drive online presence, sales, and digital strategy for brands and businesses.",
    subBranches: [
      { name: "Digital Marketing Specialist", description: "Plan and execute online marketing campaigns across channels.", salary: "₹4–15 LPA", skills: ["SEO", "SEM", "Social Media", "Google Ads"] },
      { name: "E-Commerce Manager", description: "Manage online retail platforms, product listings, and sales strategies.", salary: "₹5–18 LPA", skills: ["E-Commerce Platforms", "Inventory Management", "UX", "Analytics"] },
      { name: "Content Strategist", description: "Create and manage content plans that engage audiences and drive conversions.", salary: "₹4–12 LPA", skills: ["Content Writing", "SEO", "Social Media", "Brand Voice"] },
      { name: "Social Media Manager", description: "Build and manage brand presence across social media platforms.", salary: "₹3–12 LPA", skills: ["Social Platforms", "Content Creation", "Analytics", "Community Management"] },
    ],
  },
  {
    id: "law-legal",
    title: "Law & Legal Services",
    icon: "Scale",
    description: "Practice law, provide legal counsel, and ensure justice and compliance.",
    subBranches: [
      { name: "Corporate Lawyer", description: "Handle legal matters for businesses including contracts, compliance, and disputes.", salary: "₹8–40 LPA", skills: ["Corporate Law", "Contract Drafting", "Litigation", "Compliance"] },
      { name: "Tax Lawyer", description: "Specialize in tax disputes, planning, and regulatory compliance.", salary: "₹7–30 LPA", skills: ["Tax Law", "Litigation", "Regulatory Compliance", "Advisory"] },
      { name: "Legal Advisor", description: "Provide legal guidance to organizations on various regulatory matters.", salary: "₹5–20 LPA", skills: ["Legal Research", "Advisory", "Documentation", "Risk Management"] },
    ],
  },
  {
    id: "government-civil",
    title: "Government & Civil Services",
    icon: "Building2",
    description: "Serve the nation through administrative, revenue, and public service roles.",
    subBranches: [
      { name: "IAS / IPS Officer", description: "Top administrative and police service roles through UPSC examination.", salary: "₹8–20 LPA + Benefits", skills: ["General Studies", "Current Affairs", "Administration", "Leadership"] },
      { name: "SSC CGL Officer", description: "Work in central government ministries and departments.", salary: "₹4–10 LPA", skills: ["Quantitative Aptitude", "Reasoning", "English", "General Knowledge"] },
      { name: "State PCS Officer", description: "Administrative roles at the state government level.", salary: "₹5–15 LPA", skills: ["State Affairs", "Administration", "Public Policy", "Management"] },
      { name: "Bank Clerk / PO", description: "Entry-level positions in nationalized and private banks.", salary: "₹3–8 LPA", skills: ["Banking Awareness", "Quantitative Skills", "Reasoning", "English"] },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Science & Analytics",
    icon: "BarChart3",
    description: "Extract insights from data to drive decisions across industries.",
    subBranches: [
      { name: "Data Analyst", description: "Collect, process, and analyze data to uncover business insights.", salary: "₹5–15 LPA", skills: ["Excel", "SQL", "Python", "Data Visualization"] },
      { name: "Business Intelligence Analyst", description: "Build dashboards and reports to help organizations make data-driven decisions.", salary: "₹6–20 LPA", skills: ["Power BI", "Tableau", "SQL", "ETL Processes"] },
      { name: "Financial Data Scientist", description: "Apply machine learning and statistics to financial datasets.", salary: "₹10–35 LPA", skills: ["Python", "Machine Learning", "Statistics", "Financial Modeling"] },
    ],
  },
  {
    id: "stock-market",
    title: "Stock Market & Wealth Management",
    icon: "TrendingUp",
    description: "Trade securities, manage portfolios, and advise clients on wealth building.",
    subBranches: [
      { name: "Stock Broker", description: "Execute buy and sell orders for clients in equity and commodity markets.", salary: "₹4–20 LPA + Commission", skills: ["Market Analysis", "Trading Platforms", "Risk Management", "Client Relations"] },
      { name: "Portfolio Manager", description: "Manage investment portfolios to maximize returns for clients.", salary: "₹8–40 LPA", skills: ["Asset Allocation", "Risk Analysis", "Financial Markets", "Research"] },
      { name: "Mutual Fund Advisor", description: "Guide investors in selecting mutual fund schemes aligned with their goals.", salary: "₹3–12 LPA", skills: ["Fund Analysis", "Financial Planning", "Client Advisory", "Regulations"] },
      { name: "Certified Financial Planner (CFP)", description: "Provide comprehensive financial planning covering investments, insurance, and retirement.", salary: "₹6–25 LPA", skills: ["Financial Planning", "Investment Strategy", "Tax Planning", "Estate Planning"] },
    ],
  },
];
