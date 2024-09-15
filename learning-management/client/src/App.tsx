import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AboutUs } from "./pages/about-us";
import { AccessibilityStatement } from "./pages/accessibility-statement";
import { Affiliate } from "./pages/affiliate";
import { Blog } from "./pages/blog";
import { ContactUs } from "./pages/contact-us";
import { Events } from "./pages/events";
import { Featured } from "./pages/featured";
import { FeaturedTopic } from "./pages/featured-topic";
import { Home } from "./pages/home";
import { Press } from "./pages/press";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Stories } from "./pages/stories";
import { TermsOfServices } from "./pages/terms-of-services";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Header />}
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route
          path="/accessibility-statement"
          element={<AccessibilityStatement />}
        />
        <Route path="/featured" element={<Featured />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/press" element={<Press />} />
        <Route path="/feaured-topic" element={<FeaturedTopic />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Footer />}
    </>
  );
};

export default App;
