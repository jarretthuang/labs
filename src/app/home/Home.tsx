import "./assets/css/Home.css";
import raninbowLogo from "./assets/img/rainbow.png";
import jsonLogo from "./assets/img/code.png";
import jhLogo from "./../assets/img/jh.png";
import cubeLogo from "./assets/img/icecube.png";

function Home(props: any) {
  const titleBlock = () => {
    return (
      <div className="block large title-block reverse-colour">
        <a className="visible-on-hover-parent" href="https://jhuang.ca">
          <img className="jh-logo" src={jhLogo} alt="Logo" />
          {/* <div className="visible-on-hover main-site-redirect">
      <div className="main-site-redirect-msg">To jhuang.ca</div>
    </div> */}
        </a>
        <span className="title-content">
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
        onClick={() => props.navigate("json-viewer")}
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

  return (
    <div className="Home">
      <div className="block-container">
        {titleBlock()}
        {jsonViewerApp()}
        {colourPickerApp()}
        {threeApp()}
        <div className="block rectangle"></div>
        <div className="block empty"></div>
        <div className="block one-by-three"></div>
      </div>
    </div>
  );
}

export default Home;
