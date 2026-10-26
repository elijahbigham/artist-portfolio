import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import "./App.scss";
import { categories } from "./worksData";
import WorkPage from "./components/WorkPage/WorkPage";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {categories.map((tag) => (
            <Route
              key={tag}
              path={`/${tag}`}
              element={<WorkPage categories={[tag]} />}
            />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
