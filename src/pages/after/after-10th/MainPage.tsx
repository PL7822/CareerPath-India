import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Wrench, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

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
  path: "government-jobs"
}

];

export default function MainPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Career Options After 10th
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the best career paths available after completing 10th standard.
            Choose wisely based on your interest and future goals.
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 px-4">
          {options.map((item, index) => (
            <Link key={index} to={item.path}>
              <Card className="hover:shadow-lg transition cursor-pointer h-full">
                <CardHeader className="flex items-center gap-3">
                  <item.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">💡 Pro Tip</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Before selecting your career, analyze your interests, strengths,
            and long-term goals. Talk to mentors and explore real-world opportunities.
          </p>
        </div>
      </section>
    </Layout>
  );
}
