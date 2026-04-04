function ArtistCarousel({ artists }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        padding: "20px",
        overflowX: "auto",
      }}
    >
      {artists.map((artist, index) => (
        <div
          key={index}
          style={{
         minWidth: "150px",
         padding: "20px",
         borderRadius: "12px",
        background: "#1a1a1a",
         color: "#fff",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
}}
        >
          {artist}
        </div>
      ))}
    </div>
  );
}

export default ArtistCarousel;