import { motion, useScroll } from "framer-motion";

const BoxText = ({ children }) => {
  return (
    <span style={{ position: "relative" }}>
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
        initial={{ opacity: 1, y: 0, scaleY: 1 }}
        whileInView={{ opacity: 1, y: -50, scaleY: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.25 }}
      ></motion.div>
      {children}
    </span>
  );
};

export default BoxText;
