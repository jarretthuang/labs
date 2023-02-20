import { useEffect, useState } from "react";
import "./assets/css/App.css";
import Copyright from "./Copyright";
import Home from "./home/Home";
import ColourPicker from "./colour-picker/ColourPicker";
import JsonViewer from "./json-viewer/JsonViewer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./Error404";
import { Helmet } from "react-helmet-async";

function App() {
  const [currentApp, setApp] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

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
      <Helmet>
        <meta name="theme-color" content="#3c1206" />
      </Helmet>
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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Copyright goHome={goHome}></Copyright>
    </div>
  );
}

export default App;
