import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Wrench, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const options = [
  {
    icon: GraduationCap,
    title: "Diploma Courses",
    desc: "Polytechnic diploma in Engineering, Computer, Civil, Mechanical etc.",
    path: "diploma",
  },
  {
    icon: Wrench,
    title: "ITI Courses",
    desc: "Technical skill-based courses like Electrician, Fitter, Welder, Mechanic.",
    path: "iti",
  },
  {
    icon: BookOpen,
    title: "11th–12th (Science/Commerce/Arts)",
    desc: "Continue higher secondary education and choose career stream.",
    path: "stream",
  },
  {
    icon: Briefcase,
    title: "Skill Development Courses",
    desc: "Short-term certification courses in computer, design, digital marketing.",
    path: "skills",
  },
  {
    icon: Briefcase,
    title: "Government Jobs",
    desc: "Government job opportunities available after 10th pass.",
    path: "government-jobs",
  },
];

export default function MainPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/after10th-hero.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative mx-auto px-4 text-center text-white z-10">



          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Career Options After 10th
          </h1>

          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Explore the best career paths available after completing 10th standard.
            Choose wisely based on your interest and future goals.
          </p>

        </div>
      </section>
     
      {/* Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 px-4">
          {options.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <Link to={item.path}>
                <Card className="group h-full rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                  <CardHeader className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors">
                      <item.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            💡 Pro Tip
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Before selecting your career, analyze your interests, strengths,
            and long-term goals. Talk to mentors and explore real-world opportunities.
          </p>
        </div>
      </section>
    </Layout>
  );
}