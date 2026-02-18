import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PercentageCalculator = () => {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    if (!obtained || !total) return;

    const percentage = (Number(obtained) / Number(total)) * 100;
    setResult(Number(percentage.toFixed(2)));
  };

  const resetFields = () => {
    setObtained("");
    setTotal("");
    setResult(null);
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Percentage Calculator
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Easily calculate your percentage from obtained marks and total marks.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-md px-4">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Percentage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="number"
                placeholder="Obtained Marks"
                value={obtained}
                onChange={(e) => setObtained(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Total Marks"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />

              <div className="flex gap-3">
                <Button onClick={calculatePercentage} className="w-full">
                  Calculate
                </Button>
                <Button variant="outline" onClick={resetFields} className="w-full">
                  Reset
                </Button>
              </div>

              {result !== null && (
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-primary">
                    Your Percentage: {result}%
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

export default PercentageCalculator;
