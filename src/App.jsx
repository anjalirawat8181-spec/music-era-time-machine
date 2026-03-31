import { useState, useEffect } from "react";
import eras from "./data/eras";
import Timeline from "./components/Timeline";
import EraHero from "./components/EraHero";

function App() {
  const [activeEra, setActiveEra] = useState(eras[0]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      activeEra.color
    );
  }, [activeEra]);

  return (
    <div>
      <EraHero era={activeEra} />
      <Timeline eras={eras} setActiveEra={setActiveEra} />
    </div>
  );
}

export default App;