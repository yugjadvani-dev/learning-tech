import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AboutUs } from "./pages/about-us";
import { AffiliateProgram } from "./pages/affiliate-program";
import { Blog } from "./pages/blog";
import { BookDemo } from "./pages/book-demo";
import { ContactUs } from "./pages/contact-us";
import { CookiePolicy } from "./pages/cookie-policy";
import { Hardware } from "./pages/hardware";
import { Home } from "./pages/home";
import { Integration } from "./pages/integration";
import { Login } from "./pages/login";
import { Pricing } from "./pages/pricing";
import { PrivacyCenter } from "./pages/privacy-center";
import { SecurityPrivacy } from "./pages/security-privacy";
import { SuccessStories } from "./pages/success-stories";
import { Support } from "./pages/support";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/login" || pathname === "/book-demo" ? null : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-center" element={<PrivacyCenter />} />
        <Route path="/security-privacy" element={<SecurityPrivacy />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      {pathname === "/login" || pathname === "/book-demo" ? null : <Footer />}
    </>
  );
};

export default App;
