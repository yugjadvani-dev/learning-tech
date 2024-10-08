import { useNavigate } from 'react-router-dom';
import React from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom";
import auth from '../../hooks/auth';

function Navbar() {
  const { user: users } = auth();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <header className={style.header}>
        <a href="/" className={style.logo}>StepStone</a>
        <nav className={style.navbar}>
          <Link to="/">Home</Link>
          {users?.isLogin ? (
            <button style={{color:"#FFF"}} onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )
          }
          <Link to="/Contect">Contect</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kid">Kid</Link>
          <Link to="/snkrs">Snkrs</Link>
          <Link to="/specialedition">Special Edition</Link>


        </nav>

        <div className={style.right_btns_section}>
          <div className={style.cart_section}>
            <Link to="/cart"><button className={style.cart}><i class="fa-solid fa-cart-shopping"></i></button></Link>
          </div>
        </div>

      </header>



    </div>

  )
}

export default Navbar
