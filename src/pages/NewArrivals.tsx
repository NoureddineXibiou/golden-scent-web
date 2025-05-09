
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import PerfumeSearchBar from "@/components/PerfumeSearchBar";

// Sample perfumes
const perfumes = [
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
  { id: 13, name: "Pearl Essence", price: 289.99, image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80" },
  { id: 14, name: "Gold Rush", price: 319.99, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80" },
  { id: 15, name: "Black Diamond", price: 349.99, image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" }
];

const NewArrivals = () => {
  const [visiblePerfumes, setVisiblePerfumes] = useState(perfumes);
  const [highlighter, setHighlighter] = useState<(name: string) => React.ReactNode>(() => (n) => n);

  // Callback: update product list and highlighter from search bar
  const handleFiltered = useCallback((filtered: typeof perfumes, hl: (n: string) => React.ReactNode) => {
    setVisiblePerfumes(filtered);
    setHighlighter(() => hl);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-12"
        >
          {/* Title + Search */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-between mb-8 gap-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center gold-glow">
              New Arrivals
            </h1>
            {/* Search bar/top right */}
            <div className="flex self-center sm:self-auto">
              <PerfumeSearchBar perfumes={perfumes} onFiltered={handleFiltered} />
            </div>
          </div>
          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visiblePerfumes.length === 0 ? (
              <motion.div
                layout
                key="no-results"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center py-20"
              >
                <span className="text-gold-primary text-xl mb-2">No perfumes found.</span>
                <span className="text-muted-foreground">Try a different search term.</span>
              </motion.div>
            ) : (
              visiblePerfumes.map((perfume, index) => (
                <motion.div
                  layout
                  key={perfume.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="bg-card border border-gold-primary/20 rounded-lg overflow-hidden card-hover"
                >
                  <div className="relative h-[300px]">
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair mb-2">{highlighter(perfume.name)}</h3>
                    <p className="text-gold-primary mb-4">${perfume.price}</p>
                    <Button className="w-full bg-gold-primary text-black hover:bg-gold-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
