import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function ITIPage() {
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
            ITI Courses After 10th
          </h1>

          <p className="mt-4 text-muted-foreground">
            Industrial Training Institute (ITI) courses are skill-based
            programs designed to provide hands-on technical training.
            These courses help students become job-ready in a short time.
          </p>

          {/* Popular ITI Courses */}
          <div className="mt-10 space-y-8">

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🔌 Electrician
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 2 Years</li>
                <li>• Skills: Electrical wiring, maintenance</li>
                <li>• Avg Salary: ₹1.8 – 3 LPA</li>
                <li>• Jobs: Electrician, Technician</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🔧 Fitter
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 2 Years</li>
                <li>• Skills: Machine fitting, assembling</li>
                <li>• Avg Salary: ₹2 – 3.5 LPA</li>
                <li>• Jobs: Mechanical Fitter</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🔥 Welder
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 1–2 Years</li>
                <li>• Skills: Welding techniques</li>
                <li>• Avg Salary: ₹2 – 4 LPA</li>
                <li>• Jobs: Welder, Fabricator</li>
              </ul>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🖥 Computer Operator & Programming Assistant (COPA)
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Duration: 1 Year</li>
                <li>• Skills: Basic programming, office software</li>
                <li>• Avg Salary: ₹1.5 – 3 LPA</li>
                <li>• Jobs: Data Entry, IT Support</li>
              </ul>
            </div>

          </div>

          {/* Why Choose ITI */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">
              🎯 Why Choose ITI After 10th?
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Short duration courses</li>
              <li>✔ Practical training</li>
              <li>✔ Government & private job opportunities</li>
              <li>✔ Affordable education</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
