import { useState } from "react";
import "./assets/css/App.css";
import Copyright from "./Copyright";
import Home from "./home/Home";
import ColourPicker from "./colour-picker/ColourPicker";
import JsonViewer from "./json-viewer/JsonViewer";

function App() {
  const [currentApp, setApp] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const fullscreenClass = currentApp === "colour-picker" ? "full-screen " : "";
  const darkThemeClass = isDarkTheme ? "dark-theme " : "";

  const renderAppView = (app: String) => {
    switch (app) {
      case "home":
        return <Home setApp={setApp}></Home>;
      case "colour-picker":
        return <ColourPicker setIsDarkTheme={setIsDarkTheme}></ColourPicker>;
      case "json-viewer":
        return <JsonViewer></JsonViewer>;
      default:
        return undefined;
    }
  };

  const goHome = () => {
    setIsDarkTheme(true);
    setApp("home");
  };

  return (
    <div className={"App " + darkThemeClass}>
      <div className={"app-view " + fullscreenClass}>
        {renderAppView(currentApp)}
      </div>
      <Copyright goHome={goHome}></Copyright>
    </div>
  );
}

export default App;
