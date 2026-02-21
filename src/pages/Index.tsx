import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap, BookOpen, Briefcase, Code, Landmark,
  Calculator, Calendar, Percent, IndianRupee,
  Star, ArrowRight, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";
// import Blog from "./Blog";
import AdPlaceholder from "@/components/AdPlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const careerCategories = [
  {
    icon: Star,
    title: "Single Career Roadmap ",
    desc: " Mumbai Colleges | Complete Roadmaps | Web Dev ₹4-25L | Full Stack ₹9-24L | 4479 Jobs | Govt Exams | Projects | Freelance ₹800/hr | 50+ Companies Hiring",
    to: "/Blog",
    color: "text-primary"
  },
  {
    icon: GraduationCap,
    title: "After 10th",
    desc: "Diploma, ITI, Polytechnic & more career paths",
    to: "/after-10th",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "After 12th Science",
    desc: "Engineering, Medical, BSc & Research fields",
    to: "/after-12th",
    color: "text-primary"
  },

  {
    icon: Briefcase,
    title: "After 12th Commerce",
    desc: "CA, BCom, BBA, Banking & Finance careers",
    to: "/after-12th-commerce",
    color: "text-primary"
  },

  {
    icon: GraduationCap,
    title: "After 12th Arts",
    desc: "Law, Journalism, BA & Creative careers",
    to: "/after-12th-arts",
    color: "text-primary"
  },
  {
    icon: Code,
    title: "IT Career Roadmap",
    desc: "Web Dev, Cyber Security, Data Science paths",
    to: "/it-career-roadmap",
    color: "text-primary"
  },
  {
    icon: Landmark,
    title: "Government Jobs",
    desc: "UPSC, SSC, Banking & Railway preparation",
    to: "/government-jobs",
    color: "text-primary"
  },


];

const tools = [
  { icon: Percent, title: "Percentage Calculator", desc: "Calculate percentage from your marks instantly", to: "/tools/percentage-calculator" },
  { icon: Calendar, title: "Age Calculator", desc: "Find your exact age in years, months & days", to: "/tools/age-calculator" },
  { icon: Calculator, title: "CGPA to Percentage", desc: "Convert CGPA to percentage for any university", to: "/tools/cgpa-to-percentage" },
  { icon: IndianRupee, title: "Salary Calculator", desc: "Calculate monthly & annual salary with tax", to: "/tools/salary-calculator" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Engineering Student, Delhi", text: "CareerPath India helped me choose between engineering branches. The detailed salary info and future scope analysis made my decision so much easier!" },
  { name: "Rahul Verma", role: "CA Aspirant, Mumbai", text: "The commerce career page was incredibly detailed. I found everything about CA, CS, and CMA in one place. Highly recommended for commerce students!" },
  { name: "Anjali Patel", role: "Class 10 Student, Ahmedabad", text: "I was confused about what to do after 10th. This website showed me options I didn't even know existed. The tools section is also very useful!" },
];

const affiliateCourses = [
  { title: "Complete Web Development Bootcamp", provider: "Udemy", price: "₹499", originalPrice: "₹3,999", tag: "Bestseller" },
  { title: "Data Science & Machine Learning", provider: "Coursera", price: "Free Audit", originalPrice: "", tag: "Popular" },
  { title: "Digital Marketing Masterclass", provider: "Skillshare", price: "₹299/mo", originalPrice: "", tag: "Trending" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary/50 to-primary/80 py-20 md:py-28 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.webp')`,
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_91%_70%/0.2),transparent_50%)]" />

        <div className="container relative mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-primary-foreground/95 md:text-5xl lg:text-6xl drop-shadow-lg"
          >
            Confused About Your Career?{" "}
            <span className="block mt-2 text-primary-foreground/95">Get the Right Guidance Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/90 drop-shadow-md"
          >
            Expert career guidance for Indian students — explore career paths after 10th, 12th & graduation with real salary data and preparation tips.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <Button asChild size="lg" variant="secondary" className="text-base font-semibold shadow-xl backdrop-blur-sm bg-white/20 hover:bg-white/30">
              <Link to="after-10th">
                Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Career Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Explore Career Paths</h2>
            <p className="mt-3 text-muted-foreground">Find the right career based on your education level and interests</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerCategories.map((cat, i) => (
              <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to={cat.to}>
                  <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/30">
                    <CardHeader>
                      <cat.icon className={`h-10 w-10 ${cat.color} mb-2`} />
                      <CardTitle className="text-lg">{cat.title}</CardTitle>
                      <CardDescription>{cat.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <AdPlaceholder className="container mx-auto mb-8 px-4" /> */}

      {/* Tools Section */}
      <section className="bg-muted/0 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Free Student Tools</h2>
            <p className="mt-3 text-muted-foreground">Handy calculators and converters for everyday student needs</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div key={tool.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to={tool.to}>
                  <Card className="group h-full cursor-pointer text-center transition-all hover:shadow-lg hover:border-primary/30">
                    <CardHeader className="items-center">
                      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <tool.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-base">{tool.title}</CardTitle>
                      <CardDescription className="text-xs">{tool.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
