import auth from "@/hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { user }: any = auth();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center gap-4">
      <Link to={"/"} className="flex items-center justify-center">
        <CalendarIcon className="h-6 w-6" />
        <span className="sr-only">Event Management</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to={"/event-details"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Events
        </Link>
        <Link
          to={"/about-us"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to={"/profile"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Profile
        </Link>
        <Link
          to={"/services"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Services
        </Link>
        <Link
          to={"/contact-us"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
        {user?.isLogin ? (
          <button
            onClick={handleLogout}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Login
          </Link>
        )}
      </nav>
      {user?.isLogin ? (
        <div className="flex items-center gap-4 ml-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>{user?.name?.toString(2)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">{user?.name}</h1>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;

function CalendarIcon(props: any) {
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
    </svg>
  );
}
