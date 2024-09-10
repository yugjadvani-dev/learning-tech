import { Route, Routes, useLocation } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { AccountSetting } from "./pages/AccountSetting";
import { ContactUs } from "./pages/ContactUs";
import { Dashboard } from "./pages/Dashboard";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Login } from "./pages/Login";
import { PressRoom } from "./pages/Press-room";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Register } from "./pages/Register";
import { Services } from "./pages/Services";
import { TermsofServices } from "./pages/TermsofServices";
import { UserRating } from "./pages/UserRating";
import { Wishlist } from "./pages/Wishlist";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AccountSetting" element={<AccountSetting />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/" element={<Home />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PressRoom" element={<PressRoom />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/TermsofServices" element={<TermsofServices />} />
        <Route path="/UserRating" element={<UserRating />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default App;
