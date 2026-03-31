import { useState } from "react";
import eras from "./data/eras";
import Timeline from "./components/Timeline";
import EraHero from "./components/EraHero";

function App() {
  const [activeEra, setActiveEra] = useState(eras[0]);

  return (
    <div>
      <EraHero era={activeEra} />

      <Timeline eras={eras} setActiveEra={setActiveEra} />
    </div>
  );
}

export default App;