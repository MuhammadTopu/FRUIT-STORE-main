import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";
import BTN from "../BTN/BTN";


const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="rounded-3xl p-8 md:p-16 min-h-[300px] flex items-center justify-end bg-blend-overlay bg-black/40"
      >
        <BannerInfo />
      </div>
    </section>
  );
};

function BannerInfo() {
  return (
    <div className="text-white text-center md:text-left space-y-5 max-w-xl">
      <motion.h1
        variants={FadeLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl lg:text-6xl font-bold uppercase"
      >
        Order <span className="text-primary">Fresh Fruits</span> Online
      </motion.h1>

      <motion.p
        variants={FadeLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-md md:text-lg leading-relaxed"
      >
        Shop seasonal fruits and organic goods from your favorite online store.
        Fast delivery, top quality, and unbeatable freshness—right to your door.
      </motion.p>

      <BTN fade={FadeLeft(1.1)}>
        <span className="text-xl">
          <IoBagHandleOutline />
        </span>
        <span>Order Now</span>
      </BTN>
    </div>
  );
}

export default Banner3;
