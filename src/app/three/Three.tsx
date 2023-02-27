import { Helmet } from "react-helmet-async";
import "./assets/css/Three.css";

function Three() {
  return (
    <div className="Three">
      <Helmet>
        <title>Three - JH Labs</title>
        {/* <meta name="theme-color" content={currentColour.hex} /> */}
      </Helmet>
      <div className="three-container">test</div>
    </div>
  );
}

export default Three;
