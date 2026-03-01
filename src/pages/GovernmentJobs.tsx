import Layout from "@/components/Layout";
import { Landmark, ShieldCheck, Banknote, Train } from "lucide-react";

const govtOptions = [
  {
    icon: Landmark,
    title: "UPSC (Civil Services)",
    desc: "IAS, IPS, IFS and other top administrative positions through UPSC examination."
  },
  {
    icon: ShieldCheck,
    title: "SSC & State PSC",
    desc: "Government jobs in ministries, departments and state-level services."
  },
  {
    icon: Banknote,
    title: "Banking Exams",
    desc: "IBPS, SBI PO, Clerk and RBI exams for banking sector careers."
  },
  {
    icon: Train,
    title: "Railway & Defense",
    desc: "Railway recruitment boards and defense services like Army, Navy and Air Force."
  }
];

const GovernmentJobs = () => {
  return (
    <Layout>
      <div className="bg-slate-50">

        {/* ================= HERO ================= */}
        <section
          className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/g-job.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-900/40"></div>

          <div className="relative z-10 text-white px-4">
            <h1 className="text-5xl font-extrabold mb-6">
              Government Job Opportunities
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Explore stable and prestigious career options in the government sector.
              Prepare smartly and build a secure future.
            </p>
          </div>
        </section>

        {/* ================= CARDS ================= */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10">

              {govtOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200 p-8 
                             hover:shadow-xl hover:-translate-y-1 
                             transition-all duration-300"
                >
                  <div className="flex items-center gap-5 mb-5">
                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <option.icon className="h-8 w-8 text-blue-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800">
                      {option.title}
                    </h3>
                  </div>

                  <p className="text-slate-600">
                    {option.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= PREPARATION ================= */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-3xl">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              🎯 Preparation Strategy
            </h2>

            <p className="text-slate-600 text-lg">
              Start early preparation, follow a structured study plan,
              practice mock tests regularly and stay updated with
              current affairs to succeed in competitive exams.
            </p>

            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <div className="bg-slate-100 px-6 py-3 rounded-full text-slate-700">
                Study Plan
              </div>
              <div className="bg-slate-100 px-6 py-3 rounded-full text-slate-700">
                Mock Tests
              </div>
              <div className="bg-slate-100 px-6 py-3 rounded-full text-slate-700">
                Current Affairs
              </div>
              <div className="bg-slate-100 px-6 py-3 rounded-full text-slate-700">
                Time Management
              </div>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default GovernmentJobs;