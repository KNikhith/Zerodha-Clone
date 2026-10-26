import {
  Apps as AppsIcon,
  Campaign,
  Calculate,
  Insights,
  Timeline,
} from "@mui/icons-material";

const appItems = [
  {
    icon: <Insights />,
    title: "Console",
    description: "Portfolio analytics and reports",
  },
  {
    icon: <Timeline />,
    title: "Kite Connect",
    description: "Trading APIs for developers",
  },
  {
    icon: <Calculate />,
    title: "Margin Calculator",
    description: "Calculate required margin",
  },
  {
    icon: <Campaign />,
    title: "Coin",
    description: "Direct Mutual Fund investments",
  },
];

const Apps = () => {
  return (
    <section className="page">
      <div className="page-header">
        <h2>Apps</h2>
        <p>Explore Zerodha Products</p>
      </div>

      <div className="apps-grid">
        {appItems.map((app) => (
          <div
            className="app-card"
            key={app.title}
          >
            <div className="app-icon">
              {app.icon}
            </div>

            <h3>{app.title}</h3>

            <p>{app.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Apps;