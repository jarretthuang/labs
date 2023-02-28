import "./assets/css/Wave.css";

export type WaveUiParams = {
  text: string;
  fontSize?: string;
  className?: string;
  isHovered?: boolean;
};

function WaveUi(props: WaveUiParams) {
  const hoverClass = props.isHovered ? "hover" : "";
  const classNames = ["Wave", props.className ?? "", hoverClass];
  return (
    <div className={classNames.join(" ")}>
      <div className="animated-text">
        <div
          className="text"
          style={{
            fontSize: props.fontSize,
          }}
        >
          {props.text}
        </div>
      </div>
      <div className="background-text">
        <div
          className="text"
          style={{
            fontSize: props.fontSize,
          }}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default WaveUi;
