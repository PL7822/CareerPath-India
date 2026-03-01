import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function StreamPage() {
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
              11th–12th Streams After 10th
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              After completing 10th, students can continue higher secondary
              education by choosing a stream that aligns with their interests
              and career goals.
            </p>
          </div>

          {/* Stream Cards */}
          <div className="mt-16 space-y-12">

            {/* Science */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🔬 Science Stream
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Subjects: Physics, Chemistry, Maths/Biology</li>
                <li>Best For: Engineering, Medical, Research</li>
                <li>Future Careers: Engineer, Doctor, Scientist</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹4 – 12 LPA
                  </span>
                </li>
              </ul>
            </div>

            {/* Commerce */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                📊 Commerce Stream
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Subjects: Accounts, Economics, Business Studies</li>
                <li>Best For: CA, Banking, Finance</li>
                <li>Future Careers: CA, Banker, Business Analyst</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹3 – 10 LPA
                  </span>
                </li>
              </ul>
            </div>

            {/* Arts */}
            <div className="group bg-white p-10 rounded-3xl border border-slate-200 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                🎨 Arts Stream
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>Subjects: History, Political Science, Psychology</li>
                <li>Best For: Law, Journalism, Civil Services</li>
                <li>Future Careers: Lawyer, Journalist, UPSC Officer</li>
                <li>
                  Avg Salary:
                  <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ₹2.5 – 8 LPA
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Decision Guide */}
          <div className="mt-20 bg-blue-50 border border-blue-200 rounded-3xl p-10 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              🎯 How to Choose the Right Stream?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-blue-900">
              <div>✔ Choose based on your interest, not peer pressure</div>
              <div>✔ Understand long-term career goals</div>
              <div>✔ Talk to teachers & mentors</div>
              <div>✔ Research salary & future scope</div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}