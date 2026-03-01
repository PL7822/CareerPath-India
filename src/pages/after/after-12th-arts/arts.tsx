import Layout from "@/components/Layout";
import { useState } from "react";
import { artsBranches } from "./data";
import {
  Scale,
  PenTool,
  Camera,
  BookOpen,
  Globe,
  Users,
  Palette,
  Landmark,
} from "lucide-react";

const iconMap: any = {
  Scale,
  PenTool,
  Camera,
  BookOpen,
  Globe,
  Users,
  Palette,
  Landmark,
};

const ArtsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");

  const filteredBranches = artsBranches.filter((branch) => {
    if (selectedBranch !== "all" && branch.id !== selectedBranch)
      return false;

    return branch.subBranches.some((sub) =>
      sub.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/after12th-arts.webp')" }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Career Options After <span className="text-primary">12th Arts</span>
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Discover Law, Journalism, Government, Psychology, Design &
            Creative career paths with salary insights and required skills.
          </p>
        </div>
      </section>

      {/* ================= SEARCH SECTION ================= */}
      {/* SEARCH + FILTER */}
      <section className="bg-primary/20 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search career..."
              className="border border-primary/80 p-3 rounded-xl 
                   w-full md:w-1/2 
                   focus:ring-2 focus:ring-primary-500 
                   focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> 

            {/* Select Category */}
            <select
              className="border border-primary/80 p-3 rounded-xl 
                   focus:ring-2 focus:ring-primary-500 
                   focus:outline-none"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="all">All Categories</option>
              {artsBranches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.title}
                </option>
              ))}
            </select>

          </div>
        </div>
      </section>


      {/* ================= CAREER SECTIONS ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-16">
          {filteredBranches.map((branch) => {
            const IconComponent = iconMap[branch.icon];

            return (
              <div key={branch.id}>
                {/* Branch Title */}
                <div className="flex items-center gap-4 mb-6">
                  {IconComponent && (
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-gray-800">
                    {branch.title}
                  </h2>
                </div>

                <p className="text-gray-500 mb-8 max-w-3xl">
                  {branch.description}
                </p>

                {/* Career Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  {branch.subBranches.map((sub, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                    >
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {sub.name}
                      </h3>

                      <p className="text-sm text-gray-500 mb-4">
                        {sub.description}
                      </p>

                      <p className="font-semibold text-primary mb-4 text-lg">
                        💰 {sub.salary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {sub.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ArtsPage;