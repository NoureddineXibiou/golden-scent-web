import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer';
import { useCart } from '@/contexts/CartContext';
import PerfumeSearchBar from './PerfumeSearchBar';
import { motion, AnimatePresence } from 'framer-motion';

// Sample perfumes for the search feature
const headerPerfumes = [
  { id: 1, name: "Midnight Orchid", price: 199.99, image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80" },
  { id: 2, name: "Golden Aura", price: 229.99, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80" },
  { id: 3, name: "Royal Amber", price: 189.99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" },
  { id: 4, name: "Velvet Rose", price: 249.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80" },
  { id: 5, name: "Black Orchid", price: 279.99, image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80" },
  { id: 6, name: "Mystic Oud", price: 299.99, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80" },
  { id: 7, name: "Divine Jasmine", price: 219.99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" },
  { id: 8, name: "Amber Dreams", price: 239.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80" },
  { id: 9, name: "Gold Elixir", price: 259.99, image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80" },
  { id: 10, name: "Royal Musk", price: 269.99, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80" },
  { id: 11, name: "Silk Rose", price: 229.99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" },
  { id: 12, name: "Night Jasmine", price: 249.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(headerPerfumes);
  const [searchHighlighter, setSearchHighlighter] = useState<(name: string) => React.ReactNode>(() => (n) => n);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const navigate = useNavigate();
  const { items, removeItem, itemCount } = useCart();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setIsMenuOpen(false);
  };
  
  const handleSearchResults = (results: typeof headerPerfumes, highlighter: (n: string) => React.ReactNode) => {
    setSearchResults(results);
    setSearchHighlighter(() => highlighter);
    setShowSearchResults(true);
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
              <div className="relative">
                <PerfumeSearchBar 
                  perfumes={headerPerfumes}
                  onFiltered={handleSearchResults}
                />
                
                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {showSearchResults && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto bg-background border border-gold-primary/20 shadow-2xl rounded-lg z-40"
                    >
                      <div className="p-4">
                        <h3 className="text-gold-primary font-playfair mb-3">Perfumes</h3>
                        <ul className="space-y-2">
                          {searchResults.map((perfume) => (
                            <li key={perfume.id} className="p-2 hover:bg-gold-primary/5 rounded transition-colors">
                              <Link to={`/perfume/${perfume.id}`} className="flex items-center gap-3" onClick={() => setShowSearchResults(false)}>
                                <div className="w-12 h-12 bg-muted rounded overflow-hidden">
                                  <img src={perfume.image} alt={perfume.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{searchHighlighter(perfume.name)}</div>
                                  <div className="text-xs text-gold-primary">${perfume.price}</div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
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
