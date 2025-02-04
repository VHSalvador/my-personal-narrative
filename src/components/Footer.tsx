import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-primary/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-muted hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-primary-muted hover:text-primary transition-colors">About</Link>
              <Link to="/fun-facts" className="text-primary-muted hover:text-primary transition-colors">Fun Facts</Link>
              <Link to="/contact" className="text-primary-muted hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-muted hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-muted hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-primary-muted hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-primary">Quote</h3>
            <p className="text-primary-muted italic">"Challenges are opportunities in disguise."</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-primary-muted">
          <p>&copy; {new Date().getFullYear()} Personal Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;