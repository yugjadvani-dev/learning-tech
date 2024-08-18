import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>({
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
        "http://localhost:3333/api/auth/login",
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
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to HealthCare</h1>
          <p className="text-muted-foreground">
            Sign in to your account to access our healthcare services.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
          <Button onClick={handleSubmit} type="button" className="w-full">
            {loading ? "Signing..." : "Sign in"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
