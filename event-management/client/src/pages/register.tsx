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
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  password: string;
  dietaryRequirements: string;
  accommodations: string;
}

export function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    password: "",
    dietaryRequirements: "",
    accommodations: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:8888/api/auth/signup",
        user
      );
      console.log("Response:", response.data);
      navigate("/login");
      setSuccess(true);
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Annual Developer Conference
            </h1>
            <p className="text-muted-foreground md:text-xl">
              June 15-17, 2024 | San Francisco, CA
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="px-8">Register Now</Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Event Registration
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for the event.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      onChange={handleChange}
                      value={user.name}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={user.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={user.company}
                      onChange={handleChange}
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="jobTitle" className="text-sm font-medium">
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={user.jobTitle}
                      onChange={handleChange}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder="Software Engineer"
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="dietaryRequirements"
                      className="text-sm font-medium"
                    >
                      Dietary Requirements
                    </Label>
                    <Textarea
                      name="dietaryRequirements"
                      id="dietaryRequirements"
                      onChange={handleChange}
                      value={user.dietaryRequirements}
                      placeholder="Please let us know if you have any dietary restrictions or allergies."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="accommodations"
                      className="text-sm font-medium"
                    >
                      Special Accommodations
                    </Label>
                    <Textarea
                      name="accommodations"
                      id="accommodations"
                      onChange={handleChange}
                      value={user.accommodations}
                      placeholder="Please let us know if you require any special accommodations."
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end">
                <Button type="button" onClick={handleSubmit}>
                  {loading ? "Registering..." : "Register"}
                </Button>
              </div>
            </CardFooter>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
              <p style={{ color: "green" }}>Registration successful!</p>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
