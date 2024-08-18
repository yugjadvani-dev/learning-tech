import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

export function HealthCare() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 px-4 py-8 md:px-6 md:py-10">
        <div className="container mx-auto grid gap-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Blood Pressure</CardTitle>
                <CardDescription>
                  Your current blood pressure reading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-4xl font-bold">120/80</div>
                  <div className="text-muted-foreground">Normal Range</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cholesterol</CardTitle>
                <CardDescription>
                  Your current cholesterol levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-4xl font-bold">180 mg/dL</div>
                  <div className="text-muted-foreground">Borderline High</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weight</CardTitle>
                <CardDescription>Your current weight and BMI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-4xl font-bold">175 lbs</div>
                  <div className="text-muted-foreground">
                    BMI: 25.1 (Overweight)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Blood Pressure Trends</CardTitle>
                <CardDescription>
                  Your blood pressure readings over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cholesterol Levels</CardTitle>
                <CardDescription>
                  Your cholesterol levels over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weight Trends</CardTitle>
                <CardDescription>
                  Your weight and BMI over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>
                  Based on your health data, here are some tips to improve your
                  well-being
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Manage Blood Pressure
                    </h3>
                    <p className="text-muted-foreground">
                      Your blood pressure is currently in the normal range. To
                      maintain this, try to exercise regularly, limit salt
                      intake, and manage stress.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Improve Cholesterol Levels
                    </h3>
                    <p className="text-muted-foreground">
                      Your cholesterol levels are borderline high. Consider
                      making dietary changes, such as increasing your intake of
                      healthy fats and fiber, to help lower your cholesterol.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Achieve a Healthy Weight
                    </h3>
                    <p className="text-muted-foreground">
                      Your current weight and BMI indicate that you are
                      overweight. Aim to incorporate more physical activity into
                      your daily routine and focus on a balanced, nutrient-rich
                      diet to reach a healthier weight.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
