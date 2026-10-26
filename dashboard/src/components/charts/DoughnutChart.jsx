import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",

  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        padding: 20,
      },
    },
  },
};

export const DoughnutChart = ({ data }) => {
  return (
    <div
      style={{
        height: "260px",
      }}
    >
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};