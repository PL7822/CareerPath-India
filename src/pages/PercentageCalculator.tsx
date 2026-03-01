import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PercentageCalculator = () => {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    if (!obtained || !total) return;

    const obt = Number(obtained);
    const tot = Number(total);

    if (tot <= 0) {
      alert("Total marks must be greater than 0");
      return;
    }

    if (obt > tot) {
      alert("Obtained marks cannot be greater than total marks");
      return;
    }

    const percentage = (obt / tot) * 100;
    setResult(Number(percentage.toFixed(2)));
  };

  const resetFields = () => {
    setObtained("");
    setTotal("");
    setResult(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            📊 Percentage Calculator
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Instantly calculate your percentage from obtained and total marks.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto max-w-lg px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl rounded-3xl border-0 backdrop-blur-lg bg-white/80">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">
                  Calculate Percentage
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <Input
                  type="number"
                  placeholder="Obtained Marks"
                  value={obtained}
                  onChange={(e) => setObtained(e.target.value)}
                  className="h-12 text-lg rounded-xl"
                />

                <Input
                  type="number"
                  placeholder="Total Marks"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="h-12 text-lg rounded-xl"
                />

                <div className="flex gap-4">
                  <Button
                    onClick={calculatePercentage}
                    className="w-full rounded-xl text-lg font-semibold shadow-md"
                  >
                    Calculate
                  </Button>

                  <Button
                    variant="outline"
                    onClick={resetFields}
                    className="w-full rounded-xl text-lg font-semibold"
                  >
                    Reset
                  </Button>
                </div>

                {result !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 p-6 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-2xl shadow-xl text-center"
                  >
                    <p className="text-2xl font-bold">
                      {result}%
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

export default PercentageCalculator;