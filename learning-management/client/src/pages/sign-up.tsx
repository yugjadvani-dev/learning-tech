import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";

export function SignUp() {
  return (
    <div className="grid mx-auto min-h-screen w-full grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center space-y-6 p-6 md:p-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/" className="font-medium underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
        <form className="grid w-full gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
      <div className="hidden flex-col h-auto items-center justify-center bg-muted p-6 md:flex">
        <div className="mx-auto max-w-md space-y-4 text-center">
          <GraduationCapIcon className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-2xl font-bold">Welcome to our LMS</h2>
          <p className="text-muted-foreground">
            Join our community of learners and start your journey today.
          </p>
        </div>
      </div>
    </div>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
