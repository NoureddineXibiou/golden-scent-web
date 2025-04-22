
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from './ui/drawer';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useCart } from '@/contexts/CartContext';

// Perfume card type and products
type Perfume = {
  id: number;
  name: string;
  price: string;
  image: string; // NEW: image URL
};

const ALL_PERFUMES: Perfume[] = [
  { id: 1, name: 'Amber Queen', price: '€68', image: '/lovable-uploads/8c10ed65-05e0-474a-bbd9-7a3d3a20fc0a.png' },
  { id: 2, name: 'Mystic Oud', price: '€75', image: '/lovable-uploads/8c10ed65-05e0-474a-bbd9-7a3d3a20fc0a.png' },
  { id: 3, name: 'Vanilla Luxe', price: '€70', image: '/lovable-uploads/8c10ed65-05e0-474a-bbd9-7a3d3a20fc0a.png' },
  { id: 4, name: 'Fleur de Coton', price: '€64', image: '/lovable-uploads/8c10ed65-05e0-474a-bbd9-7a3d3a20fc0a.png' },
  { id: 5, name: 'Rose Élégance', price: '€72', image: '/lovable-uploads/8c10ed65-05e0-474a-bbd9-7a3d3a20fc0a.png' }
  // Add more perfumes here if needed
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  const navigate = useNavigate();
  const { items, removeItem, itemCount, addItem } = useCart();

  // Filtering perfumes based on query
  const matchingPerfumes = searchQuery.trim().length > 0
    ? ALL_PERFUMES.filter(perfume =>
        perfume.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // No-op, display is reactive to query
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setIsMenuOpen(false);
  };

  // Add-to-cart for detail card
  const handleAddSelectedToCart = () => {
    if (selectedPerfume) {
      addItem({ ...selectedPerfume });
      setIsCartOpen(true); // Optionally open cart after add
    }
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
                    <h2 className="text-lg font-playfair text-gold-primary text-center">
                      Search Perfumes
                    </h2>
                    <form
                      onSubmit={handleSearch}
                      className="flex gap-2"
                      autoComplete="off"
                    >
                      <Input
                        type="search"
                        placeholder="Search perfumes..."
                        className="border-gold-primary/20 bg-background text-gold-primary placeholder:text-gold-primary/60"
                        value={searchQuery}
                        onChange={e => {
                          setSearchQuery(e.target.value);
                          setSelectedPerfume(null);
                        }}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                      />
                      <Button
                        type="submit"
                        className="bg-gold-primary hover:bg-gold-primary/80"
                        tabIndex={-1}
                      >
                        <Search className="h-4 w-4 text-black" />
                      </Button>
                    </form>
                    {/* Show results below the input */}
                    <AnimatePresence>
                      {searchQuery && !selectedPerfume && (
                        <motion.ul
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="mt-2 bg-background border border-gold-primary/30 rounded-lg max-h-56 overflow-auto shadow-lg divide-y divide-gold-primary/10"
                        >
                          {matchingPerfumes.length > 0 ? (
                            matchingPerfumes.map(perfume => (
                              <li
                                key={perfume.id}
                                className="flex items-center justify-between px-4 py-2 hover:bg-gold-primary/10 cursor-pointer transition-all"
                                onClick={() => setSelectedPerfume(perfume)}
                              >
                                <span className="font-medium text-gold-primary">{perfume.name}</span>
                                <span className="text-sm text-muted-foreground">{perfume.price}</span>
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-2 text-center text-gold-primary/70">
                              No perfume found.
                            </li>
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    {/* Perfume details card */}
                    {selectedPerfume && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 p-4 rounded-lg bg-background border border-gold-primary/30 shadow-xl relative flex flex-col items-center"
                      >
                        <button
                          className="absolute top-2 right-2 rounded-full p-1 hover:bg-gold-primary/20 transition-all"
                          onClick={() => setSelectedPerfume(null)}
                          aria-label="Close"
                        >
                          <X className="h-4 w-4 text-gold-primary" />
                        </button>
                        <img
                          src={selectedPerfume.image}
                          alt={selectedPerfume.name}
                          className="w-32 h-32 object-contain rounded-md mb-4 border border-gold-primary/20 shadow"
                          style={{ background: "#fff" }}
                        />
                        <h3 className="text-xl font-playfair font-bold text-gold-primary mb-2 text-center">{selectedPerfume.name}</h3>
                        <p className="text-base text-gold-primary mb-6">{selectedPerfume.price}</p>
                        <Button
                          className="w-full bg-gold-primary text-black hover:bg-gold-primary/90"
                          onClick={handleAddSelectedToCart}
                        >
                          Add to Cart
                        </Button>
                      </motion.div>
                    )}
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

