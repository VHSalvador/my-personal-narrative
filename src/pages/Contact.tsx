
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary pt-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl text-secondary mb-4">
                Let's Connect
              </h1>
              <p className="text-neutral-dark">
                I'm always open to new opportunities and connections. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>your.email@example.com</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
