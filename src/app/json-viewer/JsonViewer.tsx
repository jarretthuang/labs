import { useState } from "react";
import "./assets/css/json-viewer.css";

function JsonViewer(props: any) {
  type ViewType = "view" | "edit";
  const [currentView, switchView] = useState("edit");
  const getSelectedClass = (view: ViewType) =>
    currentView === view ? "selected " : "";
  const [text, updateText] = useState("Paste your JSON text here!");

  const renderView = (viewType: string) => {
    if (viewType === "edit") {
      return (
        <textarea
          className="main-textarea"
          value={text}
          onChange={(e) => updateText(e.target.value)}
        ></textarea>
      );
    } else {
      return <div className="readonly-view">{text}</div>;
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
      <div className="json-viewer-container">{renderView(currentView)}</div>
    </div>
  );
}

export default JsonViewer;
