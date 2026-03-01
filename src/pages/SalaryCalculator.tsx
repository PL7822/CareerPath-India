import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SalaryCalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const [netSalary, setNetSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    if (!monthlySalary) return;

    const annual = Number(monthlySalary) * 12;

    let estimatedTax = 0;
    if (annual > 700000) {
      estimatedTax = annual * 0.1;
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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Salary Calculator
          </h1>
          <p className="opacity-90 max-w-xl mx-auto">
            Calculate your annual salary and estimated tax instantly.
          </p>
        </div>
      </motion.section>

      {/* Calculator */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto max-w-md px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-pink-100">
              <CardHeader>
                <CardTitle className="text-violet-600">
                  Enter Monthly Salary
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <Input
                  type="number"
                  placeholder="Monthly Salary (₹)"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                  className="focus-visible:ring-violet-500"
                />

                <div className="flex gap-3">
                  <Button
                    onClick={calculateSalary}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    Calculate
                  </Button>

                  <Button
                    variant="outline"
                    onClick={resetFields}
                    className="w-full border-violet-400 text-violet-600 hover:bg-violet-50"
                  >
                    Reset
                  </Button>
                </div>

                {annualSalary !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 space-y-2 text-center bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg p-4 shadow-md"
                  >
                    <p className="text-lg font-semibold">
                      Annual Salary: ₹{annualSalary}
                    </p>
                    <p className="text-sm opacity-90">
                      Estimated Tax: ₹{tax}
                    </p>
                    <p className="text-lg font-semibold">
                      Net Annual Salary: ₹{netSalary}
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalaryCalculator;