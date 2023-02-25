import { useState } from "react";
import "./assets/css/json-viewer.css";
import Notification from "../notification/Notification";
import { ReactNotificationOptions } from "react-notifications-component";
import JsonViewerTree from "./JsonViewerTree";
import { sampleJson } from "./assets/sample";
import { Helmet } from "react-helmet-async";

function JsonViewer(props: any) {
  type ViewType = "view" | "edit";
  const [currentView, switchView] = useState("edit");
  const getSelectedClass = (view: ViewType) =>
    currentView === view ? "selected " : "";
  const defaultText = "Paste your JSON text here!";
  const [currentText, updateText] = useState(defaultText);
  const [notification, createNotification] = useState<
    ReactNotificationOptions | undefined
  >(undefined);
  const [jsonObject, updateJsonObject] = useState(undefined);

  const parseJson = (text: string, notify: boolean = true) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.log(e);
      if (notify) {
        let error: string;
        if (typeof e === "string") {
          error = e.toUpperCase(); // works, `e` narrowed to string
        } else if (e instanceof Error) {
          error = e.message; // works, `e` narrowed to Error
        } else {
          error = "";
        }
        const notification: ReactNotificationOptions = {
          title: "Invalid JSON",
          type: "info",
          container: "top-center",
          message: error,
        };
        createNotification(notification);
      }
      return undefined;
    }
  };

  const clearDefaultText = () => {
    if (currentText === defaultText) {
      updateText("");
    }
  };

  const formatJson = (text: string) => {
    const parsedJson = parseJson(text);
    if (parsedJson) {
      const formattedJsonString = JSON.stringify(parsedJson, null, 2);
      updateText(formattedJsonString);
    }
  };

  const minimizeJson = (text: string) => {
    const parsedJson = parseJson(text);
    if (parsedJson) {
      const formattedJsonString = JSON.stringify(parsedJson, null);
      updateText(formattedJsonString);
    }
  };

  const renderView = (viewType: string) => {
    if (viewType === "edit") {
      return (
        <div className="json-viewer-container">
          <div className="tool-bar">
            <div
              className="tool-bar-button"
              onClick={() => navigator.clipboard.writeText(currentText)}
            >
              Copy
            </div>
            <div
              className="tool-bar-button"
              onClick={() =>
                navigator.clipboard.readText().then((text) => updateText(text))
              }
            >
              Paste
            </div>
            <div
              className="tool-bar-button"
              onClick={() => formatJson(currentText)}
            >
              Format
            </div>
            <div
              className="tool-bar-button"
              onClick={() => minimizeJson(currentText)}
            >
              Minimize
            </div>
            <div className="tool-bar-button" onClick={() => updateText("")}>
              Clear
            </div>
            <div
              className="tool-bar-button"
              onClick={() => updateText(JSON.stringify(sampleJson))}
            >
              Example
            </div>
          </div>
          <textarea
            className="main-textarea"
            value={currentText}
            onClick={clearDefaultText}
            onChange={(e) => updateText(e.target.value)}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div className="json-viewer-container">
          <div className="readonly-view">
            <JsonViewerTree json={jsonObject}></JsonViewerTree>
          </div>
        </div>
      );
    }
  };

  const openTreeView = () => {
    const parsedJson = parseJson(currentText);
    if (parsedJson) {
      updateJsonObject(parsedJson);
      switchView("view");
    }
  };

  return (
    <div className="JsonViewer">
      <Helmet>
        <title>JSON Viewer - JH Labs</title>
        <meta name="theme-color" content="#d7eff2" />
      </Helmet>
      <div className="view-switcher">
        <div className="buttons">
          <div
            className={
              "button view-switcher-button " + getSelectedClass("view")
            }
            onClick={openTreeView}
          >
            View
          </div>
          <b></b>
          <div
            className={
              "button view-switcher-button " + getSelectedClass("edit")
            }
            onClick={() => switchView("edit")}
          >
            Edit
          </div>
        </div>
      </div>
      {renderView(currentView)}
      <Notification notification={notification}></Notification>
    </div>
  );
}

export default JsonViewer;
