import "./Footer.scss";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="content-width">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {/*{categories.map((category) => (
            <NavLink key={category.value} to={`/${category.value}`}>
              {category.label}
            </NavLink>
          ))}*/}
        </nav>
      </div>
    </footer>
  );
}
