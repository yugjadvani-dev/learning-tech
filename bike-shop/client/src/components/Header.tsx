import auth from "@/hooks/auth";
import axios from "axios";
import { PhoneIcon, ShoppingCart } from "lucide-react";
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

const Header = () => {
  const { user: users }: any = auth();
  const [user, setUser] = useState<any>(null);
  console.log("user", user);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    number: "",
    address: "",
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
          number: response.data.user.number,
          address: response.data.user.address,
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
    <div>
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <BikeIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Bike Shop</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/new-bike"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            New Bike
          </Link>
          <Link
            to="/new-scooter"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            New Scooter
          </Link>
          <Link
            to="/electric"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Electric
          </Link>
          <Link
            to="/rides"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Rides
          </Link>
          <Link
            to="/parts"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Parts
          </Link>
          <Link
            to="/about-us"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <span className="text-sm font-medium">555-555-5555</span>
          </div>
          {users?.isLogin ? (
            <div className="flex gap-4 items-center">
              {/* <Button onClick={handleLogout}>Edit Profile</Button> */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">Edit Profile</Button>
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
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="number">Contact Number</Label>
                        <Input
                          id="number"
                          name="number"
                          type="number"
                          autoComplete="number"
                          required
                          placeholder="Enter your contact number"
                          value={formData.number}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          type="address"
                          autoComplete="address"
                          required
                          placeholder="Enter your contact address"
                          value={formData.address}
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
              <Link to={'/cart'}><ShoppingCart /></Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

function BikeIcon(props: any) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
