import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function Registration() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <div className="flex justify-center py-6">
          <img
            src="/placeholder.svg"
            alt="Varni Consultancy"
            width={120}
            height={40}
            style={{ aspectRatio: "120/40", objectFit: "cover" }}
          />
        </div>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Register</Button>
        </CardContent>
        <CardFooter className="text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/" className="font-medium underline">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
