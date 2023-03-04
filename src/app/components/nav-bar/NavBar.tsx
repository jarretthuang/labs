import _ from "lodash";
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

  const hexPercent75 = "BF";
  const hexPercent90 = "E6";
  const getColourOrTransparent = (
    colour: string | undefined,
    opacity: string
  ) => {
    return _.isUndefined(colour) ? "transparent" : colour + opacity;
  };

  const backgroundColour = expanded
    ? getColourOrTransparent(props.backgroundColour, hexPercent90)
    : getColourOrTransparent(props.currentApp?.themeColour, hexPercent75);

  const renderContent = () => {
    const metadata = props.currentApp?.metadata;
    if (_.isUndefined(metadata)) {
      return (
        <div className="content">
          <span className="title">Coming soon!</span>
        </div>
      );
    } else {
      return (
        <div className="content">
          <span className="title">{metadata.displayName}</span>
          <span>{metadata.description}</span>
        </div>
      );
    }
  };

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
          {renderContent()}
          <Copyright />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
