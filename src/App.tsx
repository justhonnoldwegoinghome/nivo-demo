import * as React from "react";

import { NivoScatter } from "./components/NivoScatter";
import { PlotlyScatter } from "./components/PlotlyScatter";
import { ChartjsScatter } from "./components/ChartjsScatter";

export function App() {
  const [view, setView] = React.useState<"nivo" | "plotly" | "chartjs">(
    "chartjs"
  );
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setView("chartjs")}>ChartJS</button>
        <button onClick={() => setView("nivo")}>Nivo</button>
        <button onClick={() => setView("plotly")}>Plotly</button>
      </div>
      {view === "nivo" ? (
        <NivoScatter />
      ) : view === "plotly" ? (
        <PlotlyScatter />
      ) : (
        <ChartjsScatter />
      )}
    </div>
  );
}
