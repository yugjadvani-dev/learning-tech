import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar.jsx"
import Main from "./componets/Main.jsx"
import Contact from "./componets/pages/Contact.jsx";
import Signup from "./componets/pages/Signup.jsx";
import Login from "./componets/pages/login.jsx";
import Aboutus from "./componets/pages/Aboutus.jsx";
import Men  from "./componets/pages/Men.jsx";
import Women  from "./componets/pages/Women.jsx";
import Kid from "./componets/pages/Kid.jsx";
import Snkers from "./componets/pages/Snkers.jsx";
import SpecialEdition from "./componets/pages/SpecialEdition.jsx";
import Cart from "./componets/Cart.jsx";
function App() {
    return (
      <Router>
        <Navbar />
        <div>
          
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Contect" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kid" element={<Kid />} />
            <Route path="/snkrs" element={<Snkers />} />
            <Route path="/specialedition" element={<SpecialEdition />} />
            <Route path="/cart" element={< Cart />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App
