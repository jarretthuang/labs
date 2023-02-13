function Copyright(props: any) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Copyright">
      <div className="copyright-banner" onClick={props.goHome}>
        <span>Copyright © {currentYear} Jarrett Huang</span>
      </div>
    </div>
  );
}

export default Copyright;
