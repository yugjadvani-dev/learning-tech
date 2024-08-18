import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 HealthCare. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
