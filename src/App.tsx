import { projects } from "./data/projects";

export function App() {
  return (
    <div>
      <h1>Nivo demo</h1>
      <div>{`Length of demo data: ${projects.length}`}</div>
    </div>
  );
}
