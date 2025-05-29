import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary px-6 relative">
      {/* Mobile Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <Link
          to="/contact"
          className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent-light rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Contact me"
        >
          <Phone className="w-6 h-6 text-white" />
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32 md:pt-0">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="text-left">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-block font-montserrat text-secondary-dark mb-4 tracking-wide text-sm">
            CURIOUS MIND, ADAPTIVE SPIRIT
          </motion.span>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="font-playfair text-4xl md:text-6xl text-secondary mb-6 leading-tight">
            I help students and startups{" "}
            <span className="font-bold text-blue-900">master</span>{" "}
            complex tech concepts through teaching, community, and hands-on tools
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="font-inter text-neutral-dark text-lg md:text-xl mb-8 leading-relaxed">
            On my first day teaching chess, I realized that breakthrough moments happen when complex ideas become simple. 
            As a business IT student at Corvinus University with <strong>200+ students coached</strong> and a <strong>6,000+ member community</strong>, 
            I turn confusion into confidence through technology and connection.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }} className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Link to="/about" className="group px-8 py-4 bg-accent hover:bg-accent-light transition-all duration-300 rounded-full font-montserrat text-primary-light text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transform">
              Learn More About Me
            </Link>
            <Link to="/contact" className="group px-8 py-4 border-2 border-secondary bg-transparent hover:bg-secondary text-secondary hover:text-primary-light transition-all duration-300 rounded-full font-montserrat text-sm tracking-wide hover:shadow-lg hover:scale-105 transform">
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Proof Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} className="bg-primary-light p-6 rounded-lg border-l-4 border-accent-contrast">
            <p className="text-neutral-dark italic text-sm mb-2">
              "Salvador turned my fear of math into confidence in just two weeks. His teaching style makes everything click!"
            </p>
            <p className="text-secondary-dark font-montserrat text-sm">
              — Anna K., High School Student
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="relative aspect-[3/4] w-full max-w-md mx-auto">
          <img src="/lovable-uploads/1e258842-fe10-4205-9b6e-0fe8d867e624.png" alt="Salvador Villarroel - Business IT Student and Educator" className="w-full h-full object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
