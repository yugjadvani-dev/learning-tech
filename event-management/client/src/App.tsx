import { Route, Routes } from "react-router-dom"
import { AboutUs } from "./pages/about-us"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/about-us" element={<AboutUs/>} />
    </Routes>
    </>
  )
}

export default App
