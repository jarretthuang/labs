import { useState } from "react";
import "./assets/css/json-viewer.css";

function JsonViewer(props: any) {
  type viewType = "view" | "edit";
  const [currentView, switchView] = useState("edit");
  const getSelectedClass = (view: viewType) =>
    currentView === view ? "selected " : "";

  return (
    <div className="JsonViewer">
      <div id="view-switcher">
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
      <div id="json-viewer-container">
        <textarea id="main-textarea"></textarea>
      </div>
    </div>
  );
}

export default JsonViewer;
