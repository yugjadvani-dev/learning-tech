import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Bus } from "./pages/bus";
import { ContactUs } from "./pages/contact-us";
import { ChackStatus } from "./pages/ChackStatus";
import { Deshboard } from "./pages/deshboard";
import { Flight } from "./pages/flight";
import { Home } from "./pages/home";
import { Loyalty } from "./pages/loyalty";
import { PrivatePolicy } from "./pages/private-policy";
import { Rewards } from "./pages/rewards";
import { Services } from "./pages/services";
import { Train } from "./pages/train";
import { CheckIn } from "./pages/check-in";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/chack-status" element={<ChackStatus />} />
        <Route path="/deshboard" element={<Deshboard />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/train" element={<Train />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
