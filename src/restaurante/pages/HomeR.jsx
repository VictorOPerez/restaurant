import { motion, useScroll } from "framer-motion";
import Ingredientes from "../components/Ingredientes";
import Reservar from "../components/Reservar";
import Targeta from "../components/Targeta";
import "./homeR.css";
import BoxText from "../components/BoxText";
import AnimateText from "../components/AnimateText";

const HomeR = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="HomeR">
      <div className="Presentacion">
        <h1>
          <BoxText children={<span> A Premium</span>} />
          <BoxText children={<span>And Authentic</span>} />
          <BoxText children={<span>Steakhouse</span>} />
        </h1>
        <img className="portadFond" src="./porFondo.jpeg" alt="" />
        <motion.div
          initial={{ opacity: 1, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.25 }}
        >
          <img className="portadaSarten" src="/portada.png" alt="" />
        </motion.div>
      </div>
      <Targeta
        imagen={"/parriya.jpeg"}
        titulo={"Our History"}
        text={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          nesciunt nam placeat itaque, dolores totam cumque expedita
          reprehenderit aperiam nostrum at. Adipisci, quasi rem molestiae ea
          dolore libero iste voluptatibus.`}
      />

      <div className="menu">
        <div className="menuTex">
          <div className="conth2">
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
            <motion.h2
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Our Menu
            </motion.h2>
          </div>
          <motion.p
            className="textmenu"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            eius voluptas at dignissimos laboriosam tempora architecto iusto
            nulla quas molestias possimus porro, nostrum id! Architecto
            laudantium blanditiis magnam voluptatum ipsam?
          </motion.p>
        </div>
        <div className="plato">
          <motion.img
            src="/platos/plato1.png"
            alt=""
            className="pla1"
            whileInView={{ rotate: -144 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.25 }}
          />
          <div className="description">
            <h3>Clasedea</h3>
            <AnimateText
              text={`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
              deserunt placeat, ipsum optio eveniet, blanditiis unde obcaecati`}
            />
          </div>
        </div>
        <div className="plato">
          <div className="description">
            <h3>Clasedea</h3>
            <AnimateText
              text={`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
              deserunt placeat, ipsum optio eveniet, blanditiis unde obcaecati`}
            />
          </div>
          <motion.img
            className="pla2"
            src="/platos/plato2.png"
            alt=""
            whileInView={{ rotate: 144 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.25 }}
          />
        </div>
        <div className="plato">
          <motion.img
            src="/platos/plato3.png"
            className="pla3"
            alt=""
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.25 }}
          />
          <div className="description">
            <h3>Clasedea</h3>
            <AnimateText
              text={`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
              deserunt placeat, ipsum optio eveniet, blanditiis unde obcaecati`}
            />
          </div>
        </div>
        <div className="plato">
          <div className="description">
            <h3>Clasedea</h3>
            <AnimateText
              text={`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo
              deserunt placeat, ipsum optio eveniet, blanditiis unde obcaecati`}
            />
          </div>
          <motion.img
            src="/platos/plato4.png"
            alt=""
            className="pla4"
            whileInView={{ rotate: 144 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.25 }}
          />
        </div>
      </div>
      <Targeta
        imagen={"/event.jpeg"}
        titulo={"Upcoming Events"}
        text={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          nesciunt nam placeat itaque, dolores totam cumque expedita
          reprehenderit aperiam nostrum at. Adipisci, quasi rem molestiae ea
          dolore libero iste voluptatibus.`}
      />
      <Ingredientes />
      <Reservar />
    </div>
  );
};

export default HomeR;
