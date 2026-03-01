import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function DiplomaPage() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">

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
              Diploma / Polytechnic Courses After 10th
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              Technical diploma programs designed to provide practical skills
              and industry-ready knowledge right after 10th grade.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 space-y-12 max-w-4xl mx-auto">

            {/* Card 1 */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 
                            hover:-translate-y-3 hover:shadow-2xl">

              {/* Gradient Hover Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                              from-blue-500/0 via-blue-500/10 to-blue-500/0 
                              opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h2 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
                💻 Diploma in Computer Engineering
              </h2>

              <ul className="space-y-3 text-slate-600 relative z-10">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    3 Years
                  </span>
                </li>
                <li>Subjects: Programming, Networking, DBMS</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2.5 – 4 LPA
                  </span>
                </li>
                <li>Future Scope: Software Developer, IT Support</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 
                            hover:-translate-y-3 hover:shadow-2xl">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                              from-blue-500/0 via-blue-500/10 to-blue-500/0 
                              opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h2 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
                🏗 Diploma in Civil Engineering
              </h2>

              <ul className="space-y-3 text-slate-600 relative z-10">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    3 Years
                  </span>
                </li>
                <li>Subjects: Construction, Surveying</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 3.5 LPA
                  </span>
                </li>
                <li>Future Scope: Site Engineer</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 
                            hover:-translate-y-3 hover:shadow-2xl md:col-span-2">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                              from-blue-500/0 via-blue-500/10 to-blue-500/0 
                              opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h2 className="text-2xl font-bold text-slate-800 mb-6 relative z-10">
                ⚙ Diploma in Mechanical Engineering
              </h2>

              <ul className="space-y-3 text-slate-600 relative z-10">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    3 Years
                  </span>
                </li>
                <li>Subjects: Machines, Manufacturing</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 4 LPA
                  </span>
                </li>
                <li>Future Scope: Production Engineer</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}