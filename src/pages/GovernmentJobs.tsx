import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Government Job Opportunities
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore stable and prestigious career options in the government sector.
            Prepare smartly and build a secure future.
          </p>
        </div>
      </section>

      {/* Career Cards */}
      <section className="py-16">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 px-4">
          {govtOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3">
                <option.icon className="h-8 w-8 text-primary" />
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{option.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            🎯 Preparation Strategy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start early preparation, follow a structured study plan, practice mock tests
            and stay updated with current affairs to succeed in competitive exams.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default GovernmentJobs;
