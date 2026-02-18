import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SalaryCalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const [netSalary, setNetSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    if (!monthlySalary) return;

    const annual = Number(monthlySalary) * 12;

    // Basic tax estimation (demo purpose only)
    let estimatedTax = 0;
    if (annual > 700000) {
      estimatedTax = annual * 0.1; // 10% simple estimate
    }

    const net = annual - estimatedTax;

    setAnnualSalary(Number(annual.toFixed(2)));
    setTax(Number(estimatedTax.toFixed(2)));
    setNetSalary(Number(net.toFixed(2)));
  };

  const resetFields = () => {
    setMonthlySalary("");
    setAnnualSalary(null);
    setTax(null);
    setNetSalary(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Salary Calculator
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Calculate your annual salary and estimated tax instantly.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container mx-auto max-w-md px-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter Monthly Salary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="number"
                placeholder="Monthly Salary (₹)"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
              />

              <div className="flex gap-3">
                <Button onClick={calculateSalary} className="w-full">
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetFields} className="w-full">
                  Reset
                </Button>
              </div>

              {annualSalary !== null && (
                <div className="mt-4 space-y-2 text-center">
                  <p className="text-lg font-semibold text-primary">
                    Annual Salary: ₹{annualSalary}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Estimated Tax: ₹{tax}
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    Net Annual Salary: ₹{netSalary}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SalaryCalculator;
