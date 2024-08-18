import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 HealthCare. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
        <Link to="/medicare-plans" className="text-muted-foreground hover:text-primary">
            Medicare-plan
          </Link>
          <Link to="/our-care-team" className="text-muted-foreground hover:text-primary">
            our-care-team
          </Link>
          <Link to="/patients" className="text-muted-foreground hover:text-primary">
            patients
          </Link>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
            privacy-policy
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-primary">
            services
          </Link>
          <Link to="/treatment-plan" className="text-muted-foreground hover:text-primary">
            treatment-plan
          </Link>
          <Link to="/get-in-touch" className="text-muted-foreground hover:text-primary">
            get-in-touch
          </Link>
          <Link to="/health-care" className="text-muted-foreground hover:text-primary">
            Healthcare
          </Link>
          <Link to="/life-insurance" className="text-muted-foreground hover:text-primary">
            Life-insurance
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
