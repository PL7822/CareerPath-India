import { useState } from "react";
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

    const filteredBranches = careerBranches.filter((branch) =>
        branch.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-8">
                    IT Career Roadmap
                </h1>

                {/* Search */}
                <div className="mb-10">
                    <input
                        type="text"
                        placeholder="Search career domain..."
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Branch Cards */}
                <div className="space-y-10">
                    {filteredBranches.map((branch) => {
                        const IconComponent = iconMap[branch.icon];

                        return (
                            <div
                                key={branch.id}
                                className="bg-white rounded-xl shadow-md p-6"
                            >
                                {/* Branch Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    {IconComponent && (
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    )}
                                    <div>
                                        <h2 className="text-2xl font-semibold">
                                            {branch.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm">
                                            {branch.description}
                                        </p>
                                    </div>
                                </div>

                                {/* SubBranches */}
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    {branch.subBranches.map((sub, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-lg p-4 hover:shadow-md transition"
                                        >
                                            <h3 className="text-lg font-semibold mb-2 text-black">
                                                {sub.title}
                                            </h3>

                                            <p className="text-sm text-gray-600 mb-2">
                                                {sub.description}
                                            </p>

                                            <p className="text-sm font-medium text-green-600 mb-2">
                                                Salary: {sub.salary}
                                            </p>

                                            <p className="text-sm text-gray-700 mb-2">
                                                <strong>Skills:</strong>{" "}
                                                {sub.skills.join(", ")}
                                            </p>

                                            <p className="text-sm text-gray-500">
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
        </div>
    );
};

export default Roadmap;
