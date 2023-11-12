import "./ingrediente.css";
import { motion } from "framer-motion";

const Ingredientes = () => {
  return (
    <div className="ContainIngredient">
      <motion.p
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="disco"
        style={{ fontFamily: "Dancing Script" }}
      >
        Discobery
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ fontFamily: "" }}
      >
        The Best Ingredientes
      </motion.h3>

      <motion.p
        className="ingreTex"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eius
        voluptas at dignissimos laboriosam tempora architecto iusto nulla quas
        molestias possimus porro, nostrum id! Architecto laudantium blanditiis
        magnam voluptatum ipsam?
      </motion.p>

      <div className="ingeImag">
        <motion.img
          src="/ingredientes/filete.png"
          className="ingr1"
          alt=""
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 3, delay: 0.25 }}
        />
        <motion.img
          src="/ingredientes/rama.png"
          className="ingr2"
          alt=""
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 2, delay: 0.25 }}
        />
        <motion.img
          src="/ingredientes/llerba.png"
          className="ingr3"
          alt=""
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 2, delay: 0.25 }}
        />
        <motion.img
          src="/ingredientes/cuchara.png"
          className="ingr4"
          alt=""
          initial={{ x: -60 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.25 }}
        />
        <motion.img
          src="/ingredientes/ajiz.png"
          className="ingr5"
          alt=""
          initial={{ x: 60 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.25 }}
        />
      </div>
    </div>
  );
};

export default Ingredientes;
