import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormData } from "./book-demo";

export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<FormData>({
    email: "",
    name: "",
    features: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUser((prev: any) => ({
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
        "http://localhost:2222/api/auth/login",
        user
      );
      console.log("Response:", response.data);
      navigate("/");
      setSuccess(true);

      let isLogin = true;
      localStorage.setItem(
        "user",
        JSON.stringify({ ...response.data.user, isLogin })
      );
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to manage your gym memberships.
          </p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {loading ? "Signing..." : "Sign in"}
          </Button>
          <div className="mt-4">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
              <p style={{ color: "green" }}>Registration successful!</p>
            )}
          </div>
        </form>
        <p className="text-muted-foreground">
          Did you don't have an account?{" "}
          <Link className="underline" to={"/book-demo"}>
            Book a Demo
          </Link>
        </p>
      </div>
    </div>
  );
}
