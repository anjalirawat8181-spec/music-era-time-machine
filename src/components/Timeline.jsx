function Timeline({ eras, setActiveEra }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Select Era:</h3>

      {eras.map((era) => (
        <button
          key={era.id}
          onClick={() => setActiveEra(era)}
          style={{ margin: "5px", padding: "10px" }}
        >
          {era.name}
        </button>
      ))}
    </div>
  );
}

export default Timeline;