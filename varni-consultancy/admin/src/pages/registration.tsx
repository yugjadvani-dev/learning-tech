import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  username: string;
  email: string;
  password: string;
}

export function Registration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<User>({
    username: "",
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
        "http://localhost:5454/api/auth/admin/signup",
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
    <div className="flex h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <div className="flex justify-center py-6">
          <img
            src="/registration.jpg"
            alt="Varni Consultancy"
            width={120}
            height={40}
            style={{ aspectRatio: "120/40", objectFit: "cover" }}
          />
        </div>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">User Name</Label>
            <Input
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter your UserName"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Password"
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <Button className="w-full mb-3" onClick={handleSubmit}>
            Register
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && (
            <p style={{ color: "green" }}>Registration successful!</p>
          )}
        </CardContent>
        <CardFooter className="text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/" className="font-medium underline">
            {loading ? "Loading..." : "Login"}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
