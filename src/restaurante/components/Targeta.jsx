import { motion } from "framer-motion";
import React from "react";

const Targeta = ({ imagen, titulo, text }) => {
  return (
    <motion.div
      className="histori"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <img src={imagen} alt="" />
      <div className="contHIs">
        <h2>{titulo}</h2>
        <p className="targetaTex">{text}</p>
      </div>
    </motion.div>
  );
};

export default Targeta;
