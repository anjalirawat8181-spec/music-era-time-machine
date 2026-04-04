function SongPreview({ song }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>🎧 Signature Sound</h3>

      <iframe
        width="300"
        height="180"
        src={song}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SongPreview;