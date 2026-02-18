import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState<number | null>(null);

  const convertCgpa = () => {
    if (!cgpa) return;

    // Standard Indian formula
    const result = Number(cgpa) * 9.5;
    setPercentage(Number(result.toFixed(2)));
  };

  const resetFields = () => {
    setCgpa("");
    setPercentage(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            CGPA to Percentage Converter
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Convert your CGPA into percentage easily using the standard formula.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container mx-auto max-w-md px-4">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your CGPA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="number"
                step="0.01"
                placeholder="Enter CGPA (e.g., 8.2)"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
              />

              <div className="flex gap-3">
                <Button onClick={convertCgpa} className="w-full">
                  Convert
                </Button>
                <Button variant="outline" onClick={resetFields} className="w-full">
                  Reset
                </Button>
              </div>

              {percentage !== null && (
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-primary">
                    Percentage: {percentage}%
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Formula Used: CGPA × 9.5
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

export default CgpaToPercentage;
