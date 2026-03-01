import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function GovernmentJobs10thPage() {
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
              Government Jobs After 10th
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              After passing 10th standard, students can apply for several
              government jobs in central and state departments.
            </p>
          </div>

          {/* Job Cards */}
          <div className="mt-16 space-y-12">

            {/* Railway */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🚆 Railway Group D
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  Qualification:
                  <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    10th Pass
                  </span>
                </li>
                <li>
                  Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹18,000 – ₹25,000 / month
                  </span>
                </li>
                <li>Jobs: Track Maintainer, Helper, Assistant</li>
                <li>Recruitment Body: RRB</li>
              </ul>
            </div>

            {/* SSC MTS */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🏢 SSC MTS (Multi Tasking Staff)
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  Qualification:
                  <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    10th Pass
                  </span>
                </li>
                <li>
                  Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹18,000 – ₹22,000 / month
                  </span>
                </li>
                <li>Jobs: Office Staff, Peon, Clerk Support</li>
                <li>Recruitment Body: SSC</li>
              </ul>
            </div>

            {/* Police */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                👮 Police Constable
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  Qualification:
                  <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    10th / 12th (State Based)
                  </span>
                </li>
                <li>
                  Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹20,000 – ₹30,000 / month
                  </span>
                </li>
                <li>Physical Test Required</li>
                <li>State Level Recruitment</li>
              </ul>
            </div>

            {/* Army */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🪖 Indian Army (Soldier GD)
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>
                  Qualification:
                  <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    10th Pass
                  </span>
                </li>
                <li>
                  Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹21,000 – ₹35,000 / month
                  </span>
                </li>
                <li>Physical & Medical Test Required</li>
                <li>Central Government Job</li>
              </ul>
            </div>

          </div>

          {/* Why Govt Job */}
          <div className="mt-20 bg-green-50 border border-green-200 rounded-3xl p-10 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              🎯 Why Choose Government Job After 10th?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-green-900">
              <div>✔ Job security</div>
              <div>✔ Fixed salary + pension benefits</div>
              <div>✔ Government allowances</div>
              <div>✔ Long-term stability</div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}