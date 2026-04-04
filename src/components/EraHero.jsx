import { motion } from "framer-motion";

function EraHero({ era }) {
  return (
    <motion.div
      key={era.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>{era.name}</h1>
      <p>{era.genres.join(" • ")}</p>
    </motion.div>
  );
}

export default EraHero;