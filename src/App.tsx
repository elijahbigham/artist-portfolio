import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navigation from "./components/Navigation/Navigation";

import "./App.scss";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
