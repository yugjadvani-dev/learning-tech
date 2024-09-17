import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2024 Varni Consultancy</p>
          <nav className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:underline">
              PrivacyPolicy
            </Link>
            <Link to="/terms-of-services" className="hover:underline">
              TermsOfServices
            </Link>
            <Link to="/contact-us" className="hover:underline">
              ContactUs
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
