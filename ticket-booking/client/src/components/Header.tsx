import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <>
            {/* <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold">
                        Ticket Booking
                    </Link>
                    <nav className="flex items-center gap-4">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/" className="hover:underline">
                            Bookings
                        </Link>
                        <Link to="/" className="hover:underline">
                            Support
                        </Link>
                        <Button variant="ghost" className="gap-2">
                            <UserIcon className="w-5 h-5" />
                            Account
                        </Button>
                    </nav>
                </div>
            </header> */}
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <BusIcon className="h-6 w-6" />
                        <span className="text-xl font-bold">Bus Booking</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/" className="hover:underline">
                            Destinations
                        </Link>
                        <Link to="/" className="hover:underline">
                            About
                        </Link>
                        <Link to="/" className="hover:underline">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" className="text-black">Sign In</Button>
                        <Button>Sign Up</Button>
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

function BusIcon(props: any) {
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
            <path d="M8 6v6" />
            <path d="M15 6v6" />
            <path d="M2 12h19.6" />
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
            <circle cx="7" cy="18" r="2" />
            <path d="M9 18h5" />
            <circle cx="16" cy="18" r="2" />
        </svg>
    );
}