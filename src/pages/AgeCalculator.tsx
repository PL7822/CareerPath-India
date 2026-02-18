import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Age Calculator
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Calculate your exact age in years, months and days.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-md px-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Date of Birth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />

              <div className="flex gap-3">
                <Button onClick={calculateAge} className="w-full">
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetFields} className="w-full">
                  Reset
                </Button>
              </div>

              {age && (
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-primary">
                    {age.years} Years, {age.months} Months, {age.days} Days
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

export default AgeCalculator;
