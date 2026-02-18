export interface SubBranch {
  name: string;
  description: string;
  salary: string;
  skills: string[];
  jobProspects: string;
}

export interface MedicalBranch {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  subBranches: SubBranch[];
}

export const medicalBranches: MedicalBranch[] = [
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    icon: "🫁",
    description: "Diagnosis and treatment of diseases in adults, covering a broad spectrum of conditions affecting internal organs.",
    color: "212 72% 44%",
    subBranches: [
      { name: "Cardiology", description: "Diagnosis and treatment of heart diseases and cardiovascular conditions.", salary: "₹28L–₹48L", skills: ["ECG Interpretation", "Cardiac Catheterization", "Echocardiography"], jobProspects: "Excellent — High demand due to cardiovascular disease prevalence." },
      { name: "Gastroenterology", description: "Disorders of the digestive system including stomach, intestines, and liver.", salary: "₹28L–₹40L", skills: ["Endoscopy", "Colonoscopy", "Hepatology"], jobProspects: "Very Good — Growing need for GI specialists." },
      { name: "Pulmonology", description: "Respiratory system diseases including lungs and airways.", salary: "₹24L–₹36L", skills: ["Bronchoscopy", "Ventilator Management", "Pulmonary Function Testing"], jobProspects: "Strong — Increased demand post-pandemic." },
      { name: "Nephrology", description: "Kidney diseases and renal replacement therapy.", salary: "₹24L–₹32L", skills: ["Dialysis Management", "Kidney Biopsy", "Electrolyte Management"], jobProspects: "Good — Chronic kidney disease is rising globally." },
      { name: "Endocrinology", description: "Hormonal disorders including diabetes, thyroid, and metabolic conditions.", salary: "₹20L–₹30L", skills: ["Diabetes Management", "Thyroid Evaluation", "Hormone Therapy"], jobProspects: "Good — Diabetes epidemic drives demand." },
      { name: "Rheumatology", description: "Autoimmune and musculoskeletal diseases like arthritis and lupus.", salary: "₹20L–₹32L", skills: ["Joint Aspiration", "Immunology", "Musculoskeletal Imaging"], jobProspects: "Good — Shortage of rheumatologists in many areas." },
    ],
  },
  {
    id: "surgery",
    title: "Surgery",
    icon: "✂",
    description: "Operative treatment of diseases, injuries, and deformities through manual and instrumental techniques.",
    color: "199 89% 38%",
    subBranches: [
      { name: "General Surgery", description: "Broad surgical discipline covering abdominal organs, skin, breast, and soft tissues.", salary: "₹24L–₹40L", skills: ["Laparoscopy", "Trauma Surgery", "Wound Management"], jobProspects: "Excellent — Always in demand across all healthcare settings." },
      { name: "Cardiothoracic Surgery", description: "Surgical treatment of heart, lungs, and chest conditions.", salary: "₹32L–₹56L", skills: ["Bypass Surgery", "Valve Repair", "Minimally Invasive Techniques"], jobProspects: "Very Good — Specialized and highly compensated." },
      { name: "Neurosurgery", description: "Surgery of the brain, spinal cord, and peripheral nerves.", salary: "₹40L–₹64L", skills: ["Craniotomy", "Spinal Fusion", "Stereotactic Surgery"], jobProspects: "Excellent — Among highest-paid medical specialties." },
      { name: "Orthopedic Surgery", description: "Surgical treatment of musculoskeletal system disorders.", salary: "₹32L–₹52L", skills: ["Joint Replacement", "Arthroscopy", "Fracture Fixation"], jobProspects: "Excellent — Aging population drives demand." },
      { name: "Plastic Surgery", description: "Reconstructive and cosmetic surgical procedures.", salary: "₹28L–₹48L", skills: ["Microsurgery", "Reconstructive Techniques", "Aesthetic Surgery"], jobProspects: "Very Good — Growing cosmetic and reconstructive market." },
    ],
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    icon: "🍼",
    description: "Medical care of infants, children, and adolescents from birth through age 18.",
    color: "152 60% 42%",
    subBranches: [
      { name: "Neonatology", description: "Care of newborn infants, especially premature and critically ill neonates.", salary: "₹20L–₹32L", skills: ["NICU Management", "Neonatal Resuscitation", "Ventilation"], jobProspects: "Very Good — Essential in every hospital with maternity services." },
      { name: "Pediatric Cardiology", description: "Heart conditions in children, including congenital heart defects.", salary: "₹24L–₹36L", skills: ["Fetal Echocardiography", "Congenital Heart Disease", "Catheterization"], jobProspects: "Good — Specialized and rewarding field." },
      { name: "Pediatric Oncology", description: "Cancer diagnosis and treatment in children.", salary: "₹20L–₹32L", skills: ["Chemotherapy Protocols", "Bone Marrow Transplant", "Supportive Care"], jobProspects: "Good — Growing research and treatment advances." },
      { name: "Developmental Pediatrics", description: "Assessment and treatment of developmental delays and behavioral disorders.", salary: "₹16L–₹26L", skills: ["Behavioral Assessment", "Autism Spectrum Evaluation", "Early Intervention"], jobProspects: "Strong — Increasing awareness of developmental conditions." },
    ],
  },
  {
    id: "diagnostics",
    title: "Diagnostic Medicine",
    icon: "🩺",
    description: "Laboratory and imaging-based specialties that identify and characterize diseases.",
    color: "38 92% 50%",
    subBranches: [
      { name: "Radiology", description: "Medical imaging using X-rays, CT, MRI, and ultrasound for diagnosis.", salary: "₹28L–₹44L", skills: ["Image Interpretation", "Interventional Procedures", "AI-Assisted Diagnostics"], jobProspects: "Excellent — Technology advancement creates new opportunities." },
      { name: "Pathology", description: "Laboratory analysis of body tissues and fluids to diagnose diseases.", salary: "₹20L–₹32L", skills: ["Histopathology", "Cytology", "Molecular Diagnostics"], jobProspects: "Good — Essential for cancer diagnosis and treatment." },
      { name: "Nuclear Medicine", description: "Radioactive substances for imaging and treatment of diseases.", salary: "₹24L–₹36L", skills: ["PET/CT Interpretation", "Radiopharmaceuticals", "Thyroid Therapy"], jobProspects: "Good — Expanding role in oncology and cardiology." },
      { name: "Clinical Laboratory Medicine", description: "Management and interpretation of clinical lab tests.", salary: "₹16L–₹28L", skills: ["Lab Management", "Quality Assurance", "Test Interpretation"], jobProspects: "Stable — Foundational role in healthcare systems." },
    ],
  },
  {
    id: "psychiatry",
    title: "Psychiatry & Mental Health",
    icon: "🧠",
    description: "Diagnosis, prevention, and treatment of mental, emotional, and behavioral disorders.",
    color: "280 65% 50%",
    subBranches: [
      { name: "Clinical Psychiatry", description: "General psychiatric care including mood, anxiety, and psychotic disorders.", salary: "₹20L–₹32L", skills: ["Psychopharmacology", "CBT", "Risk Assessment"], jobProspects: "Excellent — Massive shortage of psychiatrists globally." },
      { name: "Child & Adolescent Psychiatry", description: "Mental health care for children and teenagers.", salary: "₹20L–₹30L", skills: ["Play Therapy", "Family Counseling", "ADHD Management"], jobProspects: "Excellent — Critical shortage in this subspecialty." },
      { name: "Addiction Medicine", description: "Treatment of substance use disorders and behavioral addictions.", salary: "₹18L–₹28L", skills: ["Detox Protocols", "MAT", "Motivational Interviewing"], jobProspects: "Very Good — Opioid crisis drives urgent demand." },
      { name: "Forensic Psychiatry", description: "Intersection of psychiatry and law, including criminal evaluations.", salary: "₹20L–₹32L", skills: ["Legal Competency Evaluation", "Risk Assessment", "Expert Testimony"], jobProspects: "Good — Niche but growing field." },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Medicine",
    icon: "🚨",
    description: "Immediate care for acute illnesses, injuries, and life-threatening conditions.",
    color: "0 72% 50%",
    subBranches: [
      { name: "Emergency Medicine", description: "Frontline acute care for all types of medical emergencies.", salary: "₹20L–₹32L", skills: ["Trauma Management", "Advanced Life Support", "Rapid Triage"], jobProspects: "Excellent — 24/7 demand in every hospital." },
      { name: "Critical Care Medicine", description: "Intensive care for critically ill patients in ICUs.", salary: "₹24L–₹36L", skills: ["Ventilator Management", "Hemodynamic Monitoring", "Multi-Organ Support"], jobProspects: "Very Good — ICU beds expanding globally." },
      { name: "Trauma Surgery", description: "Surgical management of traumatic injuries.", salary: "₹28L–₹44L", skills: ["Damage Control Surgery", "Resuscitation", "Fracture Management"], jobProspects: "Strong — Essential in trauma centers." },
      { name: "Disaster Medicine", description: "Medical response to natural disasters, mass casualties, and pandemics.", salary: "₹16L–₹28L", skills: ["Mass Casualty Triage", "Field Medicine", "Crisis Management"], jobProspects: "Growing — Climate change and global health threats increase need." },
    ],
  },
  {
    id: "dermatology",
    title: "Dermatology & Skin Medicine",
    icon: "🦶🏽",
    description: "Diagnosis and treatment of skin, hair, and nail disorders, including cosmetic procedures.",
    color: "340 65% 55%",
    subBranches: [
      { name: "Medical Dermatology", description: "Treatment of skin diseases like eczema, psoriasis, and infections.", salary: "₹24L–₹40L", skills: ["Skin Biopsy", "Patch Testing", "Phototherapy"], jobProspects: "Excellent — One of the most competitive specialties." },
      { name: "Dermatologic Surgery", description: "Surgical procedures for skin cancers and cosmetic conditions.", salary: "₹28L–₹48L", skills: ["Mohs Surgery", "Excisional Surgery", "Laser Therapy"], jobProspects: "Very Good — Skin cancer rates rising." },
      { name: "Cosmetic Dermatology", description: "Aesthetic procedures including injectables, lasers, and skin rejuvenation.", salary: "₹24L–₹56L", skills: ["Botox/Fillers", "Laser Resurfacing", "Chemical Peels"], jobProspects: "Excellent — Booming aesthetics industry." },
      { name: "Pediatric Dermatology", description: "Skin conditions specific to infants, children, and adolescents.", salary: "₹20L–₹32L", skills: ["Birthmark Management", "Atopic Dermatitis", "Genetic Skin Disorders"], jobProspects: "Good — Subspecialty with limited providers." },
    ],
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology & ENT",
    icon: "👁️",
    description: "Specialized care for eyes, ears, nose, and throat conditions including surgical treatments.",
    color: "175 60% 40%",
    subBranches: [
      { name: "Ophthalmology", description: "Medical and surgical care of eye diseases and vision disorders.", salary: "₹24L–₹40L", skills: ["Cataract Surgery", "Retinal Imaging", "LASIK"], jobProspects: "Excellent — Aging population increases eye disease prevalence." },
      { name: "Otolaryngology (ENT)", description: "Disorders of ear, nose, throat, head, and neck.", salary: "₹24L–₹36L", skills: ["Sinus Surgery", "Tonsillectomy", "Hearing Assessment"], jobProspects: "Very Good — Broad scope with surgical and medical roles." },
      { name: "Audiology", description: "Assessment and management of hearing and balance disorders.", salary: "₹6.4L–₹9.6L", skills: ["Audiometry", "Hearing Aid Fitting", "Vestibular Testing"], jobProspects: "Good — Growing awareness of hearing health." },
      { name: "Retinal Medicine", description: "Specialized treatment of retinal diseases including macular degeneration.", salary: "₹28L–₹44L", skills: ["Retinal Injections", "Vitrectomy", "OCT Imaging"], jobProspects: "Excellent — Increasing diabetic and age-related retinal disease." },
    ],
  },
];
