import { Router } from "lucide-react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactUs } from "./pages/contact-us";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Movieticket } from "./pages/movieticket";
import { Paymentinformation } from "./pages/paymentinformation";
import { Registration } from "./pages/registration";
import { Showtime } from "./pages/showtime";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfCondition } from "./pages/terms-of-condition";
import Header from "./components/header";
import Footer from "./components/Footer";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
    {pathname === "/login" || pathname === "/register" ? null : <Header />}
     <Routes>
     <Route path="/contact-us" element={<ContactUs />} />
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/movieticket" element={<Movieticket />} />
     <Route path="/paymentinformation" element={<Paymentinformation />} />
     <Route path="/registration" element={<Registration />} />
     <Route path="/showtime" element={<Showtime />} />
     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     <Route path="/terms-of-condition" element={<TermsOfCondition />} />
     </Routes>
     {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </>
  );
};

export default App;
