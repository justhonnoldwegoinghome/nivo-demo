import * as V from "victory";

import { transactions } from "../data/transactions";
import { transformTransactions } from "../transform";

export function VictoryScatter() {
  return (
    <div>
      <V.VictoryChart
        containerComponent={<V.VictoryContainer responsive={false} />}
        height={800}
        width={1200}
        scale={{ x: "time" }}
        theme={V.VictoryTheme.material}
      >
        <V.VictoryAxis
        // tickValues={xTickValues}
        // tickFormat={(t) => new Date(t).getHours()}
        />

        <V.VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <V.VictoryScatter
          labelComponent={<V.VictoryTooltip />}
          //   style={{ data: { fill: "#c43a31" } }}
          style={{
            data: {
              fill: ({ datum }) => {
                const { floorRange } = datum;
                if (["01-05", "06-10"].includes(floorRange)) return "blue";
                if (["11-15", "16-20"].includes(floorRange)) return "green";
                if (["21-25", "26-30"].includes(floorRange)) return "purple";
                if (["31-35", "36-40"].includes(floorRange)) return "red";
                return "red";
              },
            },
          }}
          size={5}
          data={transformTransactions.victory(transactions)}
        />
        <V.VictoryLegend
          x={125}
          y={50}
          title="Legend"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={[
            {
              name: "1st - 10th floor",
              symbol: { fill: "blue", type: "star" },
            },
            {
              name: "11th - 20th floor",
              symbol: { fill: "green", type: "star" },
            },
            {
              name: "21st - 30th floor",
              symbol: { fill: "purple", type: "star" },
            },
            {
              name: "31st - 40th floor",
              symbol: { fill: "red", type: "star" },
            },
          ]}
        />
      </V.VictoryChart>
    </div>
  );
}
