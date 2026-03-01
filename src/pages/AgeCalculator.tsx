import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const resetFields = () => {
    setBirthDate("");
    setAge(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            🎂 Age Calculator
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Instantly calculate your exact age in years, months, and days.
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
                  Enter Your Date of Birth
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <Input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="h-12 text-lg rounded-xl"
                />

                <div className="flex gap-4">
                  <Button
                    onClick={calculateAge}
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

                {age && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl text-center"
                  >
                    <p className="text-2xl font-bold">
                      {age.years} Years
                    </p>
                    <p className="text-lg">
                      {age.months} Months, {age.days} Days
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

export default AgeCalculator;