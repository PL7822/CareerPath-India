import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function DiplomaPage() {
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
            Diploma / Polytechnic Courses After 10th
          </h1>

          <p className="mt-4 text-muted-foreground">
            Polytechnic diploma courses are technical education programs
            designed to provide practical skills and industry knowledge
            immediately after 10th grade.
          </p>

          {/* Course List */}
          <div className="mt-10 space-y-8">

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                💻 Diploma in Computer Engineering
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 3 Years</li>
                <li>• Subjects: Programming, Networking, DBMS</li>
                <li>• Avg Salary: ₹2.5 – 4 LPA</li>
                <li>• Future Scope: Software Dev, IT Support</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🏗 Diploma in Civil Engineering
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 3 Years</li>
                <li>• Subjects: Construction, Surveying</li>
                <li>• Avg Salary: ₹2 – 3.5 LPA</li>
                <li>• Future Scope: Site Engineer</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                ⚙ Diploma in Mechanical Engineering
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 3 Years</li>
                <li>• Subjects: Machines, Manufacturing</li>
                <li>• Avg Salary: ₹2 – 4 LPA</li>
                <li>• Future Scope: Production Engineer</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}
