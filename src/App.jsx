import eras from "./data/eras";

function App() {
  return (
    <div>
      <h1> Music Era Time Machine</h1>

      {eras.map((era) => (
        <div key={era.id}>
          <h2>{era.name}</h2>
          <p>{era.genres.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default App;