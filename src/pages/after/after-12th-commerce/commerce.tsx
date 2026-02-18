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
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Career Options After 12th Commerce
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore Accounting, Banking, Business, Government & Digital careers.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <input
            type="text"
            placeholder="Search career..."
            className="border p-3 rounded-lg w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg"
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

      {/* Career Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="space-y-12">
          {filteredBranches.map((branch) => {
            const IconComponent = iconMap[branch.icon];

            return (
              <div key={branch.id}>
                <div className="flex items-center gap-3 mb-4">
                  {IconComponent && (
                    <IconComponent className="h-8 w-8 text-primary" />
                  )}
                  <h2 className="text-2xl font-bold text-black">
                    {branch.title}
                  </h2>
                </div>

                <p className="text-muted-foreground mb-6">
                  {branch.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {branch.subBranches.map((sub, index) => (
                    <div
                      key={index}
                      className="border rounded-xl p-6 hover:shadow-lg transition"
                    >
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {sub.description}
                      </p>

                      <p className="font-semibold text-primary mb-2">
                        Salary: {sub.salary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {sub.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
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

export default CommercePage;
