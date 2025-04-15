
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
          
          <Link to="/" className="text-2xl font-playfair font-semibold gold-glow">
            ESSENCE
          </Link>
          
          <nav className={`${isMenuOpen ? 'absolute top-16 left-0 w-full bg-background border-b border-gold-primary/20 py-4' : 'hidden'} lg:block`}>
            <ul className={`${isMenuOpen ? 'flex flex-col space-y-4 px-4' : 'flex space-x-8'}`}>
              <li>
                <Link to="/new-arrivals" className="text-gold-primary hover:text-gold-primary/80 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gold-primary hover:text-gold-primary/80 transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/for-her" className="text-gold-primary hover:text-gold-primary/80 transition-colors">
                  For Her
                </Link>
              </li>
              <li>
                <Link to="/for-him" className="text-gold-primary hover:text-gold-primary/80 transition-colors">
                  For Him
                </Link>
              </li>
            </ul>
          </nav>
          
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
