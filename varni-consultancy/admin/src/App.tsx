import { Route, Routes, useLocation } from "react-router-dom";
import { Blog } from "./pages/blog";
import { CaseStudies } from "./pages/case-studies";
import { DeshBord } from "./pages/desh-bord";
import { Resources } from "./pages/resources";

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/desh-bord" element={<DeshBord />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
};

export default App;
