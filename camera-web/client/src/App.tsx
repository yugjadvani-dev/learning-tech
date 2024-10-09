import { Route, Routes } from 'react-router-dom'
import { ContactUs } from './pages/contact-us'
import { Digitalslr } from './pages/digital-slr'
import { Lensesdetail } from './pages/lenses-detail'
import { Lenses } from './pages/lenses'
import { Login } from './pages/login'
import { Paymentanddelivery } from './pages/payment-and-delivery-terms'
import { Refundpolicy } from './pages/refund-policy'
import { Register } from './pages/register'
import { Returnrefundpolicy } from './pages/return-refund-policy'
import { Termsandcondition } from './pages/terms-and-condition'
import { Warrantypolicy } from './pages/warranty-policy'
import { Degitalslr } from './pages/degital-slr'
import { AboutUs } from './pages/about-us'
import { Accessories } from './pages/accessories'
import { Cameradetails } from './pages/camera-details'
import { Home } from './pages/home'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/about-us" element={< AboutUs />} />
    <Route path="/accessories" element={< Accessories />} />
    <Route path="/camera-details" element={< Cameradetails />} />
    <Route path="/contact-us" element={< ContactUs />} />
    <Route path="/digital-slr" element={< Degitalslr />} />
    <Route path="/" element={< Home />} />
    <Route path="/lenses-detail" element={< Lensesdetail />} />
    <Route path="/lenses" element={< Lenses />} />
    <Route path="/login" element={<Login />} />
    <Route path="/payment-and-delivery-terms" element={< Paymentanddelivery />} />
    <Route path="/refund-policy" element={< Refundpolicy />} />
    <Route path="/register" element={< Register />} />
    <Route path="/return-refund-policy" element={< Returnrefundpolicy />} />
    <Route path="/terms-and-condition" element={< Termsandcondition />} />
    <Route path="/warranty-policy" element={< Warrantypolicy />} />
    </Routes>
    </>
  )
}

export default App