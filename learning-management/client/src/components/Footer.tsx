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
              to="/feaured-topic"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              FeaturedTopic
            </Link>
            <Link
              to="/press"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Press
            </Link>
            <Link
              to="/stories"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Stories
            </Link>
            <Link
              to="/featured"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Featured
            </Link>
            <Link
              to="/terms-of-services"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact-us"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
