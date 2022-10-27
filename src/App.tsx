import { ResponsiveScatterPlot } from "@nivo/scatterplot";

import { transactions } from "./data/transactions";
import { transformTransactions } from "./transform";

export function App() {
  return (
    <div style={{ height: "100vh", width: "100%", minWidth: "1200px" }}>
      <h1>Transactions of Stirling Residences</h1>
      <ResponsiveScatterPlot
        data={transformTransactions(transactions)}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
        }}
        colors={{ scheme: "category10" }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat="$"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: "%b %y",
          legend: "time scale",
          legendOffset: -12,
        }}
        axisLeft={{
          // orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "psf",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        tooltip={({ node: { data } }) => (
          <div
            style={{
              padding: 12,
              background: "#EEEEEE",
              borderRadius: "15px",
            }}
          >
            <p>{`Psf: S$ ${data["y"]}`}</p>
            <p>{`Size: ${data["areaSqft"]} sqft`}</p>
            <p>{`Floor range: ${data["floorRange"]}`}</p>
          </div>
        )}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
