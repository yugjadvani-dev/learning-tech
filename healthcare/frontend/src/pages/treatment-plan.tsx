import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TreatmentPlan() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 bg-background p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Treatment Plan</h2>
          <div className="bg-card rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Medications</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex justify-between">
                  <p>Metformin</p>
                  <p>500mg, 2 times daily</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  For diabetes management
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Lisinopril</p>
                  <p>10mg, once daily</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  For high blood pressure
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Atorvastatin</p>
                  <p>20mg, once daily</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  For cholesterol management
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Appointments</h3>
            <ul className="space-y-2">
              <li>
                <div className="flex justify-between">
                  <p>Diabetes Checkup</p>
                  <p>June 15, 2023</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  With Dr. Jane Smith
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Nutrition Counseling</p>
                  <p>July 1, 2023</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  With Registered Dietitian
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Physical Therapy</p>
                  <p>August 10, 2023</p>
                </div>
                <p className="text-sm text-muted-foreground">For joint pain</p>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">
              Lifestyle Recommendations
            </h3>
            <ul className="space-y-2">
              <li>
                <div className="flex justify-between">
                  <p>Exercise</p>
                  <p>30 minutes, 3 times per week</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Moderate-intensity cardio
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Diet</p>
                  <p>Balanced, low-carb</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Consult with Registered Dietitian
                </p>
              </li>
              <li>
                <div className="flex justify-between">
                  <p>Stress Management</p>
                  <p>Daily meditation</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recommended by therapist
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Feedback and Questions</h3>
            <Textarea
              placeholder="Enter your feedback or questions about your treatment plan..."
              className="w-full mb-4"
            />
            <Button>Submit</Button>
          </div>
        </div>
      </main>
    </div>
  );
}