import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { categories } from "./worksData";
import WorkPage from "./components/WorkPage/WorkPage";

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
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
