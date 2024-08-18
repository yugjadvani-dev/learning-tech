import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { About } from "./pages/about";
import { BookAnAppointment } from "./pages/book-an-appointment";
import { Departments } from "./pages/departments";
import { GetInTouch } from "./pages/get-in-touch";
import { HealthCare } from "./pages/health-care";
import { Home } from "./pages/home";
import { LifeInsurance } from "./pages/life-insurance";
import { Login } from "./pages/login";
import { MedicarePlans } from "./pages/medicare-plans";
import { OurCareTeam } from "./pages/our-care-team";
import { Patients } from "./pages/patients";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { Register } from "./pages/register";
import { Services } from "./pages/services";
import { TreatmentPlan } from "./pages/treatment-plan";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? null : <Header />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/book-an-appointment" element={<BookAnAppointment />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/health-care" element={<HealthCare />} />
        <Route path="/" element={<Home />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicare-plans" element={<MedicarePlans />} />
        <Route path="/our-care-team" element={<OurCareTeam />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tretment-plan" element={<TreatmentPlan />} />
      </Routes>
      {pathname === "/login" || pathname === "/register" ? null : <Footer />}
    </>
  );
};

export default App;
