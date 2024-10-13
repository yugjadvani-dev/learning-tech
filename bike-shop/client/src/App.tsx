import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AboutUs } from "./pages/about-us";
import { Blog } from "./pages/blog";
import { ContactUs } from "./pages/contact-us";
import { Electric } from "./pages/electric";
import { Exchange } from "./pages/exchange";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NewBike } from "./pages/new-bike";
import { NewScooter } from "./pages/new-scooter";
import { Parts } from "./pages/parts";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { Register } from "./pages/register";
import { Review } from "./pages/review";
import { Rides } from "./pages/rides";
import { Services } from "./pages/services";
import Cart from "./pages/Cart";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? null : <Header />}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/review" element={<Review />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/new-scooter" element={<NewScooter />} />
        <Route path="/new-bike" element={<NewBike />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </>
  );
};

export default App;
