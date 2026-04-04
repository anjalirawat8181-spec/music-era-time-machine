import { useState, useEffect } from "react";
import eras from "./data/eras";
import ArtistCarousel from "./components/ArtistCarousel";
import Timeline from "./components/Timeline";
import EraHero from "./components/EraHero";
import CulturalSnapshot from "./components/CulturalSnapshot";
import SongPreview from "./components/SongPreview";
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

    <ArtistCarousel artists={activeEra.artists} />

    <CulturalSnapshot facts={activeEra.facts} />

    <SongPreview song={activeEra.song} />

    <Timeline eras={eras} setActiveEra={setActiveEra} />
  </div>
);
}

export default App;