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
            borderRadius: "10px",
            background: "#222",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {artist}
        </div>
      ))}
    </div>
  );
}

export default ArtistCarousel;