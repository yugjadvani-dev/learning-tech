import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export function AccountSetting() {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<User | null>(null);
  console.log("user", user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2222/api/auth/user/${users?._id}`
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
        `http://localhost:2222/api/auth/user/${users?._id}`,
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
        `http://localhost:2222/api/auth/user/${users?._id}`
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
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        >
          <FilmIcon className="w-6 h-6" />
          <span className="sr-only">Movie Ratings</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link to="/" className="text-muted-foreground">
            Home
          </Link>
          <Link to="/" className="text-muted-foreground">
            Movies
          </Link>
          <Link to="/" className="text-muted-foreground">
            Reviews
          </Link>
          <Link to="/" className="font-bold">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Account Settings</h1>
        </div>
        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
          <nav className="text-sm text-muted-foreground grid gap-4">
            <Link to="/" className="font-semibold text-primary">
              Profile
            </Link>
            <Link to="/">Password</Link>
            <Link to="/">Movie Ratings</Link>
            <Link to="/">Reviews</Link>
          </nav>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Update your profile picture, name, and email.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-2">
                      <div className="grid gap-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid gap-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 flex items-center gap-4">
                  <Button type="submit">Save Changes</Button>
                  <Button type="button" onClick={handleLogout}>
                    Logout
                  </Button>
                  <Button type="button" onClick={handleDelete}>
                    Delete Profile
                  </Button>
                </CardFooter>
              </Card>
            </form>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your account password.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-1">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Change Password</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Movie Ratings</CardTitle>
                <CardDescription>
                  View and edit your movie ratings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/the-shawshank-redemption.jpg"
                        width="64"
                        height="64"
                        alt="Movie Poster"
                        className="rounded"
                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                      />
                      <div className="grid gap-1">
                        <div className="font-medium">
                          The Shawshank Redemption
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Rated: 4.5/5
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Edit Rating</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Delete Rating</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/movie-1.jpg"
                        width="64"
                        height="64"
                        alt="Movie Poster"
                        className="rounded"
                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                      />
                      <div className="grid gap-1">
                        <div className="font-medium">Inception</div>
                        <div className="text-sm text-muted-foreground">
                          Rated: 4.8/5
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Edit Rating</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Delete Rating</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Add New Rating</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
                <CardDescription>
                  View and edit your movie reviews.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/movie-2.jpg"
                        width="64"
                        height="64"
                        alt="Movie Poster"
                        className="rounded"
                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                      />
                      <div className="grid gap-1">
                        <div className="font-medium">The Dark Knight</div>
                        <div className="text-sm text-muted-foreground">
                          Rated: 5/5
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          This is one of the best superhero movies I've ever
                          seen. The acting, the plot, the action - everything is
                          top-notch.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Edit Review</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Delete Review</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/movie-1.jpg"
                        width="64"
                        height="64"
                        alt="Movie Poster"
                        className="rounded"
                        style={{ aspectRatio: "64/64", objectFit: "cover" }}
                      />
                      <div className="grid gap-1">
                        <div className="font-medium">Interstellar</div>
                        <div className="text-sm text-muted-foreground">
                          Rated: 4.5/5
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          A visually stunning and thought-provoking sci-fi
                          masterpiece. The performances and the score are
                          exceptional.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Edit Review</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Delete Review</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-6">
                <Button>Add New Review</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function FilmIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}
