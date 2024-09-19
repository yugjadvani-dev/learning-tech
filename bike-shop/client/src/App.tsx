import { Route, Routes, useLocation } from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { Blog } from "./pages/blog";
import { ContactUs } from "./pages/contact-us";
import { Services } from "./pages/services";
import { Rides } from "./pages/rides";
import { Review } from "./pages/review";
import { Register } from "./pages/register";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { Parts } from "./pages/parts";
import { NewScooter } from "./pages/new-scooter";
import { NewBike } from "./pages/new-bike";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Exchange } from "./pages/exchange";
import { Electric } from "./pages/electric";


const App = () => {
  const { pathname } = useLocation();

  return (
    <>
     
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
      </Routes>
    </>
  );
};

export default App;