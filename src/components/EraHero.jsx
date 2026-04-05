import { motion, AnimatePresence } from "framer-motion";

function EraHero({ era }) {
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
    <AnimatePresence mode="wait">
      <motion.div
        key={era.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--bg-color)",
          color: era.textColor,
          fontFamily: era.font,
          ...extraStyle,
        }}
      >
        <h1 style={{ fontSize: "60px" }}>{era.name}</h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default EraHero;