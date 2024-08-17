import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AboutUs } from "./pages/about-us";
import { Bus } from "./pages/bus";
import { ChackStatus } from "./pages/ChackStatus";
import { CheckIn } from "./pages/check-in";
import { ContactUs } from "./pages/contact-us";
import { Dashboard } from "./pages/dashboard";
import { Flight } from "./pages/flight";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Loyalty } from "./pages/loyalty";
import { PrivatePolicy } from "./pages/private-policy";
import { Register } from "./pages/register";
import { Rewards } from "./pages/rewards";
import { Services } from "./pages/services";
import { Train } from "./pages/train";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? null : <Header />}
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/check-status" element={<ChackStatus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/services" element={<Services />} />
        {/* Category */}
        <Route path="/flight" element={<Flight />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/train" element={<Train />} />
      </Routes>
      {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </>
  );
};

export default App;
