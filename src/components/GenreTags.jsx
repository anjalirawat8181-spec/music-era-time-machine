function GenreTags({ genres }) {
  return (
    <div
      style={{
  padding: "8px 14px",
  borderRadius: "20px",
  background: "#000",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "500",
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