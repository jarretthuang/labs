import { useEffect, useState } from "react";
import "./assets/css/App.css";
import Home from "./components/home/Home";
import ColourPicker from "./components/colour-picker/ColourPicker";
import JsonViewer from "./components/json-viewer/JsonViewer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./Error404";
import Three from "./components/three/Three";
import NavBar from "./components/nav-bar/NavBar";

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
    const lightThemeApps = ["json-viewer", "three"];
    if (lightThemeApps.includes(currentApp)) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  }, [currentApp]);

  useEffect(() => {
    const appFromUrl = location.pathname.slice(1);
    if (appFromUrl === "") {
      setApp("home");
    } else {
      setApp(appFromUrl);
    }
  }, [location]);

  const goHome = () => {
    navigate("/");
  };

  const renderNavBar = () => {
    return <NavBar goHome={goHome} isDarkTheme={isDarkTheme}></NavBar>;
  };

  return (
    <div className={"App " + darkThemeClass}>
      {renderNavBar()}
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
    </div>
  );
}

export default App;
