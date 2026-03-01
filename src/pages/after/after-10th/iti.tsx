import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function ITIPage() {
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
              ITI Courses After 10th
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              Industrial Training Institute (ITI) courses are skill-based
              programs designed to provide hands-on technical training
              and make students job-ready in a short time.
            </p>
          </div>

          {/* Course Cards */}
          <div className="mt-16 space-y-12">

            {/* Electrician */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🔌 Electrician
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Duration: 2 Years
                  </span>
                </li>
                <li>Skills: Electrical wiring, maintenance</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹1.8 – 3 LPA
                  </span>
                </li>
                <li>Jobs: Electrician, Technician</li>
              </ul>
            </div>

            {/* Fitter */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🔧 Fitter
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Duration: 2 Years
                  </span>
                </li>
                <li>Skills: Machine fitting, assembling</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 3.5 LPA
                  </span>
                </li>
                <li>Jobs: Mechanical Fitter</li>
              </ul>
            </div>

            {/* Welder */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🔥 Welder
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Duration: 1–2 Years
                  </span>
                </li>
                <li>Skills: Welding techniques</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2 – 4 LPA
                  </span>
                </li>
                <li>Jobs: Welder, Fabricator</li>
              </ul>
            </div>

            {/* COPA */}
            <div className="group relative bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🖥 Computer Operator & Programming Assistant (COPA)
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Duration: 1 Year
                  </span>
                </li>
                <li>Skills: Basic programming, office software</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹1.5 – 3 LPA
                  </span>
                </li>
                <li>Jobs: Data Entry, IT Support</li>
              </ul>
            </div>

          </div>

          {/* Why Choose ITI */}
          <div className="mt-20 bg-green-50 border border-green-200 
                rounded-3xl p-10 text-center 
                hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              🎯 Why Choose ITI After 10th?
            </h3>

            <div className="grid  md:grid-cols-2 gap-6 text-slate-600">
              <div>✔ Short duration courses</div>
              <div>✔ Practical training</div>
              <div>✔ Government & private job opportunities</div>
              <div>✔ Affordable education</div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}