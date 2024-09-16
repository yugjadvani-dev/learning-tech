import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
        "http://localhost:5454/api/auth/admin/login",
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
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Admin Sign in to your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Enter your username and password below
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-muted-foreground"
            >
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-muted-foreground"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                placeholder="Password"
                className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          {error && (
            <p className="mt-3" style={{ color: "red" }}>
              {error}
            </p>
          )}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember"
              name="remember"
              className="h-4 w-4 rounded"
            />
            <Label
              htmlFor="remember"
              className="ml-2 block text-sm text-muted-foreground"
            >
              Remember me
            </Label>
          </div>
          <div className="text-sm">
            <Link
              to="/"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
            {loading ? "Loading.." : "Sign in"}
          </Button>
        </div>
      </div>
    </div>
  );
}
