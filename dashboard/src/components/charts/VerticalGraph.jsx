import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Portfolio Distribution",
      font: {
        size: 16,
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#f1f3f5",
      },
    },

    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const VerticalGraph = ({ data }) => {
  return (
    <div
      style={{
        height: "350px",
      }}
    >
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};