import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12 border-t border-primary/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left"
      >

        <div className="space-y-3">
          <Logo />
          <p className="text-gray-600 text-sm">
            Delivering freshness with love, every day. Your go-to source for premium organic fruits.
          </p>
        </div>

   
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="text-gray-600 space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-700">
            <a href="#" className="hover:text-primary transition"><FaFacebook /></a>
            <a href="#" className="hover:text-primary transition"><FaTwitter /></a>
            <a href="#" className="hover:text-primary transition"><FaInstagram /></a>
            <a href="#" className="hover:text-primary transition"><FaYoutube /></a>
          </div>
        </div>
      </motion.div>


      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} FruitFresh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
