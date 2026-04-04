function GenreTags({ genres }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {genres.map((genre, index) => (
        <span
          key={index}
          style={{
            padding: "8px 12px",
            borderRadius: "20px",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          {genre}
        </span>
      ))}
    </div>
  );
}

export default GenreTags;