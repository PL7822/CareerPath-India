import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Code,
  Landmark,
  Calculator,
  Calendar,
  Percent,
  IndianRupee,
  Star,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Layout from "@/components/Layout";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

/* ---------------- DATA ---------------- */

const careerCategories = [
  {
    icon: Star,
    title: "Single Career Roadmap",
    desc: "Complete roadmap with salary data & job scope",
    to: "/Blog",
  },
  {
    icon: GraduationCap,
    title: "After 10th",
    desc: "Diploma, ITI, Polytechnic & more",
    to: "/after-10th",
  },
  {
    icon: BookOpen,
    title: "After 12th Science",
    desc: "Engineering, Medical, BSc & Research",
    to: "/after-12th",
  },
  {
    icon: Briefcase,
    title: "After 12th Commerce",
    desc: "CA, BCom, BBA, Finance careers",
    to: "/after-12th-commerce",
  },
  {
    icon: GraduationCap,
    title: "After 12th Arts",
    desc: "Law, Journalism & Creative fields",
    to: "/after-12th-arts",
  },
  {
    icon: Code,
    title: "IT Career Roadmap",
    desc: "Web Dev, Cyber Security, Data Science",
    to: "/it-career-roadmap",
  },
  {
    icon: Landmark,
    title: "Government Jobs",
    desc: "UPSC, SSC, Banking, Railway",
    to: "/government-jobs",
  },
];

const tools = [
  {
    icon: Percent,
    title: "Percentage Calculator",
    desc: "Calculate marks instantly",
    to: "/tools/percentage-calculator",
  },
  {
    icon: Calendar,
    title: "Age Calculator",
    desc: "Find your exact age",
    to: "/tools/age-calculator",
  },
  {
    icon: Calculator,
    title: "CGPA Converter",
    desc: "Convert CGPA to percentage",
    to: "/tools/cgpa-to-percentage",
  },
  {
    icon: IndianRupee,
    title: "Salary Calculator",
    desc: "Annual salary with tax",
    to: "/tools/salary-calculator",
  },
];

/* ---------------- COMPONENT ---------------- */

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION (Tech BG SAME) */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg.webp')` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        <div className="container relative mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            Confused About Your Career?
            <span className="block mt-3">
              Get the Right Guidance Here.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/90"
          >
            Expert career guidance for Indian students with real salary
            insights and roadmap clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-semibold shadow-2xl bg-white text-black hover:bg-white/90"
            >
              <Link to="/after-10th">
                Explore Careers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CAREER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Explore Career Paths
            </h2>
            <p className="text-gray-500 mt-3">
              Find the right career based on your education level
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careerCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={cat.to}>
                  <Card className="h-full rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300">
                    <CardHeader>
                      <cat.icon className="h-10 w-10 text-indigo-600 mb-3" />
                      <CardTitle className="text-lg font-semibold">
                        {cat.title}
                      </CardTitle>
                      <CardDescription>
                        {cat.desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-indigo-600 font-medium flex items-center">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Free Student Tools
            </h2>
            <p className="text-gray-500 mt-3">
              Handy calculators & converters for students
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={tool.to}>
                  <Card className="group text-center rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader className="items-center">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors">
                        <tool.icon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-base font-semibold">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {tool.desc}
                      </CardDescription>
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