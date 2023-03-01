import { NavBarParams } from "./NavBarParams";
import "./assets/css/NavBar.css";
import jhLogoBW from "./assets/img/jhLogoBW.png";
import { useState } from "react";

function NavBar(props: NavBarParams) {
  const [expanded, expand] = useState(false);
  const expandedClass = expanded ? "expanded" : "";
  const darkThemeClass = props.isDarkTheme ? "dark-theme" : "";
  const allClassName = ["NavBar ", expandedClass, darkThemeClass].join(" ");

  return (
    <nav className={allClassName}>
      <ul>
        <li className="jh-logo">
          <img className="jh-logo-bw" src={jhLogoBW} alt="JH" />
        </li>
        <li className="handle" onClick={() => expand(!expanded)}>
          <span className="handle-symbol">+</span>
        </li>
        <li className="expanded-content">
          <span>Coming soon!</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
