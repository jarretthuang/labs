import "./assets/css/Home.css";
import raninbowLogo from "./assets/img/rainbow.png";
import jsonLogo from "./assets/img/code.png";
import jhLogo from "./../assets/img/jh.png";

function Home(props: any) {
  return (
    <div className="Home">
      <div className="block-container">
        <div className="block large title-block reverse-colour">
          <a href="https://labs.jhuang.ca">
            <img className="jh-logo" src={jhLogo} alt="Logo" />
          </a>
          <span className="title-content">
            Jarrett Huang's
            <br />
            Web Design Labs
          </span>
        </div>
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
        <div
          className="block project"
          onClick={() => props.navigate("colour-picker")}
        >
          <img className="app-logo" src={raninbowLogo} alt="Logo" />
          <span className="app-name">Colour Picker</span>
        </div>
        <div className="block rectangle"></div>
        <div className="block empty"></div>
        <div className="block one-by-three"></div>
        <div className="block"></div>
      </div>
    </div>
  );
}

export default Home;
