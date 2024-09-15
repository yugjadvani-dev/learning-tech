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

export function SignIn() {
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
        "http://localhost:7777/api/auth/login",
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
    <div className="grid w-full min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center space-y-6 p-6 md:p-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between flex-col gap-4 mb-3">
            <Button type="submit" className="w-full">
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <Link to="/" className="text-sm text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </form>
      </div>
      <div className="hidden md:block">
        <img
          src="/placeholder.svg"
          alt="Sign In"
          width="600"
          height="600"
          className="h-full w-full object-cover"
          style={{ aspectRatio: "600/600", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
