
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-montserrat text-accent-green mb-4 tracking-wide"
        >
          CURIOUS MIND, ADAPTIVE SPIRIT
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl text-primary mb-6"
        >
          Exploring the Intersection of People, Technology, and Creativity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-inter text-primary-muted text-lg md:text-xl mb-8 leading-relaxed"
        >
          Hi, I'm a business IT student at Corvinus University with a passion for teaching,
          technology, and connecting with people. Let's explore new ideas together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/about"
            className="px-8 py-3 bg-primary text-cream rounded-full font-montserrat text-sm tracking-wide hover:bg-primary-soft transition-colors"
          >
            Learn More About Me
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-primary text-primary rounded-full font-montserrat text-sm tracking-wide hover:bg-primary hover:text-cream transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
