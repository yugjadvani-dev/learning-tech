import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  password: string;
  dietaryRequirements: string;
  accommodations: string;
}

export function Profile() {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<User | null>(null);
  console.log("user", user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    dietaryRequirements: "",
    accommodations: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/api/auth/user/${users?._id}`
        );
        console.log("response", response);
        setUser(response.data.user);
        let isLogin = true;
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.user, isLogin })
        );
        setFormData({
          name: response.data.user.name,
          email: response.data.user.email,
          company: response.data.user.company,
          jobTitle: response.data.user.jobTitle,
          dietaryRequirements: response.data.user.dietaryRequirements,
          accommodations: response.data.user.accommodations,
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
        `http://localhost:8888/api/auth/user/${users?._id}`,
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
        `http://localhost:8888/api/auth/user/${users?._id}`
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">User Profile</h2>
        </div>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{user?.name}</CardTitle>
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
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">
                          Company
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="jobTitle" className="text-right">
                          Job Title
                        </Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                          htmlFor="dietaryRequirements"
                          className="text-right"
                        >
                          Dietary Requirements
                        </Label>
                        <Input
                          id="dietaryRequirements"
                          value={formData.dietaryRequirements}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="accommodations" className="text-right">
                          Accommodations
                        </Label>
                        <Input
                          id="accommodations"
                          value={formData.accommodations}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <CardDescription>{user?.email}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-lg font-medium">About</p>
              <p>
                John Doe is a software engineer with a passion for building
                innovative web applications. He has been working in the industry
                for over 5 years and has a strong background in front-end
                development.
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Registered Events</p>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Summer Picnic</CardTitle>
                    <CardDescription>June 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Join us for a fun-filled summer picnic at the park! Bring
                      your family and friends and enjoy delicious food, games,
                      and activities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Holiday Party</CardTitle>
                    <CardDescription>December 20, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Celebrate the holidays with your colleagues at our annual
                      holiday party. Enjoy festive drinks, delicious food, and
                      great company.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={handleDelete} variant={"destructive"}>
                Delete Profile
              </Button>
              <Button onClick={handleLogout} variant={"destructive"}>
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
