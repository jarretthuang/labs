import { useState } from "react";
import "./assets/css/json-viewer.css";

function JsonViewer(props: any) {
  type ViewType = "view" | "edit";
  const [currentView, switchView] = useState("edit");
  const getSelectedClass = (view: ViewType) =>
    currentView === view ? "selected " : "";
  const defaultText = "Paste your JSON text here!";
  const [text, updateText] = useState(defaultText);
  const clearDefaultText = () => {
    if (text === defaultText) {
      updateText("");
    }
  };

  const renderView = (viewType: string) => {
    if (viewType === "edit") {
      return (
        <div className="json-viewer-container">
          <div className="tool-bar">
            <div className="tool-bar-button">Copy</div>
            <div className="tool-bar-button">Paste</div>
            <div className="tool-bar-button">Format</div>
            <div className="tool-bar-button">Minimize</div>
            <div className="tool-bar-button" onClick={() => updateText("")}>
              Clear
            </div>
          </div>
          <textarea
            className="main-textarea"
            value={text}
            onClick={clearDefaultText}
            onChange={(e) => updateText(e.target.value)}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div className="json-viewer-container">
          <div className="readonly-view">{text}</div>
        </div>
      );
    }
  };

  return (
    <div className="JsonViewer">
      <div className="view-switcher">
        <div className="buttons">
          <div
            className={
              "button view-switcher-button " + getSelectedClass("view")
            }
            onClick={() => switchView("view")}
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
    </div>
  );
}

export default JsonViewer;
