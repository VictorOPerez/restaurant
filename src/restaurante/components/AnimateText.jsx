import { motion } from "framer-motion";
import { Children } from "react";

const AnimateText = ({ text }) => {
  return (
    <p>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.5, duration: 1, delay: 0.5 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default AnimateText;
