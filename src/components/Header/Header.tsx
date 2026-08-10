import "./Header.scss";
import Navigation from "../Navigation/Navigation";
export default function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Logo" className="header-logo" />
      <Navigation />
    </header>
  );
}
