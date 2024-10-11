import auth from '@/hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { user: users }: any = auth();
  console.log("users", users);

  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout Successfully")
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
         <header className="bg-primary text-primary-foreground py-4 px-6 md:px-10 lg:px-16">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
          Movie
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/movieticket" className="hover:underline">
            Movieticket
            </Link>
            <Link to="/paymentinformation" className="hover:underline">
            Paymentinformation
            </Link>
            <Link to="/contact-us" className="hover:underline">
            ContactUs
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {users?.isLogin ?
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button> :
              <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/registration" className="hover:underline">
                Register
              </Link>


              </>
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
