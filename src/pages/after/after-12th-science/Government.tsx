import Layout from "@/components/Layout";
import { useState } from "react";
import { governmentJobs } from "./governmentData"; // <-- tuzha data file path adjust kar
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

const GovernmentScience = () => {
    const [search, setSearch] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("all");
    const [openJob, setOpenJob] = useState<string | null>(null);

    const filteredBranches = governmentJobs
        .filter(branch =>
            selectedBranch === "all" ? true : branch.id === selectedBranch
        )
        .map(branch => ({
            ...branch,
            subJobs: branch.subJobs.filter(job =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.exam.toLowerCase().includes(search.toLowerCase()) ||
                job.skills.join(" ").toLowerCase().includes(search.toLowerCase())
            )
        }))
        .filter(branch => branch.subJobs.length > 0);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        Government Jobs for Science Students
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore research, engineering, defence, medical, IT & environmental
                        government career opportunities after Science stream.
                    </p>
                </div>
            </section>

            {/* Search + Filter */}
            <section className="py-10">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-4">
                    <Input
                        placeholder="Search by job, exam, skill..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        className="border rounded-md px-3 py-2 bg-background"
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {governmentJobs.map(branch => (
                            <option key={branch.id} value={branch.id}>
                                {branch.title}
                            </option>
                        ))}
                    </select>
                </div>
            </section>

            {/* Job Sections */}
            <section className="pb-20">
                <div className="container mx-auto px-4 space-y-12">
                    {filteredBranches.map(branch => (
                        <div key={branch.id}>
                            {/* Branch Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-black">
                                    {branch.title}
                                </h2>
                                <p className="text-muted-foreground">
                                    {branch.description}
                                </p>
                                <p className="text-sm text-primary mt-1">
                                    Openings: {branch.openings}
                                </p>
                            </div>

                            {/* Sub Job Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {branch.subJobs.map((job, index) => {
                                    const jobId = branch.id + index;

                                    return (
                                        <Card
                                            key={jobId}
                                            className="cursor-pointer transition hover:shadow-lg"
                                            onClick={() =>
                                                setOpenJob(openJob === jobId ? null : jobId)
                                            }
                                        >
                                            <CardHeader className="flex justify-between items-center">
                                                <CardTitle className="text-black">
                                                    {job.title}
                                                </CardTitle>
                                                <ChevronDown
                                                    className={`transition ${openJob === jobId ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </CardHeader>

                                            {openJob === jobId && (
                                                <CardContent className="space-y-3">
                                                    <p className="text-muted-foreground">
                                                        {job.description}
                                                    </p>

                                                    <p>
                                                        <span className="font-semibold">Salary:</span>{" "}
                                                        {job.salary}
                                                    </p>

                                                    <p>
                                                        <span className="font-semibold">Exam:</span>{" "}
                                                        {job.exam}
                                                    </p>

                                                    <div>
                                                        <span className="font-semibold">Skills:</span>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {job.skills.map(skill => (
                                                                <span
                                                                    key={skill}
                                                                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            )}
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default GovernmentScience;
