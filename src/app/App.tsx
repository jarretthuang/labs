import { useEffect, useState } from "react";
import "./assets/css/App.css";
import Home from "./components/home/Home";
import ColourPicker from "./components/colour-picker/ColourPicker";
import JsonViewer from "./components/json-viewer/JsonViewer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./Error404";
import Three from "./components/three/Three";
import NavBar from "./components/nav-bar/NavBar";
import { HOME_APP, getAppByName } from "./model/Application";

function App() {
  const [currentApp, setApp] = useState(HOME_APP);
  const [isDarkThemeOverride, setIsDarkThemeOverride] = useState(false);
  const [themeColourOverride, setThemeColourOverride] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();

  const isDarkTheme = currentApp.isDarkTheme || isDarkThemeOverride;
  const themeColour = themeColourOverride ?? currentApp.themeColour;

  const fullscreenClass = currentApp.isFullScreen ? "full-screen" : "";
  const darkThemeClass = isDarkTheme ? "dark-theme" : "";

  useEffect(() => {
    const appNameFromUrl = location.pathname.slice(1);
    const app = getAppByName(appNameFromUrl) ?? HOME_APP;
    clearStyleOverrides();
    setApp(app);
  }, [location]);

  const clearStyleOverrides = () => {
    setIsDarkThemeOverride(false);
    setThemeColourOverride(undefined);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={"App " + darkThemeClass}>
      <NavBar
        goHome={goHome}
        isDarkTheme={isDarkTheme}
        backgroundColour={themeColour}
      ></NavBar>
      <div className={"app-view " + fullscreenClass}>
        <Routes>
          <Route path="/" element={<Home navigate={navigate}></Home>} />
          <Route
            path="/colour-picker"
            element={
              <ColourPicker
                setIsDarkTheme={setIsDarkThemeOverride}
                setThemeColour={setThemeColourOverride}
              ></ColourPicker>
            }
          />
          <Route path="/json-viewer" element={<JsonViewer></JsonViewer>} />
          <Route path="/three" element={<Three></Three>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
