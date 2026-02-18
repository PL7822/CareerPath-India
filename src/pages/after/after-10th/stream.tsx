import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function StreamPage() {
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
            11th–12th Streams After 10th
          </h1>

          <p className="mt-4 text-muted-foreground">
            After completing 10th, students can continue higher secondary
            education by choosing a stream that aligns with their interests
            and career goals.
          </p>

          {/* Streams */}
          <div className="mt-10 space-y-8">

            {/* Science */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🔬 Science Stream
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Subjects: Physics, Chemistry, Maths/Biology</li>
                <li>• Best For: Engineering, Medical, Research</li>
                <li>• Future Careers: Engineer, Doctor, Scientist</li>
                <li>• Avg Salary (after degree): ₹4 – 12 LPA</li>
              </ul>
            </div>

            {/* Commerce */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                📊 Commerce Stream
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Subjects: Accounts, Economics, Business Studies</li>
                <li>• Best For: CA, Banking, Finance</li>
                <li>• Future Careers: CA, Banker, Business Analyst</li>
                <li>• Avg Salary (after degree): ₹3 – 10 LPA</li>
              </ul>
            </div>

            {/* Arts */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🎨 Arts Stream
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Subjects: History, Political Science, Psychology</li>
                <li>• Best For: Law, Journalism, Civil Services</li>
                <li>• Future Careers: Lawyer, Journalist, UPSC Officer</li>
                <li>• Avg Salary (after degree): ₹2.5 – 8 LPA</li>
              </ul>
            </div>

          </div>

          {/* Decision Guide */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">
              🎯 How to Choose the Right Stream?
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Choose based on your interest, not peer pressure</li>
              <li>✔ Understand long-term career goals</li>
              <li>✔ Talk to teachers & mentors</li>
              <li>✔ Research salary & future scope</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
