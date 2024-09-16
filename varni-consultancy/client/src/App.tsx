import { Route, Routes, useLocation } from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { Blog } from "./pages/blog";
import { CaseStudies } from "./pages/case-studies";
import { ContactUs } from "./pages/contact-us";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { Registration } from "./pages/registration";
import { Resources } from "./pages/resources";
import { Services } from "./pages/services";
import { TermsOfServices } from "./pages/terms-of-services";
import { Testimonials } from "./pages/testimonials";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
};

export default App;
