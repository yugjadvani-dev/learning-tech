
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  password: string;
}

export function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
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
        "http://localhost:9999/api/auth/signup",
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
    <div className="flex h-screen w-full items-center justify-center bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <CardDescription>Create an account to book tickets for your next adventure.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" onChange={handleChange} value={user.email} type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" onChange={handleChange} value={user.name} placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" onChange={handleChange} value={user.password} type="password" placeholder="Enter a password" />
            </div>
            <Button type="button" onClick={handleSubmit} className="w-full">
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </CardContent>
        <CardFooter className="text-center text-muted-foreground space-x-2">
          <span>Already have an account?{" "}</span>
          <Link to={"/login"} className="font-medium underline underline-offset-4">
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
