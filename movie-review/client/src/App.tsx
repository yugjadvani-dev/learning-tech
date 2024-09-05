import { Route, Routes, useLocation } from "react-router-dom";
import { AboutUs } from "./components/pages/AboutUs";
import { AccountSetting } from "./components/pages/AccountSetting";
import { ContactUs } from "./components/pages/ContactUs";
import { Dashboard } from "./components/pages/Dashboard";
import { FAQ } from "./components/pages/FAQ";
import { Home } from "./components/pages/Home";
import { Jobs } from "./components/pages/Jobs";
import { Login } from "./components/pages/Login";
import { PressRoom } from "./components/pages/Press-room";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { Register } from "./components/pages/Register";
import { Services } from "./components/pages/Services";
import { TermsofServices } from "./components/pages/TermsofServices";
import { UserRating } from "./components/pages/UserRating";
import { Wishlist } from "./components/pages/Wishlist";

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
