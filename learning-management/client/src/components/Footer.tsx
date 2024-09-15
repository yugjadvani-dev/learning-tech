import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 LMS Affiliate. All rights reserved.
          </p>
          <nav className="hidden space-x-4 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
};

export default Footer;
