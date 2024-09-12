import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/sign-up";

const App = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
