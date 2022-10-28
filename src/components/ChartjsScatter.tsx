import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Scatter } from "react-chartjs-2";

import { transactions } from "../data/transactions";
import { transformTransactions } from "../transform";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

export function ChartjsScatter() {
  return (
    <Scatter
      data={transformTransactions.chartjs(transactions)}
      options={{
        scales: {
          x: {
            type: "time",
            time: {
              unit: "month",
            },
            ticks: {
              callback: function (value, index, ticks) {
                if (typeof value === "string")
                  return [value.slice(0, 3), value.slice(6)].join(" ");
              },
            },
          },
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return "$" + value.toLocaleString();
              },
            },
          },
        },
      }}
    />
  );
}
