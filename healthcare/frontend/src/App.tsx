import { Route, Routes } from "react-router-dom";
import { About } from "./page.tsx/about";
import { BookAnAppointment } from "./page.tsx/book-an-appointment";
import { Departments } from "./page.tsx/departments";
import { GetInTouch } from "./page.tsx/get-in-touch";
import { HealthCare } from "./page.tsx/health-care";
import { Home } from "./page.tsx/home";
import { LifeInsurance } from "./page.tsx/life-insurance";
import { Login } from "./page.tsx/login";
import { MedicarePlans } from "./page.tsx/medicare-plans";
import { OurCareTeam } from "./page.tsx/our-care-team";
import { Patients } from "./page.tsx/patients";
import { PrivacyPolicy } from "./page.tsx/privacy-policy";
import { Register } from "./page.tsx/register";
import { Services } from "./page.tsx/services";
import { TreatmentPlan } from "./page.tsx/treatment-plan";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
