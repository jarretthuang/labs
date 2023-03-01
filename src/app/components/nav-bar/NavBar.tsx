import Copyright from "../copyright/Copyright";
import { NavBarParams } from "./NavBarParams";
import "./assets/css/NavBar.css";
import jhLogoBW from "./assets/img/jhLogoBW.png";
import { useState } from "react";

function NavBar(props: NavBarParams) {
  const [expanded, expand] = useState(false);
  const expandedClass = expanded ? "expanded" : "";
  const darkThemeClass = props.isDarkTheme ? "dark-theme" : "";
  const allClassName = ["NavBar", expandedClass, darkThemeClass].join(" ");
  const opacity = "90";
  const backgroundColour = expanded
    ? props.backgroundColour + opacity
    : "transparent";

  return (
    <nav
      className={allClassName}
      style={{
        backgroundColor: backgroundColour,
      }}
    >
      <ul>
        <li className="jh-logo" onClick={props.goHome}>
          <img className="jh-logo-bw" src={jhLogoBW} alt="JH" />
        </li>
        <li className="handle" onClick={() => expand(!expanded)}>
          <span className="handle-symbol">+</span>
        </li>
        <li className="expanded-content">
          <span>Coming soon!</span>
          <Copyright />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
