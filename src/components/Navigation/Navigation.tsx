import { Link } from "react-router";
import "./Navigation.scss";
export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
