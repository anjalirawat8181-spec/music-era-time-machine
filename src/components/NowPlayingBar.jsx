function NowPlayingBar({ era, isMuted, setIsMuted, eras, setActiveEra }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#111",
        color: "#fff",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      {/* Top row: Song info + controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>{era.name} Vibes</div>
          <div style={{ fontSize: "12px" }}>{era.artists[0]}</div>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isMuted ? "▶️" : "⏸"}
        </button>
      </div>

      {/* Bottom row: Timeline */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        {eras.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveEra(item)}
            style={{
              padding: "6px 10px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: item.id === era.id ? "#fff" : "#333",
              color: item.id === era.id ? "#000" : "#fff",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NowPlayingBar;