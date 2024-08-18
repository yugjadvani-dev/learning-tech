import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Link } from "react-router-dom";

export function LifeInsurance() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Protect Your Loved Ones with Our Life Insurance Plans
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground">
                Secure your family's future with our comprehensive life
                insurance solutions. Get the coverage you need at affordable
                rates.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get a Quote
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="/life.jpg"
                width="500"
                height="400"
                alt="Life Insurance"
                className="rounded-lg"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Life Insurance Plans
              </h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                Choose from our range of life insurance plans to find the
                coverage that best fits your needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Life Insurance</CardTitle>
                  <CardDescription>
                    Affordable coverage for your family's essential needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Coverage:</strong> Up to $250,000
                    </li>
                    <li>
                      <strong>Pricing:</strong> Starting at $20/month
                    </li>
                    <li>
                      <strong>Benefits:</strong> Death benefit, terminal illness
                      coverage
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get a Quote
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Life Insurance</CardTitle>
                  <CardDescription>
                    Robust coverage for your family's long-term financial
                    security.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Coverage:</strong> Up to $1,000,000
                    </li>
                    <li>
                      <strong>Pricing:</strong> Starting at $50/month
                    </li>
                    <li>
                      <strong>Benefits:</strong> Death benefit, terminal illness
                      coverage, living benefits
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get a Quote
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Life Insurance</CardTitle>
                  <CardDescription>
                    Tailored coverage for your family's unique needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Coverage:</strong> Up to $5,000,000
                    </li>
                    <li>
                      <strong>Pricing:</strong> Starting at $100/month
                    </li>
                    <li>
                      <strong>Benefits:</strong> Death benefit, terminal illness
                      coverage, living benefits, critical illness coverage
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get a Quote
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                Get answers to the most common questions about our life
                insurance plans.
              </p>
            </div>
            <Accordion type="multiple" className="space-y-2">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    What is the difference between term and whole life
                    insurance?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Term life insurance provides coverage for a specific period
                    of time, while whole life insurance provides lifelong
                    coverage. Term life is generally more affordable, but whole
                    life builds cash value over time.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    How do I determine the right coverage amount for my needs?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    The right coverage amount depends on factors like your
                    income, debts, and the number of dependents you have. As a
                    general rule, you should aim for a coverage amount that
                    would replace your income for 10-15 years.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    How do I get started with applying for life insurance?
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    To get started, you can fill out our online quote form or
                    contact one of our licensed agents. They'll guide you
                    through the application process, which typically includes
                    providing some personal and health information.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Get a Life Insurance Quote
              </h2>
              <p className="text-muted-foreground mt-2">
                Fill out the form below to get a personalized quote for your
                life insurance needs.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter your age" />
                </div>
                <div>
                  <Label htmlFor="coverage">Coverage Amount</Label>
                  <Select id="coverage">
                    <option value="250000">$250,000</option>
                    <option value="500000">$500,000</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="5000000">$5,000,000</option>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Get a Quote
                </Button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="/life-1.jpg"
                width="500"
                height="400"
                alt="Life Insurance Quote"
                className="rounded-lg"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
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
