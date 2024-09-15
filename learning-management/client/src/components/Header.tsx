import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import auth from "@/hooks/auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Header = () => {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<any>(null);
  console.log("user", user);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7777/api/auth/user/${users?._id}`
        );
        console.log("response", response);
        setUser(response.data.user);
        let isLogin = true;
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.user, isLogin })
        );
        setFormData({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          email: response.data.user.email,
          password: response.data.user.password,
        });
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    fetchUser();
  }, [user?._id]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:7777/api/auth/user/${users?._id}`,
        formData
      );
      console.log("response", response);
      alert("Profile updated successfully");
      let isLogin = true;
      localStorage.setItem(
        "user",
        JSON.stringify({ ...response.data.user, isLogin })
      );
      window.location.reload();
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:7777/api/auth/user/${users?._id}`
      );
      console.log("response", response);
      alert("Profile deleted successfully");
      navigate("/");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  return (
    <header className="bg-primary py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-primary-foreground" />
          <span className="text-lg font-bold text-primary-foreground">
            LMS Affiliate
          </span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-primary-foreground hover:underline"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-primary-foreground hover:underline"
          >
            Affiliate Program
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-primary-foreground hover:underline"
          >
            Promotional Materials
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-primary-foreground hover:underline"
          >
            Contact
          </Link>
        </nav>
        {users?.isLogin ? (
          <div className="flex gap-4 items-center">
            {/* <Button onClick={handleLogout}>Edit Profile</Button> */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 items-center gap-4">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        autoComplete="given-name"
                        required
                        placeholder="John"
                        value={formData.firstname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        autoComplete="family-name"
                        required
                        placeholder="Doe"
                        value={formData.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button onClick={handleDelete}>Delete Profile</Button>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button onClick={() => navigate("/sign-up")} variant="outline" className="hidden md:inline-flex">
            Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
