import auth from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const { user: users }: any = auth();
  console.log("users", users);
  const [user, setUser] = useState<any>(null);
  console.log("user", user);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/auth/user/${users?._id}`
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
    <>
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">Varni Consultancy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/about-us" className="hover:underline">
              AboutUs
            </Link>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
            <Link to="/case-studies" className="hover:underline">
              CaseStudies
            </Link>
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
            <Link to="/contact-us" className="hover:underline">
              ContactUs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-black">
              Get a Quote
            </Button>
            {users?.isLogin ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button onClick={() => navigate("/login")}>Login</Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
