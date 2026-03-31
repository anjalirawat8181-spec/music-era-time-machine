function Timeline({ eras, setActiveEra }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
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
            padding: "10px 15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          {era.name}
        </button>
      ))}
    </div>
  );
}

export default Timeline;