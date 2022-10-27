import Plot from "react-plotly.js";

import { transactions } from "../data/transactions";
import { transformTransactions } from "../transform";

export function PlotlyScatter() {
  const transformedFields = transformTransactions.plotly(transactions);
  return (
    <Plot
      data={[
        {
          x: transformedFields.map((t) => t["x"]),
          y: transformedFields.map((t) => t["y"]),
          type: "scatter",
          mode: "markers",
          marker: { color: "#FD23910", size: 8 },
        },
      ]}
      layout={{
        width: 2000,
        height: 1000,
        title: "Transactions of Stirling Residences",
      }}
    />
  );
}
