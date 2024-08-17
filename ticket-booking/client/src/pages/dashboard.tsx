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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export function Dashboard() {
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
          `http://localhost:9999/api/auth/user/${users?._id}`
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
        `http://localhost:9999/api/auth/user/${users?._id}`,
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
        `http://localhost:9999/api/auth/user/${users?._id}`
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
      <main className="flex-1 py-10 px-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Email</Label>
                <div className="text-muted-foreground">{users?.email}</div>
              </div>
              <div>
                <Label>Account Created</Label>
                <div className="text-muted-foreground">June 1, 2023</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <div className="text-muted-foreground">{users?.name}</div>
              </div>
              <div>
                <Label>Role</Label>
                <div className="text-muted-foreground">User</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end gap-2 my-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FilePenIcon className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
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
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button onClick={handleDelete} variant="destructive">
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete Account
          </Button>
          <Button onClick={handleLogout}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
        <Tabs defaultValue="train">
          <TabsList className="border-b">
            <TabsTrigger value="train">Train</TabsTrigger>
            <TabsTrigger value="bus">Bus</TabsTrigger>
            <TabsTrigger value="flight">Flight</TabsTrigger>
          </TabsList>
          <TabsContent value="train">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Train Ticket</CardTitle>
                  <CardDescription>Booked on 2023-04-15</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>New York to Chicago</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>9:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>5:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>TR-123456</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Train Ticket</CardTitle>
                  <CardDescription>Booked on 2023-03-20</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Los Angeles to San Francisco</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>7:30 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>3:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>TR-654321</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="bus">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bus Ticket</CardTitle>
                  <CardDescription>Booked on 2023-05-01</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Seattle to Portland</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>11:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>3:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>BS-789012</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bus Ticket</CardTitle>
                  <CardDescription>Booked on 2023-04-25</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Boston to New York</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>6:30 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>10:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>BS-456789</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="flight">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Flight Ticket</CardTitle>
                  <CardDescription>Booked on 2023-06-10</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Miami to New York</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>8:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>11:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>FL-147852</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flight Ticket</CardTitle>
                  <CardDescription>Booked on 2023-05-28</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Chicago to San Diego</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>6:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>9:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>FL-369258</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function TrashIcon(props: any) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
