
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

interface User {
  fullname: string;
  email: string;
  password: string;
  number: string;
}

export function Registration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>({
    fullname: "",
    number: "",
    email: "",
    password: "",
  });
  console.log("user", user);

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
        "http://localhost:7777/api/auth/signup",
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
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h2 className="mt-6 text-center text-3xl text-black font-bold tracking-tight">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link to="#" className="font-medium text-primary hover:text-primary/80" >
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              value={user.fullname}
              onChange={handleChange}
              autoComplete="fullname"
              required
              className="mt-1 block w-full"
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="mt-1 block w-full"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
                className="block w-full"
                placeholder="Enter your password"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          {/* <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full"
              placeholder="Confirm your password"
            />
          </div> */}
          <div>
            <Label htmlFor="number">Phone Number</Label>
            <Input
              id="number"
              name="number"
              type="number"
              value={user.number}
              onChange={handleChange}
              required
              className="mt-1 block w-full"
              placeholder="+1 (555) 555-5555"
            />
          </div>
          <div className="flex items-center">
            <Checkbox id="terms" name="terms" required />
            <Label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
              I agree to the{" "}
              <Link to="#" className="font-medium text-primary hover:text-primary/80" >
                terms and conditions
              </Link>
            </Label>
          </div>
          <div>
            <Button onClick={handleSubmit} className="w-full">
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </form>
      </div>
    </div>
  )
}
