import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to={'/'} className="flex items-center justify-center" >
          <CalendarIcon className="h-6 w-6" />
          <span className="sr-only">Event Management</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to={'/'} className="text-sm font-medium hover:underline underline-offset-4" >
            Events
          </Link>
          <Link to={'/'} className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </Link>
          <Link to={'/'} className="text-sm font-medium hover:underline underline-offset-4" >
            Services
          </Link>
          <Link to={'/'} className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </Link>
        </nav>
      </header>
  )
}

export default Header

function CalendarIcon(props:any) {
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
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }