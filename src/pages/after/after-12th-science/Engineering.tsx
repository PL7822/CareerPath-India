import { useState } from "react";
import Layout from "@/components/Layout";
import { engineeringBranches } from "./engineeringData";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function Engineering() {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [openBranch, setOpenBranch] = useState<string | null>(null);

  const filteredBranches = engineeringBranches.filter((branch) => {
    const matchesBranch =
      selectedBranch === "all" || branch.id === selectedBranch;

    const matchesSearch =
      branch.name.toLowerCase().includes(search.toLowerCase()) ||
      branch.types.some((type) =>
        type.name.toLowerCase().includes(search.toLowerCase())
      );

    return matchesBranch && matchesSearch;
  });

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">

        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Engineering Career Guide
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <Input
            placeholder="Search engineering type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-lg p-2"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="all">All Branches</option>
            {engineeringBranches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>

        {/* Branch Cards */}
        <div className="space-y-6">
          {filteredBranches.map((branch) => (
            <Card
              key={branch.id}
              className="cursor-pointer transition hover:shadow-lg"
              onClick={() =>
                setOpenBranch(openBranch === branch.id ? null : branch.id)
              }
            >
              <CardContent className="p-6">

                {/* Branch Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {branch.icon} {branch.name}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {branch.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`transition ${
                      openBranch === branch.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expand Section */}
                {openBranch === branch.id && (
                  <div className="mt-6 space-y-4">
                    {branch.types.map((type, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 bg-muted/40"
                      >
                        <h3 className="font-semibold text-primary">
                          {type.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {type.description}
                        </p>
                        <p className="text-sm font-medium">
                          💰 Salary: {type.salary}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {type.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </Layout>
  );
}
