import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.scss";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
