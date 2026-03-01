import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Stethoscope, FlaskConical, Landmark, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const options = [
  { icon: Cpu, title: "Engineering", link: "engineering" },
  { icon: Stethoscope, title: "Medical", link: "medical" },
  { icon: FlaskConical, title: "BSc & Pure Science", link: "bsc" },
  { icon: Landmark, title: "Government Jobs", link: "government" },
];

export default function MainPage() {
  return (
    <Layout>

      {/* HERO SECTION WITH BG IMAGE */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/after12th-Science.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative mx-auto px-4 h-full flex items-center">
          <div className="container relative mx-auto px-4 text-center text-white z-10">



            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Career Options After 12th-Science
            </h1>

            <p className="max-w-2xl mx-auto text-white/90 text-lg">
              Explore the best career paths available after completing 12th Science standard.
              Choose wisely based on your interest and future goals.
            </p>

          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="absolute top-8 left-4 md:left-8 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-white text-sm transition backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          {/* Empty center (no title as requested) */}
        </div>
      </section>

      {/* OPTIONS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700"
          >
            Explore Science Career Paths
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">

            {options.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={item.link}>
                  <Card className="group h-full rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <CardHeader className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors">
                        <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Click to explore detailed information
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </Layout>
  );
}