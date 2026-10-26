import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="market-overview">
        <div className="market-card">
          <span className="market-name">NIFTY 50</span>

          <span className="market-value negative">
            24,835.45
          </span>

          <span className="market-change negative">
            -52.40 (-0.21%)
          </span>
        </div>

        <div className="market-card">
          <span className="market-name">SENSEX</span>

          <span className="market-value positive">
            81,215.60
          </span>

          <span className="market-change positive">
            +135.40 (+0.16%)
          </span>
        </div>
      </div>

      <Menu />
    </header>
  );
};

export default TopBar;