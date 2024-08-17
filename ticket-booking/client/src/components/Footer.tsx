import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-4 px-6 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Ticket Booking</p>
        <nav className="flex items-center gap-4">
          <Link to="/private-policy" className="hover:underline">
            Privacy
          </Link>
          <Link to="/services" className="hover:underline">
            Terms
          </Link>
          <Link to="/contact-us" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
