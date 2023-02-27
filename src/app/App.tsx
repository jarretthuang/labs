import { useEffect, useState } from "react";
import "./assets/css/App.css";
import Copyright from "./components/copyright/Copyright";
import Home from "./components/home/Home";
import ColourPicker from "./components/colour-picker/ColourPicker";
import JsonViewer from "./components/json-viewer/JsonViewer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./Error404";
import Three from "./components/three/Three";

function App() {
  const [currentApp, setApp] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const fullScreenApps = ["colour-picker", "json-viewer", "three"];
  const fullscreenClass = fullScreenApps.includes(currentApp)
    ? "full-screen "
    : "";
  const darkThemeClass = isDarkTheme ? "dark-theme " : "";

  useEffect(() => {
    const darkThemeApps = ["json-viewer", "three"];
    if (darkThemeApps.includes(currentApp)) {
      setIsDarkTheme(false);
    }
  }, [currentApp]);

  useEffect(() => {
    const currentApp = location.pathname.slice(1);
    setApp(currentApp);
  }, [location]);

  const goHome = () => {
    setIsDarkTheme(true);
    navigate("/");
  };

  return (
    <div className={"App " + darkThemeClass}>
      <div className={"app-view " + fullscreenClass}>
        <Routes>
          <Route path="/" element={<Home navigate={navigate}></Home>} />
          <Route
            path="/colour-picker"
            element={
              <ColourPicker setIsDarkTheme={setIsDarkTheme}></ColourPicker>
            }
          />
          <Route path="/json-viewer" element={<JsonViewer></JsonViewer>} />
          <Route path="/three" element={<Three></Three>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Copyright goHome={goHome}></Copyright>
    </div>
  );
}

export default App;
