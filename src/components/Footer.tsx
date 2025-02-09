
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-beige">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-neutral-lighter hover:text-beige transition-colors">Home</Link>
              <Link to="/about" className="text-neutral-lighter hover:text-beige transition-colors">About</Link>
              <Link to="/fun-facts" className="text-neutral-lighter hover:text-beige transition-colors">Fun Facts</Link>
              <Link to="/contact" className="text-neutral-lighter hover:text-beige transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-beige">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-lighter hover:text-beige transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-lighter hover:text-beige transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-neutral-lighter hover:text-beige transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl text-beige">Quote</h3>
            <p className="text-neutral-lighter italic">"Challenges are opportunities in disguise."</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-beige/10 text-center text-neutral-lighter">
          <p>&copy; {new Date().getFullYear()} Personal Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
