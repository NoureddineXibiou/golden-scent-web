
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { items, removeItem, itemCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search logic here
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setIsMenuOpen(false);
  };

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
                  onClick={handleHomeClick}
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
          
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-gold-primary hover:text-gold-primary/80 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <div className="p-4 space-y-4">
                    <h2 className="text-lg font-playfair text-gold-primary text-center">Search Perfumes</h2>
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <Input 
                        type="search" 
                        placeholder="Search perfumes..." 
                        className="border-gold-primary/20 bg-background"
                      />
                      <Button type="submit" className="bg-gold-primary hover:bg-gold-primary/80">
                        <Search className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </PopoverContent>
              </Popover>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative text-gold-primary hover:text-gold-primary/80 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gold-primary/50 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-xs bg-gold-primary text-black font-bold rounded-full w-5 h-5 shadow">
                    {itemCount}
                  </span>
                )}
              </Button>
            </div>

            <Link to="/" className="text-2xl font-playfair font-semibold gold-glow hover:text-gold-primary/80 transition-all">
              ESSENCE
            </Link>
          </div>
        </div>
      </div>

      <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-gold-primary">Shopping Cart</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4 space-y-4">
              {itemCount === 0 ? (
                <p className="text-muted-foreground text-center">Your cart is empty</p>
              ) : (
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border border-gold-primary/20 rounded">
                      <span>{item.name} <span className="text-gold-primary ml-2">{item.price}</span></span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-gold-primary hover:text-gold-primary/80"
                        onClick={() => removeItem(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              <Button 
                className="w-full bg-gold-primary hover:bg-gold-primary/80"
                onClick={() => setIsCartOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
