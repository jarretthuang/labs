import "./assets/css/Home.css";
import raninbowLogo from "./assets/img/rainbow.png";
import jsonLogo from "./assets/img/code.png";
import jhLogo from "./../../assets/img/jh.png";
import jhLogoWide from "./../../assets/img/jhLabsLogoWideVector.png";
import cubeLogo from "./assets/img/icecube.png";
import WaveUi from "../common/ui/wave/Wave";
import { useState } from "react";

function Home(props: any) {
  const titleBlock = () => {
    return (
      <div className="block large title-block">
        <div className="logo-container">
          <img className="jh-logo desktop-only" src={jhLogo} alt="Logo" />
          <img
            className="jh-logo wide mobile-only"
            src={jhLogoWide}
            alt="Logo"
          />
        </div>
        <span className="title-content desktop-only">
          Jarrett Huang's
          <br />
          Web Design Labs
        </span>
      </div>
    );
  };

  const jsonViewerApp = () => {
    return (
      <div
        className="block rectangle-vertical project"
        onClick={() =>
          window.open("https://json.jhuang.ca", "_blank", "noreferrer")
        }
      >
        <img
          className="app-logo mobile-only logo-xl"
          src={jsonLogo}
          alt="Logo"
        />
        <div className="app-name json">
          <span className="brace-open">{"{"}</span>
          <span className="json-viewer">{"JSON: Viewer"}</span>
          <span className="brace-close">{"}"}</span>
        </div>
      </div>
    );
  };

  const colourPickerApp = () => {
    return (
      <div
        className="block project"
        onClick={() => props.navigate("colour-picker")}
      >
        <img className="app-logo" src={raninbowLogo} alt="Logo" />
        <span className="app-name">Colour Picker</span>
      </div>
    );
  };

  const threeApp = () => {
    return (
      <div className="block project" onClick={() => props.navigate("three")}>
        <img className="app-logo" src={cubeLogo} alt="Logo" />
        <span className="app-name">Three</span>
      </div>
    );
  };

  const [isAboutMeHovered, setAboutMeHovered] = useState(false);
  const aboutMe = () => {
    return (
      <div
        className="block project rectangle"
        onMouseEnter={() => setAboutMeHovered(true)}
        onMouseLeave={() => setAboutMeHovered(false)}
        onTouchStart={() => setAboutMeHovered(true)}
        onTouchEnd={() => setAboutMeHovered(false)}
        onClick={() => window.open("https://jhuang.ca", "_blank")}
      >
        <img
          className="app-logo image logo-xl"
          src="https://avatars2.githubusercontent.com/u/13912692"
          alt="JH"
        />
        <WaveUi
          className="app-name font-xl"
          text="about me"
          isHovered={isAboutMeHovered}
        ></WaveUi>
      </div>
    );
  };

  return (
    <div className="Home">
      <div className="block-container">
        {titleBlock()}
        {jsonViewerApp()}
        {colourPickerApp()}
        {threeApp()}
        {/* <div className="block one-by-three"></div> */}
        {aboutMe()}
      </div>
    </div>
  );
}

export default Home;
