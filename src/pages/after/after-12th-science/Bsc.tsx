import { useState } from "react";
import Layout from "@/components/Layout";
import { bscBranches } from "./bscData";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Bsc = () => {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [openCard, setOpenCard] = useState<string | null>(null);

  const filteredBranches = bscBranches.filter((branch) => {
    const matchesBranch =
      selectedBranch === "all" || branch.id === selectedBranch;

    const matchesSearch =
      branch.title.toLowerCase().includes(search.toLowerCase()) ||
      branch.subTypes.some((sub) =>
        sub.name.toLowerCase().includes(search.toLowerCase())
      );

    return matchesBranch && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">

        {/* HERO */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            BSc Career Explorer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore BSc specializations, career opportunities, salary scope and required skills.
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search specialization (Data Science, Physics...)"
              className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white/60 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-primary outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="rounded-xl border px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="all">All Categories</option>
            {bscBranches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.title}
              </option>
            ))}
          </select>
        </div>

        {/* CATEGORY CARDS */}
        <div className="space-y-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl border bg-gradient-to-br from-white to-primary/5 shadow-md overflow-hidden transition hover:shadow-xl"
            >
              {/* HEADER */}
              <div
                className="cursor-pointer p-6 flex justify-between items-center"
                onClick={() =>
                  setOpenCard(openCard === branch.id ? null : branch.id)
                }
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    {branch.icon} {branch.title}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {branch.description}
                  </p>
                </div>

                <ChevronDown
                  className={`h-6 w-6 text-primary transition-transform ${
                    openCard === branch.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* EXPAND */}
              <AnimatePresence>
                {openCard === branch.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-8 grid md:grid-cols-2 gap-6"
                  >
                    {branch.subTypes.map((sub, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-lg transition"
                      >
                        <h3 className="text-lg font-semibold text-primary">
                          {sub.name}
                        </h3>

                        <p className="text-sm text-muted-foreground mt-2">
                          {sub.description}
                        </p>

                        <div className="mt-3">
                          <p className="font-medium text-sm text-primary">
                            Career Options:
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {sub.careers.map((career, i) => (
                              <span
                                key={i}
                                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                              >
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {sub.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 font-semibold text-green-600">
                          {sub.salaryRange} (International Avg)
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No matching specialization found.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Bsc;
