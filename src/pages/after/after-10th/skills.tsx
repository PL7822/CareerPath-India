import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function SkillCoursesPage() {
  return (
    <Layout>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Back Button */}
          <Link
            to="/after-10th"
            className="text-sm text-primary hover:underline"
          >
            ← Back to After 10th
          </Link>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-bold text-foreground">
            Skill Development Courses After 10th
          </h1>

          <p className="mt-4 text-muted-foreground">
            Skill-based short-term courses help students gain practical
            knowledge quickly and become job-ready without long-term study.
          </p>

          {/* Skill Cards */}
          <div className="mt-10 space-y-8">

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                💻 Computer & IT Skills
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Web Development</li>
                <li>• Graphic Design</li>
                <li>• Tally / Accounting Software</li>
                <li>• Digital Marketing</li>
                <li>• Basic Programming</li>
                <li>• Avg Salary: ₹2 – 5 LPA</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🎨 Creative Skills
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Video Editing</li>
                <li>• Photography</li>
                <li>• UI/UX Design</li>
                <li>• Animation</li>
                <li>• Avg Salary: ₹2 – 6 LPA</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🔧 Technical Skills
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Mobile Repairing</li>
                <li>• AC & Refrigeration Repair</li>
                <li>• Automobile Mechanic</li>
                <li>• CNC Operator</li>
                <li>• Avg Salary: ₹2 – 4 LPA</li>
              </ul>
            </div>

          </div>

          {/* Why Choose Skills */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">
              🎯 Why Choose Skill Courses?
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Short duration (3–12 months)</li>
              <li>✔ Job-ready training</li>
              <li>✔ Low investment</li>
              <li>✔ High demand in market</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
