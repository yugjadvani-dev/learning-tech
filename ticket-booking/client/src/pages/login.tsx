import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="flex items-center justify-center min-h-screen bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center">
      <Card className="w-full max-w-md p-6 bg-background shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" onChange={handleChange} value={user.email} type="email" placeholder="ravi@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" onChange={handleChange} value={user.password} type="password" required />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">{loading ? "Signing..." : "Sign in"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
