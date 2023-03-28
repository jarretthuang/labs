import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./assets/css/json-viewer-tree.css";
import JsonViewerTreeItem from "./JsonViewerTreeItem";
import _ from "lodash";

function JsonViewerTree(props) {
  const populateTree = (json: Object) => {
    return (
      <TreeView
        aria-label="json viewer tree"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1, overflowY: "auto" }}
      >
        {populateTreeItems(json)}
      </TreeView>
    );
  };

  const populateTreeItems = (
    json: any,
    key: string = "JSON",
    nodeIdPrefix: string = ""
  ) => {
    const nodeId: string = nodeIdPrefix + "." + key;

    if (_.isNull(json)) {
      return (
        <JsonViewerTreeItem
          nodeId={nodeId}
          key={nodeId}
          label={key + ": null"}
        />
      );
    } else if (typeof json === "object") {
      if (Array.isArray(json)) {
        return (
          <JsonViewerTreeItem nodeId={nodeId} key={nodeId} label={key + " [ ]"}>
            {json.map((itemInArray, index) =>
              populateTreeItems(itemInArray, index.toString(), nodeId)
            )}
          </JsonViewerTreeItem>
        );
      } else {
        return (
          <JsonViewerTreeItem nodeId={nodeId} key={nodeId} label={key + " { }"}>
            {Object.keys(json).map((key: string) =>
              populateTreeItems(json[key], key, nodeId)
            )}
          </JsonViewerTreeItem>
        );
      }
    } else {
      const value =
        typeof json === "string" ? '"' + json + '"' : json.toString();
      return (
        <JsonViewerTreeItem
          nodeId={nodeId}
          key={nodeId}
          label={key + ": " + value}
        />
      );
    }
  };

  return <div className="JsonViewerTree">{populateTree(props.json)}</div>;
}

export default JsonViewerTree;
