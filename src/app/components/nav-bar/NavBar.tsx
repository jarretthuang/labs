import "./assets/css/NavBar.css";
import jhLogoBW from "./assets/img/jhLogoBW.png";
import { useState } from "react";

function NavBar() {
  const [expanded, expand] = useState(false);
  const expandedClass = expanded ? "expanded" : "";

  return (
    <nav className={"NavBar " + expandedClass}>
      <ul>
        <li className="jh-logo" onClick={() => expand(!expanded)}>
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
