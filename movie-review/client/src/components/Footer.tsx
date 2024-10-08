import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Site</h3>
          <Link to={"/about-us"}>AboutUs</Link>
          <Link to={"/faq"}>FAQ</Link>
          <Link to={"/services"}>Services</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Categories</h3>
          <Link to={"/privacy-policy"}>PrivacyPolicy</Link>
          <Link to={"/terms-of-services"}>Terms of Services</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
