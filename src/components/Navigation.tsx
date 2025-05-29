
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Smile } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-secondary py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 font-playfair text-2xl text-primary hover:text-accent-contrast transition-colors duration-300"
        >
          <img 
            src="/lovable-uploads/0af8be71-398f-4452-9520-86d736370300.png" 
            alt="Salvador Villarroel Logo" 
            className="h-8 w-auto object-contain"
          />
          Salvador Villarroel 
        </Link>

        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/fun-facts" className="flex items-center gap-2">
            <Smile className="w-4 h-4" />
            Fun Facts
          </NavLink>
          <Link
            to="/contact"
            className="px-6 py-2 bg-accent hover:bg-accent-light text-white rounded-full font-montserrat text-sm tracking-wide transition-all duration-300 hover:scale-105 transform shadow-md"
          >
            Contact
          </Link>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-secondary/98 backdrop-blur-md md:hidden py-4 shadow-xl border-t border-primary/10">
            <div className="flex flex-col space-y-4 px-6">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/fun-facts" className="flex items-center gap-2">
                <Smile className="w-4 h-4" />
                Fun Facts
              </NavLink>
              <Link
                to="/contact"
                className="px-6 py-2 bg-accent hover:bg-accent-light text-white rounded-full font-montserrat text-sm tracking-wide transition-all duration-300 text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) => (
  <Link
    to={to}
    className={`font-montserrat text-sm text-primary hover:text-accent-contrast transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent-contrast after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${className}`}
  >
    {children}
  </Link>
);

export default Navigation;
