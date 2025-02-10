
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
    <section className="min-h-screen flex items-center justify-center bg-primary px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-montserrat text-secondary-dark mb-4 tracking-wide"
          >
            CURIOUS MIND, ADAPTIVE SPIRIT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-playfair text-4xl md:text-6xl text-secondary mb-6"
          >
            Exploring the Intersection of People, Technology, and Creativity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-inter text-neutral-dark text-lg md:text-xl mb-8 leading-relaxed"
          >
            Hi, I'm a business IT student at Corvinus University with a passion for teaching,
            technology, and connecting with people. Let's explore new ideas together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/about"
              className="px-8 py-3 bg-accent hover:bg-accent-light transition-colors rounded-full font-montserrat text-primary-light text-sm tracking-wide"
            >
              Learn More About Me
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-light transition-all rounded-full font-montserrat text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <img
            src="/lovable-uploads/1e258842-fe10-4205-9b6e-0fe8d867e624.png"
            alt="Portrait of an individual in natural lighting"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
