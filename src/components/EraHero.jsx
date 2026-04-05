import { motion } from "framer-motion";
import GenreTags from "./GenreTags";

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
  color: era.textColor,
  fontFamily: era.font,   // ✅ THIS LINE IS IMPORTANT
}}
    >
      <h1 style={{ fontSize: "60px" }}>{era.name}</h1>
      <GenreTags genres={era.genres} />
    </motion.div>
  );
}

export default EraHero;