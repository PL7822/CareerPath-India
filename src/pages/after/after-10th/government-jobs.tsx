import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function GovernmentJobs10thPage() {
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

          <h1 className="mt-6 text-3xl font-bold text-foreground">
            Government Jobs After 10th
          </h1>

          <p className="mt-4 text-muted-foreground">
            After passing 10th standard, students can apply for several
            government jobs in central and state departments.
          </p>

          <div className="mt-10 space-y-8">

            {/* Railway Jobs */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🚆 Railway Group D
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Qualification: 10th Pass</li>
                <li>• Salary: ₹18,000 – ₹25,000 per month</li>
                <li>• Jobs: Track Maintainer, Helper, Assistant</li>
                <li>• Recruitment Body: RRB</li>
              </ul>
            </div>

            {/* SSC MTS */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🏢 SSC MTS (Multi Tasking Staff)
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Qualification: 10th Pass</li>
                <li>• Salary: ₹18,000 – ₹22,000 per month</li>
                <li>• Jobs: Office Staff, Peon, Clerk Support</li>
                <li>• Recruitment Body: SSC</li>
              </ul>
            </div>

            {/* Police Constable */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                👮 Police Constable
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Qualification: 10th / 12th (varies by state)</li>
                <li>• Salary: ₹20,000 – ₹30,000 per month</li>
                <li>• Physical Test Required</li>
                <li>• State Level Recruitment</li>
              </ul>
            </div>

            {/* Army */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold">
                🪖 Indian Army (Soldier GD)
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Qualification: 10th Pass</li>
                <li>• Salary: ₹21,000 – ₹35,000 per month</li>
                <li>• Physical & Medical Test Required</li>
                <li>• Central Government Job</li>
              </ul>
            </div>

          </div>

          {/* Why Govt Job */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">
              🎯 Why Choose Government Job After 10th?
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Job security</li>
              <li>✔ Fixed salary + pension benefits</li>
              <li>✔ Government allowances</li>
              <li>✔ Long-term stability</li>
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
