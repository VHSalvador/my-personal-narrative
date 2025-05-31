
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScheduleCalendar from "../components/ScheduleCalendar";

const Contact = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-primary pt-32 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img alt="Profile" src="/lovable-uploads/4184ae2e-ba7e-48c4-980c-add4e9f3cfa3.jpg" className="w-full h-full object-cover" />
            </div>
            
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl text-secondary mb-4">
                Let's Connect
              </h1>
              <p className="text-neutral-dark">
                I'm always open to new opportunities and connections. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>your.email@example.com</span>
                </a>
                
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Schedule Calendar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ScheduleCalendar />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
