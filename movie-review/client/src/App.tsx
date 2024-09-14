import { Route, Routes, useLocation } from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { AccountSetting } from "./pages/account-setting";
import { Contact } from "./pages/contact-us";
import { Dashboard } from "./pages/dashboard";
import { FAQ } from "./pages/faq";
import { Home } from "./pages/home";
import { Jobs } from "./pages/jobs";
import { Login } from "./pages/login";
import { PressRoom } from "./pages/press-room";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { Register } from "./pages/register";
import { Services } from "./pages/services";
import { TermsofServices } from "./pages/terms-of-services";
import { UserRating } from "./pages/user-rating";
import { Wishlist } from "./pages/wishlist";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/press-room" element={<PressRoom />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-services" element={<TermsofServices />} />
        <Route path="/user-rating" element={<UserRating />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default App;
