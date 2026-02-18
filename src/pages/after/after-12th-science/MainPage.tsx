import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Stethoscope, FlaskConical, Landmark } from "lucide-react";

const options = [
  {
    icon: Cpu,
    title: "Engineering",
    link: "engineering",
  },
  {
    icon: Stethoscope,
    title: "Medical",
    link: "medical",
  },
  {
    icon: FlaskConical,
    title: "BSc & Pure Science",
    link: "bsc",
  },
  {
    icon: Landmark,
    title: "Government Jobs",
    link: "government",
  },
];

export default function MainPage() {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Career Options After 12th Science
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {options.map((item, index) => (
            <Link key={index} to={item.link}>
              <Card className="hover:shadow-xl transition cursor-pointer h-full">
                <CardHeader className="flex items-center gap-3">
                  <item.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Click to explore detailed information</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
