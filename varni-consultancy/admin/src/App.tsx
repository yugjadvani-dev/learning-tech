import { Route, Routes, useLocation } from "react-router-dom";
import { Blog } from "./pages/blog";
import { CaseStudies } from "./pages/case-studies";
import { DeshBord } from "./pages/desh-bord";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Resources } from "./pages/resources";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/" element={<DeshBord />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};

export default App;
