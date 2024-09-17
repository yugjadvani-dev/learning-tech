import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DeshBord() {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<any>(null);
  console.log("user", user);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/auth/admin/${users?._id}`
        );
        console.log("response", response);
        setUser(response.data.user);
        let isLogin = true;
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.user, isLogin })
        );
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

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header />
      <main className="flex flex-1 gap-4 p-4 md:p-6">
        <Sidebar />
        <div className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="grid gap-4">
            <CardHeader>
              <CardTitle>Total Clients</CardTitle>
              <CardDescription>All active and inactive clients</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">243</div>
              <UsersIcon className="h-10 w-10 text-primary" />
            </CardContent>
          </Card>
          <Card className="grid gap-4">
            <CardHeader>
              <CardTitle>Ongoing Projects</CardTitle>
              <CardDescription>Current active projects</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">17</div>
              <BriefcaseIcon className="h-10 w-10 text-primary" />
            </CardContent>
          </Card>
          <Card className="grid gap-4">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Total employees</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">54</div>
              <UsersIcon className="h-10 w-10 text-primary" />
            </CardContent>
          </Card>
          <Card className="grid gap-4">
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardDescription>Year-to-date earnings</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">$1.2M</div>
              <DollarSignIcon className="h-10 w-10 text-primary" />
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 grid gap-4">
            <CardHeader>
              <CardTitle>Clients</CardTitle>
              <CardDescription>
                View and manage client information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Acme Inc.</div>
                      <div className="text-sm text-muted-foreground">
                        contact@acme.com
                      </div>
                    </TableCell>
                    <TableCell>+1 (555) 555-5555</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Globex Corporation</div>
                      <div className="text-sm text-muted-foreground">
                        info@globex.com
                      </div>
                    </TableCell>
                    <TableCell>+1 (555) 555-5556</TableCell>
                    <TableCell>
                      <Badge variant="outline">Inactive</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Stark Industries</div>
                      <div className="text-sm text-muted-foreground">
                        info@stark.com
                      </div>
                    </TableCell>
                    <TableCell>+1 (555) 555-5557</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 grid gap-4">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                View and manage ongoing and completed projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Website Redesign</div>
                      <div className="text-sm text-muted-foreground">
                        Acme Inc.
                      </div>
                    </TableCell>
                    <TableCell>Acme Inc.</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ongoing</Badge>
                    </TableCell>
                    <TableCell>2023-03-01</TableCell>
                    <TableCell>2023-06-30</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Close</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Mobile App Development</div>
                      <div className="text-sm text-muted-foreground">
                        Globex Corporation
                      </div>
                    </TableCell>
                    <TableCell>Globex Corporation</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ongoing</Badge>
                    </TableCell>
                    <TableCell>2023-01-15</TableCell>
                    <TableCell>2023-07-31</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Close</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">ERP Implementation</div>
                      <div className="text-sm text-muted-foreground">
                        Stark Industries
                      </div>
                    </TableCell>
                    <TableCell>Stark Industries</TableCell>
                    <TableCell>
                      <Badge variant="outline">Completed</Badge>
                    </TableCell>
                    <TableCell>2022-09-01</TableCell>
                    <TableCell>2023-02-28</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 grid gap-4">
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>
                View and manage your team members and their profiles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-muted-foreground">
                        Project Manager
                      </div>
                    </TableCell>
                    <TableCell>Project Manager</TableCell>
                    <TableCell>john@varni.com</TableCell>
                    <TableCell>+1 (555) 555-5555</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">
                        UI/UX Designer
                      </div>
                    </TableCell>
                    <TableCell>UI/UX Designer</TableCell>
                    <TableCell>jane@varni.com</TableCell>
                    <TableCell>+1 (555) 555-5556</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={"default"} />
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

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

function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
