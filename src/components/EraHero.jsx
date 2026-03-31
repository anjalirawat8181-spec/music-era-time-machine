function EraHero({ era }) {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: era.color,
        color: "#000",
        transition: "0.5s",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>{era.name}</h1>

      <p>{era.genres.join(" • ")}</p>
    </div>
  );
}

export default EraHero;