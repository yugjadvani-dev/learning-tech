import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { AboutUs } from "./pages/about-us"
import { AddEvent } from "./pages/add-event"
import { ContactUs } from "./pages/contact-us"
import { EventDetails } from "./pages/event-details"
import { Faq } from "./pages/faq"
import { Feedback } from "./pages/feedback"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { PrivatePolicy } from "./pages/private-policy"
import { Profile } from "./pages/profile"
import { Register } from "./pages/register"
import { Services } from "./pages/services"
import { Settings } from "./pages/settings"
import { TermsAndConditions } from "./pages/terms-and-conditions"
import { UpcomingEvents } from "./pages/upcoming-events"

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/add-event" element={<AddEvent/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/event-details" element={<EventDetails/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/private-policy" element={<PrivatePolicy/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/terms-and-condition" element={<TermsAndConditions/>} />
      <Route path="/upcoming-events" element={<UpcomingEvents/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
