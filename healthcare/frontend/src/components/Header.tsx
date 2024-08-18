import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
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
import { Textarea } from "./ui/textarea";

const Header = () => {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<any>(null);
  console.log("user", user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    insurance: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/api/auth/user/${users?._id}`
        );
        console.log("response", response);
        setUser(response.data.user);
        let isLogin = true;
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.user, isLogin })
        );
        setFormData({
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          email: response.data.user.email,
          password: response.data.user.password,
          dateOfBirth: response.data.user.dateOfBirth,
          phone: response.data.user.phone,
          address: response.data.user.address,
          insurance: response.data.user.insurance,
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
        `http://localhost:3333/api/auth/user/${users?._id}`,
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
        `http://localhost:3333/api/auth/user/${users?._id}`
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
    <header className="bg-muted px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <HeartIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">HealthCare</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link to="/departments  " className="text-muted-foreground hover:text-primary">
            Deportments
          </Link>
          <Link to="/book-an-appointment" className="text-muted-foreground hover:text-primary">
            Book-an-appointment
          </Link>
          
          <Button variant="ghost" size="icon">
            <BellIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
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
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          placeholder="Doe"
                          value={formData.lastName}
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
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                          id="address"
                          name="address"
                          rows={3}
                          required
                          placeholder="123 Main St, Anytown USA"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="insurance">Insurance Details</Label>
                        <Input
                          id="insurance"
                          name="insurance"
                          type="text"
                          required
                          placeholder="Aetna, Blue Cross, etc."
                          value={formData.insurance}
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
            <Button onClick={() => navigate("/login")}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
