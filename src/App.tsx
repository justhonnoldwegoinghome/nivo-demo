import * as React from "react";

import { NivoScatter } from "./components/NivoScatter";
import { PlotlyScatter } from "./components/PlotlyScatter";

export function App() {
  const [view, setView] = React.useState<"nivo" | "plotly">("nivo");
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setView("nivo")}>Nivo</button>
        <button onClick={() => setView("plotly")}>Plotly</button>
      </div>
      {view === "nivo" ? <NivoScatter /> : <PlotlyScatter />}
    </div>
  );
}
