import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Enter your username and password below
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-muted-foreground"
            >
              Username
            </Label>
            <div className="mt-1">
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
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
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
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
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
