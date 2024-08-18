import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link to="/">About Us</Link>
            <Link to="/">Our Team</Link>
            <Link to="/">Careers</Link>
            <Link to="/">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link to="/">Fitness Tracker</Link>
            <Link to="/">Smartwatch</Link>
            <Link to="/">Accessories</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link to="/">Blog</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Support</Link>
            <Link to="/">FAQs</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Affiliate</h3>
            <Link to="/">Program Details</Link>
            <Link to="/">Become an Affiliate</Link>
            <Link to="/">Affiliate Dashboard</Link>
            <Link to="/">Affiliate FAQ</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
