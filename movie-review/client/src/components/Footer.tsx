import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Site</h3>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Reviews</Link>
          <Link to={"/"}>Genres</Link>
          <Link to={"/"}>About</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Categories</h3>
          <Link to={"/"}>Action</Link>
          <Link to={"/"}>Comedy</Link>
          <Link to={"/"}>Drama</Link>
          <Link to={"/"}>Horror</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link to={"/"}>Blog</Link>
          <Link to={"/"}>FAQ</Link>
          <Link to={"/"}>Contact</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
