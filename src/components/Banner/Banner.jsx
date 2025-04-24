import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import BTN from "../BTN/BTN";

const Banner = () => {
  return (
    <section className="bg-secondary/10 mt-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 items-center">
        {/* Banner image */}
        <BannerImage />
        {/* Brand info */}
        <BannerInfo />
      </div>
    </section>
  );
};

function BannerImage() {
  return (
    <div className="flex justify-center items-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        viewport={{ once: true }}
        src={BannerPng}
        alt="Fruits"
        className="w-[300px] md:max-w-[400px] rounded-xl 
        h-full object-cover drop-shadow-lg hover:scale-105 transition duration-300"
      />
    </div>
  );
}

function BannerInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
        <motion.h1
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-6xl font-bold uppercase"
        >
          Discover <span className="text-primary">Nature’s Goodness</span>
        </motion.h1>

        <TextP fadeUp={FadeUp(0.7)}>
          Taste the difference with our farm-fresh, organic fruits—delivered straight to your door.
        </TextP>

        <TextP fadeUp={FadeUp(0.9)}>
          Supporting sustainable farming, one juicy bite at a time. Eat clean, live vibrant.
        </TextP>

        {/* button section */}
        <BTN fade={FadeUp(1.1)}>Shop Now →</BTN>
      </div>
    </div>
  );
}

function TextP({ children, fadeUp }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-gray-700 leading-relaxed"
    >
      {children}
    </motion.p>
  );
}

export default Banner;
