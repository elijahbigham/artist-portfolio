import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
