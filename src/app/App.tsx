import { useEffect, useState } from "react";
import "./assets/css/App.css";
import Copyright from "./Copyright";
import Home from "./home/Home";
import ColourPicker from "./colour-picker/ColourPicker";
import JsonViewer from "./json-viewer/JsonViewer";

function App() {
  const [currentApp, setApp] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const fullScreenApps = ["colour-picker", "json-viewer"];
  const fullscreenClass = fullScreenApps.includes(currentApp)
    ? "full-screen "
    : "";
  const darkThemeClass = isDarkTheme ? "dark-theme " : "";

  useEffect(() => {
    if (currentApp === "json-viewer") {
      setIsDarkTheme(false);
    }
  }, [currentApp]);

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
