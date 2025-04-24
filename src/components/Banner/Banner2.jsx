import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import BTN from "../BTN/BTN";

const Banner2 = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 items-center">
        {/* Info on the left */}
        <BannerInfo />
        {/* Image on the right */}
        <BannerImage />
      </div>
    </section>
  );
};

function BannerInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
        <motion.h1
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl lg:text-6xl font-bold uppercase"
        >
          Your Online <span className="text-primary">Fruit Store</span>
        </motion.h1>

        <TextP fadeUp={FadeUp(0.7)}>
          Get the freshest seasonal fruits delivered to your doorstep — picked with care, packed with love.
        </TextP>

        <TextP fadeUp={FadeUp(0.9)}>
          Download our app and shop anytime, anywhere. Organic. Fast. Fresh.
        </TextP>

        {/* CTA Button */}
        <BTN fade={FadeUp(1.1)}>Download the App</BTN>
      </div>
    </div>
  );
}

function TextP({ fadeUp, children }) {
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

function BannerImage() {
  return (
    <div className="flex justify-center items-center">
      <motion.img
        initial={{ opacity: 0, x: 200, rotate: 75 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}
        src={BannerPng}
        alt="Fruit Plate"
        className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow-lg hover:scale-105 transition duration-300"
      />
    </div>
  );
}

export default Banner2;
