import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
        "http://localhost:9999/api/auth/login",
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
    <div className="grid w-full min-h-[100vh] lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img
          src="/57.jpeg"
          alt="Camera"
          className="h-full w-full object-cover"
          width="800"
          height="600"
          style={{ aspectRatio: "800/600", objectFit: "cover" }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" /> */}
      </div>
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email"
                value={user.email}
                onChange={handleChange} placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="text-sm font-medium underline underline-offset-4 hover:text-primary"

                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" name="password"
                value={user.password}
                onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
              <p style={{ color: "green" }}>Registration successful!</p>
            )}
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-medium text-black underline underline-offset-4 hover:text-primary" >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
