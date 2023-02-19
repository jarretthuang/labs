import "./assets/css/Home.css";
import raninbowLogo from "./assets/img/rainbow.png";

function Home(props: any) {
  return (
    <div className="Home">
      <div id="block-container">
        <div className="block large title-block reverse-colour">
          <span className="title-content">
            <b>Jarrett Huang's Web Design Labs</b>
          </span>
        </div>
        <div
          className="block rectangle-vertical project"
          onClick={() => props.navigate("json-viewer")}
        >
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
