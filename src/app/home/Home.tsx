import "./assets/css/Home.css";

function Home(props: any) {
  return (
    <div className="Home">
      <div id="block-container">
        <div className="block large title-block reverse-colour">
          <span className="title-content">
            <b>Jarrett Huang's Web Design Labs</b>
          </span>
        </div>
        <div className="block rectangle-vertical project">
          <span className="redirect-to-project">JSON Viewer</span>
        </div>
        <div
          className="block project"
          onClick={() => props.setApp("colour-picker")}
        >
          <span className="redirect-to-project">Colour Picker</span>
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
