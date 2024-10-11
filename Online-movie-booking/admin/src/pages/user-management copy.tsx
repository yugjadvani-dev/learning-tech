import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/sidebar";
import axios from "axios";

export function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     bookings: [
  //       { id: 1, service: "Haircut", date: "2023-05-01", status: "Completed" },
  //       { id: 2, service: "Massage", date: "2023-04-15", status: "Cancelled" },
  //       { id: 3, service: "Facial", date: "2023-03-20", status: "Upcoming" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     phone: "987-654-3210",
  //     bookings: [
  //       { id: 1, service: "Manicure", date: "2023-06-01", status: "Completed" },
  //       { id: 2, service: "Pedicure", date: "2023-05-15", status: "Completed" },
  //       { id: 3, service: "Waxing", date: "2023-04-20", status: "Cancelled" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     email: "bob@example.com",
  //     phone: "555-555-5555",
  //     bookings: [
  //       { id: 1, service: "Haircut", date: "2023-06-10", status: "Upcoming" },
  //       { id: 2, service: "Massage", date: "2023-05-25", status: "Completed" },
  //       { id: 3, service: "Facial", date: "2023-04-30", status: "Completed" },
  //     ],
  //   },
  // ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7777/api/auth/users`
        );
        console.log("response", response.data);
        setUsers(response.data);
        let isLogin = true;
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data, isLogin })
        );
        // setFormData({
        //   firstname: response.data.user.firstname,
        //   lastname: response.data.user.lastname,
        //   email: response.data.user.email,
        //   password: response.data.user.password,
        // });
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    fetchUser();
  }, []);

  const filteredUsers = useMemo(() => {
    return users?.filter(
      (user) =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentUsers",currentUsers);
  const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const [editingUser, setEditingUser] = useState<any>(null);
  const handleEditUser = (user: any) => {
    setEditingUser(user);
  };
  const handleSaveUser = (updatedUser: any) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };
  const handleDeleteUser = (userId: any) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="container mx-auto py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">User Management</h1>
          <div className="flex items-center">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-4 w-64"
            />
            <Select value={itemsPerPage} className="w-24" onValueChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Select>
          </div>
        </div>
        <div className="overflow-x-auto">
          {currentUsers?.length === 0 ?
            <p>No Data Found</p> :
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Bookings</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentUsers?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.number}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEditUser(user)}>
                        View Bookings
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEditUser(user)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          }
        </div>
        <div className="mt-6 flex justify-end">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
        {editingUser && (
          <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
            <DialogContent className="w-full max-w-md">
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
              </DialogHeader>
              <div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      defaultValue={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      defaultValue={editingUser.phone}
                      onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditingUser(null)}>
                  Cancel
                </Button>
                <Button onClick={() => handleSaveUser(editingUser)}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        {editingUser && (
          <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
            <DialogContent className="w-full max-w-4xl">
              <DialogHeader>
                <DialogTitle>Booking History for {editingUser.name}</DialogTitle>
              </DialogHeader>
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {editingUser.bookings.map((booking: any) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.service}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              booking.status === "Completed"
                                ? "secondary"
                                : booking.status === "Cancelled"
                                  ? "destructive"
                                  : "default"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setEditingUser(null)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
