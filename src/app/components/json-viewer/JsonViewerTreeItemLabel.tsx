import DataObjectIcon from "@mui/icons-material/DataObject";
import DataArrayIcon from "@mui/icons-material/DataArray";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "../common/ui/tooltip/Tooltip";
import { Fragment } from "react";

export type JsonViewerTreeItemLabelType = "object" | "array" | "value";

export type JsonViewerTreeItemLabelProps = {
  type: JsonViewerTreeItemLabelType;
  name: string;
  value?: string;
};

export default function JsonViewerTreeItemLabel(
  props: JsonViewerTreeItemLabelProps
) {
  const renderIcon = () => {
    if (props.type === "object") {
      return (
        <Tooltip title="Object">
          <DataObjectIcon className="label-icon" />
        </Tooltip>
      );
    } else if (props.type === "array") {
      return (
        <Tooltip title="Array">
          <DataArrayIcon className="label-icon" />
        </Tooltip>
      );
    }
  };

  const renderSeparator = () => {
    if (props.value) {
      return <div className="label-separator">:</div>;
    }
  };

  const renderActions = () => {
    return (
      <Fragment>
        <Tooltip title="Copy" placement="top">
          <ContentCopyIcon className="label-icon" />
        </Tooltip>
      </Fragment>
    );
  };

  return (
    <div className="JsonViewerTreeItemLabel">
      <div className="label-content">
        <div className="label-name">{props.name}</div>
        {renderSeparator()}
        <div className="label-value">{props.value}</div>
        {renderIcon()}
      </div>
      <div className="label-actions">{renderActions()}</div>
    </div>
  );
}
