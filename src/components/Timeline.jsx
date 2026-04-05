function Timeline({ eras, setActiveEra }) {
  return (
    <div
      style={{
          width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "15px",
        background: "#111",
      }}
    >
      {eras.map((era) => (
        <button
          key={era.id}
          onClick={() => setActiveEra(era)}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            padding: "10px",
          }}
        >
          {era.name}
        </button>
      ))}
    </div>
  );
}

export default Timeline;