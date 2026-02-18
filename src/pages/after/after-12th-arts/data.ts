export interface SubBranch {
  name: string;
  description: string;
  salary: string;
  skills: string[];
  prospects: string;
}

export interface artsBranches {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  subBranches: SubBranch[];
}

export const artsBranches: artsBranches[] = [
  {
    id: "teaching",
    title: "Teaching & Education",
    icon: "GraduationCap",
    description: "Shape future generations through education and academic leadership.",
    color: "217 91% 50%",
    subBranches: [
      { name: "School Teacher (PGT/TGT)", description: "Teach subjects like History, Political Science, Geography, or English at secondary/senior secondary levels.", salary: "₹3.5L – ₹8L/year", skills: ["B.Ed", "Subject Expertise", "Communication", "Classroom Management"], prospects: "High demand in government & private schools; stable career with pension benefits." },
      { name: "College Lecturer / Professor", description: "Teach undergraduate and postgraduate students at universities and colleges.", salary: "₹6L – ₹15L/year", skills: ["NET/SET Qualified", "M.A./Ph.D.", "Research Skills", "Public Speaking"], prospects: "Prestigious career with UGC pay scales; opportunities in research and publications." },
      { name: "Special Education Teacher", description: "Work with students who have learning disabilities or special needs.", salary: "₹3L – ₹7L/year", skills: ["B.Ed Special Education", "Patience", "Adaptive Teaching", "Empathy"], prospects: "Growing demand with increased awareness of inclusive education." },
      { name: "Education Counselor", description: "Guide students in career choices, academic planning, and personal development.", salary: "₹3L – ₹6L/year", skills: ["Psychology", "Counseling Certification", "Active Listening", "Assessment"], prospects: "Rising demand in schools and coaching centers." },
    ],
  },
  {
    id: "law",
    title: "Law & Legal Services",
    icon: "Scale",
    description: "Pursue justice and legal expertise in courts, firms, and corporations.",
    color: "199 89% 48%",
    subBranches: [
      { name: "Advocate / Lawyer", description: "Represent clients in civil, criminal, or corporate courts.", salary: "₹3L – ₹20L+/year", skills: ["BA LLB / LLB", "Legal Research", "Argumentation", "Case Analysis"], prospects: "Self-employment or partnership in law firms; high earning potential with experience." },
      { name: "Legal Advisor / Corporate Counsel", description: "Provide legal guidance to businesses on compliance, contracts, and disputes.", salary: "₹5L – ₹18L/year", skills: ["Corporate Law", "Contract Drafting", "Compliance", "Negotiation"], prospects: "In demand across MNCs, startups, and government organizations." },
      { name: "Judiciary Services", description: "Serve as a judge or magistrate through competitive judicial exams.", salary: "₹8L – ₹25L/year", skills: ["LLB/LLM", "Constitutional Law", "Analytical Thinking", "Integrity"], prospects: "One of the most respected positions; job security with government benefits." },
      { name: "Legal Journalist", description: "Report on court proceedings, landmark judgments, and legal reforms.", salary: "₹3L – ₹8L/year", skills: ["Law Knowledge", "Journalism", "Writing", "Research"], prospects: "Niche field with opportunities in media houses and legal publications." },
    ],
  },
  {
    id: "government",
    title: "Government & Civil Services",
    icon: "Building2",
    description: "Serve the nation through administration, policy-making, and public services.",
    color: "215 28% 17%",
    subBranches: [
      { name: "IAS / IPS / IFS Officer", description: "Top-tier civil services managing districts, law enforcement, or foreign affairs.", salary: "₹10L – ₹30L+/year", skills: ["UPSC Preparation", "General Knowledge", "Essay Writing", "Leadership"], prospects: "Most prestigious government career; enormous power and responsibility." },
      { name: "State PCS Officer", description: "Administrative roles at state government level through state-level exams.", salary: "₹6L – ₹15L/year", skills: ["State PCS Exam", "Regional Knowledge", "Administration", "Decision Making"], prospects: "Good job security with benefits; varied postings across the state." },
      { name: "SSC / Banking Exams", description: "Clerical to officer-level roles in central government and public sector banks.", salary: "₹3L – ₹8L/year", skills: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"], prospects: "Large number of vacancies annually; structured promotions." },
      { name: "Railway / Defense Services", description: "Roles in Indian Railways or Armed Forces through respective entrance exams.", salary: "₹4L – ₹12L/year", skills: ["Physical Fitness", "Aptitude", "Discipline", "Teamwork"], prospects: "Stable career with housing, medical, and pension benefits." },
    ],
  },
  {
    id: "media",
    title: "Media, Journalism & Mass Communication",
    icon: "Newspaper",
    description: "Tell stories, shape opinions, and drive conversations across platforms.",
    color: "25 95% 53%",
    subBranches: [
      { name: "Print / Digital Journalist", description: "Report news, write features, and investigate stories for newspapers and online media.", salary: "₹3L – ₹10L/year", skills: ["BA Journalism", "Writing", "Research", "Ethics"], prospects: "Evolving field with digital-first opportunities; freelancing options." },
      { name: "TV News Anchor / Reporter", description: "Present news bulletins or report live from events on television.", salary: "₹4L – ₹15L/year", skills: ["Communication", "Screen Presence", "Quick Thinking", "Bilingual Skills"], prospects: "High visibility career; growth in regional and national channels." },
      { name: "Public Relations (PR) Specialist", description: "Manage brand image and media relations for companies or public figures.", salary: "₹4L – ₹12L/year", skills: ["Communication", "Media Relations", "Crisis Management", "Writing"], prospects: "Growing demand with corporate and political PR agencies." },
      { name: "Content Creator / Social Media Manager", description: "Create engaging content and manage social media presence for brands.", salary: "₹3L – ₹10L/year", skills: ["Creative Writing", "Social Media Tools", "Analytics", "Video Editing"], prospects: "Booming field; freelance and full-time opportunities across industries." },
    ],
  },
  {
    id: "design",
    title: "Design, Arts & Creative Fields",
    icon: "Palette",
    description: "Express creativity through visual arts, design, and performing arts.",
    color: "340 82% 52%",
    subBranches: [
      { name: "Graphic / UI-UX Designer", description: "Design visual content, user interfaces, and digital experiences.", salary: "₹3.5L – ₹12L/year", skills: ["Adobe Suite", "Figma", "Design Thinking", "Typography"], prospects: "High demand in IT, advertising, and startups; freelance potential." },
      { name: "Interior / Fashion Designer", description: "Design spaces or clothing lines combining aesthetics with functionality.", salary: "₹3L – ₹10L/year", skills: ["Design Diploma/Degree", "Creativity", "Color Theory", "AutoCAD/Sketching"], prospects: "Growing luxury and real estate markets driving demand." },
      { name: "Film / Video Production", description: "Direct, produce, or edit films, documentaries, and video content.", salary: "₹3L – ₹15L+/year", skills: ["Film Studies", "Cinematography", "Editing Software", "Storytelling"], prospects: "OTT platforms creating massive demand for content creators." },
      { name: "Fine Arts / Animation", description: "Create paintings, sculptures, or digital animations for various industries.", salary: "₹2.5L – ₹10L/year", skills: ["BFA", "Drawing", "3D Modeling", "Creative Vision"], prospects: "Gaming and entertainment industries fueling animation demand." },
    ],
  },
  {
    id: "social",
    title: "Social Work & Psychology",
    icon: "Heart",
    description: "Make a difference in communities through counseling, welfare, and development.",
    color: "142 76% 36%",
    subBranches: [
      { name: "Clinical Psychologist", description: "Diagnose and treat mental health conditions through therapy and counseling.", salary: "₹4L – ₹12L/year", skills: ["M.A. Psychology", "RCI Registration", "Empathy", "Assessment Tools"], prospects: "Rapidly growing field with increasing mental health awareness." },
      { name: "Social Worker / NGO Professional", description: "Work with marginalized communities on health, education, and development projects.", salary: "₹2.5L – ₹8L/year", skills: ["MSW", "Community Engagement", "Project Management", "Advocacy"], prospects: "Fulfilling career with government and international NGO opportunities." },
      { name: "Human Resources Manager", description: "Manage recruitment, employee relations, and organizational development.", salary: "₹4L – ₹15L/year", skills: ["MBA HR", "People Management", "Labor Laws", "Communication"], prospects: "Essential role in every organization; strong growth trajectory." },
      { name: "Rehabilitation Counselor", description: "Help individuals with disabilities achieve independence and employment.", salary: "₹3L – ₹7L/year", skills: ["Counseling Degree", "Patience", "Adaptive Strategies", "Assessment"], prospects: "Government initiatives increasing demand for rehabilitation services." },
    ],
  },
  {
    id: "business",
    title: "Business, Finance & Management",
    icon: "TrendingUp",
    description: "Drive business growth through strategy, finance, and entrepreneurship.",
    color: "262 83% 58%",
    subBranches: [
      { name: "Chartered Accountant (CA)", description: "Handle auditing, taxation, and financial advisory for businesses.", salary: "₹7L – ₹25L+/year", skills: ["CA Foundation", "Accounting", "Tax Laws", "Auditing"], prospects: "One of the most sought-after professional qualifications in India." },
      { name: "Company Secretary (CS)", description: "Ensure corporate governance, compliance, and legal framework adherence.", salary: "₹5L – ₹15L/year", skills: ["CS Foundation", "Corporate Law", "Compliance", "Governance"], prospects: "Mandatory role in listed companies; strong career stability." },
      { name: "Digital Marketing Specialist", description: "Plan and execute online marketing campaigns across digital channels.", salary: "₹3L – ₹12L/year", skills: ["SEO/SEM", "Google Ads", "Analytics", "Content Strategy"], prospects: "Explosive growth; every business needs digital presence." },
      { name: "Event Manager / Entrepreneur", description: "Plan corporate events, weddings, or build your own business venture.", salary: "₹3L – ₹15L+/year", skills: ["Management", "Networking", "Budget Planning", "Creativity"], prospects: "India's event industry growing at 15%+ annually; unlimited entrepreneurial scope." },
    ],
  },
  {
    id: "travel",
    title: "Travel, Tourism & Hospitality",
    icon: "Plane",
    description: "Explore the world while building a career in tourism and hospitality.",
    color: "174 72% 40%",
    subBranches: [
      { name: "Travel Agent / Tour Operator", description: "Plan and organize travel packages, itineraries, and tour experiences.", salary: "₹2.5L – ₹6L/year", skills: ["Tourism Degree", "Geography", "Communication", "Planning"], prospects: "Post-pandemic tourism revival creating fresh opportunities." },
      { name: "Hotel Manager", description: "Oversee hotel operations including front desk, housekeeping, and guest relations.", salary: "₹4L – ₹12L/year", skills: ["Hotel Management Degree", "Leadership", "Customer Service", "Operations"], prospects: "India's hospitality sector booming with luxury and budget segments." },
      { name: "Airline Cabin Crew / Ground Staff", description: "Ensure passenger safety, comfort, and service on flights or at airports.", salary: "₹4L – ₹8L/year", skills: ["Grooming", "Communication", "First Aid", "Languages"], prospects: "Aviation sector expanding rapidly with new airlines and routes." },
      { name: "Heritage / Cultural Tourism Specialist", description: "Promote and manage cultural heritage sites, museums, and tourism initiatives.", salary: "₹3L – ₹7L/year", skills: ["History/Archaeology", "Cultural Knowledge", "Communication", "Event Planning"], prospects: "Government focus on cultural tourism under heritage conservation programs." },
    ],
  },
];
