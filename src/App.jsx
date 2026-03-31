import { useState } from "react";
import eras from "./data/eras";
import Timeline from "./components/Timeline";

function App() {
  const [activeEra, setActiveEra] = useState(eras[0]);

  return (
    <div>
      <h1>🎸 Music Era Time Machine</h1>

      <h2>{activeEra.name}</h2>
      <p>{activeEra.genres.join(", ")}</p>

      <Timeline eras={eras} setActiveEra={setActiveEra} />
    </div>
  );
}

export default App;