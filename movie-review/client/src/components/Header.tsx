import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-4 lg:px-6 h-14 flex items-center">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Movie Reviews
        </Link>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to={"/"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Reviews
        </Link>
        <Link
          to={"/"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Genres
        </Link>
        <Link
          to={"/"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to={"/"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

function FilmIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}
