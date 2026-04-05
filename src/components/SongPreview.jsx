function SongPreview({ song, isMuted }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h3>🎧 Signature Sound</h3>

      <iframe
        width="300"
        height="180"
        src={`${song}?autoplay=1&mute=${isMuted ? 1 : 0}`}
        title="YouTube player"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SongPreview;