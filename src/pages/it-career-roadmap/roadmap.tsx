import { useState } from "react";
import Layout from "@/components/Layout";
import { careerBranches } from "./data";
import {
    Code2,
    BarChart3,
    Shield,
    Cloud,
    Brain,
    Network,
    Globe,
    Briefcase,
    Search,
} from "lucide-react";

const iconMap: Record<string, any> = {
    Code2,
    BarChart3,
    Shield,
    Cloud,
    Brain,
    Network,
    Globe,
    Briefcase,
};

const Roadmap = () => {
    const [search, setSearch] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("all");

    const filteredBranches = careerBranches.filter((branch) => {
        const matchesSearch = branch.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
            selectedBranch === "all" || branch.id === selectedBranch;

        return matchesSearch && matchesFilter;
    });

    return (
        <Layout>
            <div className="bg-slate-50">

                {/* ================= HERO ================= */}
                <section
                    className="relative h-[40vh] flex items-center justify-center text-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/it-hero.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-900/50"></div>

                    <div className="relative z-10 px-4 text-white">
                        <h1 className="text-5xl font-extrabold mb-6">
                            IT Career Roadmap
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg">
                            Explore domains, required skills, salary insights &
                            future opportunities in the tech industry.
                        </p>
                    </div>
                </section>

                {/* ================= SEARCH + FILTER ================= */}
                <section className="bg-white py-12 border-b border-slate-200">
                    <div className="max-w-6xl mx-auto px-4">

                        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">

                            {/* Search */}
                            <div className="relative w-full md:w-1/2">
                                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search career domain..."
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 
                             focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {/* Filter */}
                            <select
                                className="w-full md:w-1/3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 
                           focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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

                {/* ================= CONTENT ================= */}
                <div className="max-w-6xl mx-auto px-4 py-20 space-y-16">

                    {filteredBranches.map((branch) => {
                        const IconComponent = iconMap[branch.icon];

                        return (
                            <div
                                key={branch.id}
                                className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition"
                            >
                                {/* Branch Header */}
                                <div className="flex items-center gap-5 mb-8">
                                    {IconComponent && (
                                        <div className="bg-blue-100 p-4 rounded-2xl">
                                            <IconComponent className="w-8 h-8 text-blue-600" />
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800">
                                            {branch.title}
                                        </h2>
                                        <p className="text-slate-500 mt-1">
                                            {branch.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Sub Cards */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {branch.subBranches.map((sub, index) => (
                                        <div
                                            key={index}
                                            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 
                                 hover:shadow-md hover:-translate-y-1 
                                 transition-all duration-300"
                                        >
                                            <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                                {sub.title}
                                            </h3>

                                            <p className="text-sm text-slate-600 mb-3">
                                                {sub.description}
                                            </p>

                                            <p className="text-sm font-semibold text-green-600 mb-2">
                                                💰 {sub.salary}
                                            </p>

                                            <p className="text-sm text-slate-700 mb-2">
                                                <span className="font-semibold">Skills:</span>{" "}
                                                {sub.skills.join(", ")}
                                            </p>

                                            <p className="text-sm text-slate-500">
                                                {sub.prospects}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </Layout>
    );
};

export default Roadmap;