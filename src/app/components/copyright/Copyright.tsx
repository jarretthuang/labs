import "./assets/css/Copyright.css";

function Copyright(props: any) {
  const currentYear = new Date().getFullYear();
  const dockClass = props.hasDock ? "dock" : "";
  return (
    <div className={"Copyright " + dockClass}>
      <div className="copyright-banner" onClick={props.goHome}>
        <span>Copyright © {currentYear} Jarrett Huang</span>
      </div>
    </div>
  );
}

export default Copyright;
