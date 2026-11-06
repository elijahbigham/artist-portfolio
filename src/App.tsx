import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { categories } from "./worksData";
import WorkPage from "./components/WorkPage/WorkPage";
import ProjectPage from "./pages/Project/Project";

function App() {
  return (
    <>
      <Header />

      <main className="content-width">
        <Routes>
          {categories.map((category) => (
            <Route
              key={category.value}
              path={`/${category.value}`}
              element={<WorkPage categories={[category]} />}
            />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:projectSlug" element={<ProjectPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
