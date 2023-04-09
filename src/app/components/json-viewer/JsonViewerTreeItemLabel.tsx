import DataObjectIcon from "@mui/icons-material/DataObject";
import DataArrayIcon from "@mui/icons-material/DataArray";
import { styled } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export type JsonViewerTreeItemLabelType = "object" | "array" | "value";

export type JsonViewerTreeItemLabelProps = {
  type: JsonViewerTreeItemLabelType;
  name: string;
  value?: string;
};

const LabelTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow placement="right" classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.shadows[1],
    fontSize: "0.4rem",
  },
}));

export default function JsonViewerTreeItemLabel(
  props: JsonViewerTreeItemLabelProps
) {
  const renderIcon = () => {
    if (props.type === "object") {
      return (
        <LabelTooltip title="Object">
          <DataObjectIcon className="label-icon" />
        </LabelTooltip>
      );
    } else if (props.type === "array") {
      return (
        <LabelTooltip title="Array">
          <DataArrayIcon className="label-icon" />
        </LabelTooltip>
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
