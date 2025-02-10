
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
          ? "bg-secondary/80 backdrop-blur-md py-4"
          : "bg-secondary py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-playfair text-2xl text-primary hover:text-primary-dark transition-colors"
        >
          Salvador Villarroel 
        </Link>

        <button
          className="md:hidden p-2"
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
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md md:hidden py-4 shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/fun-facts" className="flex items-center gap-2">
                <Smile className="w-4 h-4" />
                Fun Facts
              </NavLink>
              <NavLink to="/contact">Contact</NavLink>
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
    className={`font-montserrat text-sm text-primary hover:text-accent-contrast transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navigation;
