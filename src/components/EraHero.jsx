import { motion } from "framer-motion";

function EraHero({ era }) {
  // 🎨 Dynamic effects
  let extraStyle = {};

  if (era.id === "1980s") {
    extraStyle = {
      textShadow: "0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff",
    };
  }

  if (era.id === "1990s") {
    extraStyle = {
      filter: "contrast(120%) brightness(90%)",
    };
  }

  if (era.id === "2020s") {
    extraStyle = {
      backdropFilter: "blur(10px)",
    };
  }

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
        fontFamily: era.font,
        ...extraStyle, // 🔥 apply effect
      }}
    >
      <h1 style={{ fontSize: "60px" }}>{era.name}</h1>
    </motion.div>
  );
}

export default EraHero;