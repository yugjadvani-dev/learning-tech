import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";

const App = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
