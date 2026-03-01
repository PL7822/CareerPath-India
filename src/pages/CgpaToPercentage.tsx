import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState<number | null>(null);

  const convertCgpa = () => {
    if (!cgpa) return;

    const numericCgpa = Number(cgpa);

    if (numericCgpa < 0 || numericCgpa > 10) {
      alert("Please enter CGPA between 0 and 10");
      return;
    }

    const result = numericCgpa * 9.5;
    setPercentage(Number(result.toFixed(2)));
  };

  const resetFields = () => {
    setCgpa("");
    setPercentage(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            🎓 CGPA to Percentage
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Instantly convert your CGPA into percentage using the standard Indian formula.
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
                  Enter Your CGPA
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Enter CGPA (0 - 10)"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  className="h-12 text-lg rounded-xl"
                />

                <div className="flex gap-4">
                  <Button
                    onClick={convertCgpa}
                    className="w-full rounded-xl text-lg font-semibold shadow-md"
                  >
                    Convert
                  </Button>

                  <Button
                    variant="outline"
                    onClick={resetFields}
                    className="w-full rounded-xl text-lg font-semibold"
                  >
                    Reset
                  </Button>
                </div>

                {percentage !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 p-6 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-2xl shadow-xl text-center"
                  >
                    <p className="text-2xl font-bold">
                      {percentage}%
                    </p>
                    <p className="text-sm opacity-90 mt-2">
                      Formula Used: CGPA × 9.5
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

export default CgpaToPercentage;