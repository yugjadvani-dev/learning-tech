import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export function Support() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get the support you need
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Our Fitness Tracker app is designed to help you reach your
                fitness goals. If you have any questions or need assistance, our
                support team is here to help.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View FAQ
              </Link>
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
        <section id="faq" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Find answers to common questions about our Fitness Tracker app.
              </p>
            </div>
            <div className="grid gap-4">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold">
                    How do I set up my Fitness Tracker?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    To set up your Fitness Tracker, simply download the app and
                    follow the on-screen instructions. You'll need to create an
                    account, connect your fitness device, and customize your
                    settings to get started.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold">
                    How do I track my workouts?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    To track your workouts, open the Fitness Tracker app and tap
                    the "Start Workout" button. The app will automatically track
                    your activity, distance, and calories burned. You can also
                    manually log your workouts if you prefer.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold">
                    How do I manage my account?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    To manage your account, go to the "Settings" section of the
                    Fitness Tracker app. Here, you can update your personal
                    information, change your password, and adjust your app
                    preferences.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 bg-muted rounded-md">
                  <h3 className="text-lg font-semibold">
                    How do I troubleshoot issues with the app?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3 bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    If you're experiencing any issues with the Fitness Tracker
                    app, please try the following steps:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        Check your internet connection and make sure your device
                        is compatible with the app.
                      </li>
                      <li>
                        Try restarting the app or your device to see if that
                        resolves the issue.
                      </li>
                      <li>
                        If the problem persists, please contact our support team
                        for further assistance.
                      </li>
                    </ul>
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in touch
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                If you have any questions or need further assistance, please
                fill out the form below and our support team will get back to
                you as soon as possible.
              </p>
            </div>
            <Card className="mx-auto w-full max-w-md">
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or question"
                    className="min-h-[150px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="ghost">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function WeightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>
  );
}