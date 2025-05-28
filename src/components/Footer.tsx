
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Strong CTA Section */}
        <div className="text-center mb-12 pb-8 border-b border-primary/10">
          <h3 className="font-playfair text-2xl text-primary-light mb-4">
            Ready to collaborate? Let's talk.
          </h3>
          <p className="text-primary-muted mb-6 max-w-md mx-auto">
            Whether you need tutoring, community building, or technical solutions, I'm here to help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-full font-montserrat text-sm tracking-wide transition-all duration-300 hover:scale-105 transform shadow-lg"
          >
            Schedule a 15-min Call
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary-light">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-primary-muted hover:text-primary-light transition-colors duration-300">About</Link>
              <Link to="/work" className="text-primary-muted hover:text-primary-light transition-colors duration-300">Work</Link>
              <Link to="/contact" className="text-primary-muted hover:text-primary-light transition-colors duration-300">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary-light">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-muted hover:text-primary-light transition-all duration-300 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-muted hover:text-primary-light transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-primary-muted hover:text-primary-light transition-all duration-300 hover:scale-110 transform"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary-light">Impact</h3>
            <div className="space-y-2 text-primary-muted">
              <p className="text-sm">200+ Students Coached</p>
              <p className="text-sm">6,000+ Community Members</p>
              <p className="text-sm italic">"Challenges are opportunities in disguise."</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-primary-muted">
          <p>&copy; {new Date().getFullYear()} Salvador Villarroel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
