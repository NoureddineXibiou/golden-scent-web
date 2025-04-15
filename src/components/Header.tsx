
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gold-primary hover:text-gold-primary/80"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          <nav className={`${isMenuOpen ? 'absolute top-16 left-0 w-full bg-background border-b border-gold-primary/20 py-4' : 'hidden'} lg:block`}>
            <ul className={`${isMenuOpen ? 'flex flex-col space-y-4 px-4' : 'flex space-x-12'}`}>
              <li>
                <Link 
                  to="/" 
                  className="text-gold-primary hover:text-gold-primary/80 transition-all uppercase tracking-wide text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/parfum-femme" 
                  className="text-gold-primary hover:text-gold-primary/80 transition-all uppercase tracking-wide text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Parfum Femme
                </Link>
              </li>
              <li>
                <Link 
                  to="/parfum-homme" 
                  className="text-gold-primary hover:text-gold-primary/80 transition-all uppercase tracking-wide text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Parfum Homme
                </Link>
              </li>
              <li>
                <Link 
                  to="/coffret-pack" 
                  className="text-gold-primary hover:text-gold-primary/80 transition-all uppercase tracking-wide text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Coffret & Pack
                </Link>
              </li>
            </ul>
          </nav>
          
          <Link to="/" className="text-2xl font-playfair font-semibold gold-glow hover:text-gold-primary/80 transition-all relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            ESSENCE
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gold-primary hover:text-gold-primary/80"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gold-primary hover:text-gold-primary/80"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
