import DataObjectIcon from "@mui/icons-material/DataObject";
import DataArrayIcon from "@mui/icons-material/DataArray";
import { Tooltip } from "../common/ui/tooltip/Tooltip";

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

  return (
    <div className="JsonViewerTreeItemLabel">
      <div className="label-name">{props.name}</div>
      {renderSeparator()}
      <div className="label-value">{props.value}</div>
      {renderIcon()}
    </div>
  );
}
