import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FunFacts = () => {
  const facts = [
    {
      title: "Wall Climbing Enthusiast",
      description: "When I'm not coding or teaching, you'll find me scaling walls and pushing my physical limits.",
      icon: "🧗‍♂️",
    },
    {
      title: "Multilingual Mind",
      description: "I speak English (C1), Japanese (N3), Hungarian, and Spanish - connecting with people across cultures!",
      icon: "🗣️",
    },
    {
      title: "Perfume Collector",
      description: "I run a 6,000+ member Facebook group for perfume enthusiasts, exploring the art of scents.",
      icon: "🌸",
    },
    {
      title: "Morning Person",
      description: "I start each day with silence and green tea, finding peace in early morning moments.",
      icon: "🍵",
    },
    {
      title: "Plant Parent",
      description: "Proud caretaker of special houseplants, creating my own urban jungle.",
      icon: "🌿",
    },
    {
      title: "Chess Coach",
      description: "Teaching chess isn't just about the game - it's about strategy, patience, and mental agility.",
      icon: "♟️",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-20">
        <h1 className="font-playfair text-4xl md:text-5xl text-primary text-center mb-12">
          Fun Facts About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="font-montserrat text-xl text-primary mb-2">{fact.title}</h3>
              <p className="text-primary-muted">{fact.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FunFacts;