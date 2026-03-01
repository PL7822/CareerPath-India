import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function SkillCoursesPage() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Back Button */}
          <Link
            to="/after-10th"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
          >
            ← Back to After 10th
          </Link>

          {/* Title */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              Skill Development Courses After 10th
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              Short-term skill-based courses help students gain practical
              knowledge quickly and become job-ready without long-term study.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="mt-16 space-y-12">

            {/* Computer & IT */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                💻 Computer & IT Skills
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Web Development</li>
                <li>Graphic Design</li>
                <li>Tally / Accounting Software</li>
                <li>Digital Marketing</li>
                <li>Basic Programming</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 5 LPA
                  </span>
                </li>
              </ul>
            </div>

            {/* Creative Skills */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🎨 Creative Skills
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Video Editing</li>
                <li>Photography</li>
                <li>UI/UX Design</li>
                <li>Animation</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 6 LPA
                  </span>
                </li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🔧 Technical Skills
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Mobile Repairing</li>
                <li>AC & Refrigeration Repair</li>
                <li>Automobile Mechanic</li>
                <li>CNC Operator</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 4 LPA
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Why Choose Skills */}
          <div className="mt-20 bg-blue-50 border border-blue-200 rounded-3xl p-10 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              🎯 Why Choose Skill Courses?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-blue-900">
              <div>✔ Short duration (3–12 months)</div>
              <div>✔ Job-ready training</div>
              <div>✔ Low investment</div>
              <div>✔ High demand in market</div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}