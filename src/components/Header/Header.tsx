import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.png" alt="Logo" className="header-logo" />
      </Link>
      <Navigation />
    </header>
  );
}
