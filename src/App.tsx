import * as React from "react";

import { NivoScatter } from "./components/NivoScatter";
import { PlotlyScatter } from "./components/PlotlyScatter";
import { ChartjsScatter } from "./components/ChartjsScatter";
import { VictoryScatter } from "./components/VictoryScatter";

export function App() {
  const [view, setView] = React.useState<
    "nivo" | "plotly" | "chartjs" | "victory"
  >("chartjs");
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setView("chartjs")}>ChartJS</button>
        <button onClick={() => setView("nivo")}>Nivo</button>
        <button onClick={() => setView("plotly")}>Plotly</button>
        <button onClick={() => setView("victory")}>Victory</button>
      </div>
      {view === "nivo" ? (
        <NivoScatter />
      ) : view === "plotly" ? (
        <PlotlyScatter />
      ) : view === "victory" ? (
        <VictoryScatter />
      ) : (
        <ChartjsScatter />
      )}
    </div>
  );
}
