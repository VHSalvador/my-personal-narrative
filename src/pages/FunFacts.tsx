
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const FunFacts = () => {
  const facts = [
    {
      title: "Wall Climbing Enthusiast",
      description: "When I'm not coding or teaching, you'll find me scaling walls and pushing my physical limits.",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&w=800",
      alt: "Mountain climbing scene representing challenge and adventure"
    },
    {
      title: "Multilingual Mind",
      description: "I speak English (C1), Japanese (N3), Hungarian, and Spanish - connecting with people across cultures!",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
      alt: "Person studying languages"
    },
    {
      title: "Perfume Collector",
      description: "I run a 6,000+ member Facebook group for perfume enthusiasts, exploring the art of scents.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
      alt: "Artistic representation of scents and creativity"
    },
    {
      title: "Morning Person",
      description: "I start each day with silence and green tea, finding peace in early morning moments.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&w=800",
      alt: "Peaceful morning scene with tea"
    },
    {
      title: "Plant Parent",
      description: "Proud caretaker of special houseplants, creating my own urban jungle.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800",
      alt: "Indoor plants creating a cozy atmosphere"
    },
    {
      title: "Chess Coach",
      description: "Teaching chess isn't just about the game - it's about strategy, patience, and mental agility.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
      alt: "Strategic thinking represented by nature"
    }
  ];

  return (
    <div className="bg-primary min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-playfair text-4xl md:text-5xl text-secondary text-center mb-12 mt-16 md:mt-0"
        >
          Fun Facts About Me
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-primary-light rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={fact.image}
                  alt={fact.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl text-secondary-dark mb-2 group-hover:text-accent-contrast transition-colors duration-300">
                  {fact.title}
                </h3>
                <p className="text-neutral-dark group-hover:text-neutral-dark transition-colors duration-300">
                  {fact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FunFacts;
