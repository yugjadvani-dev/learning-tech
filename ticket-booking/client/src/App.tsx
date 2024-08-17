<<<<<<< Updated upstream
import { Route, Routes, useLocation } from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
>>>>>>> Stashed changes
import { AboutUs } from "./pages/about-us";
import { Bus } from "./pages/bus";
import { ChackStatus } from "./pages/ChackStatus";
<<<<<<< Updated upstream
=======
import { CheckIn } from "./pages/check-in";
import { ContactUs } from "./pages/contact-us";
import { Deshboard } from "./pages/deshboard";
>>>>>>> Stashed changes
import { Flight } from "./pages/flight";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Loyalty } from "./pages/loyalty";
import { PrivatePolicy } from "./pages/private-policy";
import { Register } from "./pages/register";
import { Rewards } from "./pages/rewards";
import { Services } from "./pages/services";
import { Train } from "./pages/train";
<<<<<<< Updated upstream
import { CheckIn } from "./pages/check-in";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Dashboard } from "./pages/dashboard";
=======
>>>>>>> Stashed changes

const App = () => {
  const {pathname} = useLocation()

  return (
    <>
<<<<<<< Updated upstream
      {pathname === '/login' || pathname === '/register' ? null : <Header />}
=======
      <Header />
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/chack-status" element={<ChackStatus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/train" element={<Train />} />
      </Routes>
<<<<<<< Updated upstream
      {pathname === '/login' || pathname === '/register' ? null : <Footer />}
=======
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

export default App;
