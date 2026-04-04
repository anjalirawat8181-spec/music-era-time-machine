function CulturalSnapshot({ facts }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h3> Cultural Snapshot</h3>

      {facts.map((fact, index) => (
        <p key={index} style={{ margin: "8px 0" }}>
          • {fact}
        </p>
      ))}
    </div>
  );
}

export default CulturalSnapshot;