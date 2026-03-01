import Layout from "@/components/Layout";
import { useState } from "react";
import { careerBranches } from "./data";
import {
  Calculator,
  Landmark,
  Briefcase,
  Globe,
  Scale,
  Building2,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: any = {
  Calculator,
  Landmark,
  Briefcase,
  Globe,
  Scale,
  Building2,
  BarChart3,
  TrendingUp,
};

const CommercePage = () => {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");

  const filteredBranches = careerBranches.filter((branch) => {
    if (selectedBranch !== "all" && branch.id !== selectedBranch) return false;

    return branch.subBranches.some((sub) =>
      sub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/after12th-com.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Career Options After 12th Commerce
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Explore Accounting, Banking, Business, Government & Digital careers.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="bg-emerald-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <input
              type="text"
              placeholder="Search career..."
              className="border border-emerald-200 p-3 rounded-xl w-full md:w-1/2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border border-emerald-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="all">All Categories</option>
              {careerBranches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* CAREER CARDS */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {filteredBranches.map((branch) => {
            const IconComponent = iconMap[branch.icon];

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {IconComponent && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-gray-800">
                    {branch.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-8 max-w-3xl">
                  {branch.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {branch.subBranches.map((sub, index) => (
                    <div
                      key={index}
                      className="group border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {sub.name}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4">
                        {sub.description}
                      </p>

                      <p className="font-semibold text-emerald-600 mb-3">
                        💰 Salary: {sub.salary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {sub.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default CommercePage;