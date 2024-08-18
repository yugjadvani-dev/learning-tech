import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AboutUs } from "./page.tsx/about-us";
import { AffiliateProgram } from "./page.tsx/affiliate-program";
import { Blog } from "./page.tsx/blog";
import { BookDemo } from "./page.tsx/book-demo";
import { ContactUs } from "./page.tsx/contact-us";
import { CookiePolicy } from "./page.tsx/cookie-policy";
import { Hardware } from "./page.tsx/hardware";
import { Home } from "./page.tsx/home";
import { Integration } from "./page.tsx/integration";
import { Login } from "./page.tsx/login";
import { Pricing } from "./page.tsx/pricing";
import { PrivacyCenter } from "./page.tsx/privacy-center";
import { SecurityPrivacy } from "./page.tsx/security-privacy";
import { SuccessStories } from "./page.tsx/success-stories";
import { Support } from "./page.tsx/support";

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
