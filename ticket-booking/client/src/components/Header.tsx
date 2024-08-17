import auth from "@/hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  const { user } = auth();
  return (
    <>
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <TicketIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Ticket Booking</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/check-in" className="hover:underline">
              Check In
            </Link>
            <Link to="/check-status" className="hover:underline">
              Check Staus
            </Link>
            <Link to="/loyalty" className="hover:underline">
              Loyalty
            </Link>
            <Link to="/rewards" className="hover:underline">
              Rewards
            </Link>
            <Link to="/about-us" className="hover:underline">
              About
            </Link>
            <Link to="/contact-us" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {!user?.isLogin ? (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  variant="outline"
                  className="text-black"
                >
                  Sign In
                </Button>
                <Button onClick={() => navigate("/register")}>Sign Up</Button>
              </>
            ) : (
              <Button
                onClick={() => navigate("/dashboard")}
                variant="ghost"
                className="gap-2"
              >
                <UserIcon className="w-5 h-5" />
                Account
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TicketIcon(props: any) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}
