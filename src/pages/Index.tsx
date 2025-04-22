
import React, { useState, useCallback } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PerfumeSearchBar from "@/components/PerfumeSearchBar";

// Sample perfumes 
const perfumes = [
  { id: 1, name: "Midnight Orchid", price: 199.99, image: "/lovable-uploads/5b6aacd0-7446-4450-aee5-9ade645281b9.png" },
  { id: 2, name: "Golden Aura", price: 229.99, image: "/lovable-uploads/5b6aacd0-7446-4450-aee5-9ade645281b9.png" },
  { id: 3, name: "Royal Amber", price: 189.99, image: "/lovable-uploads/5b6aacd0-7446-4450-aee5-9ade645281b9.png" },
  { id: 4, name: "Velvet Rose", price: 249.99, image: "/lovable-uploads/5b6aacd0-7446-4450-aee5-9ade645281b9.png" },
  { id: 5, name: "Black Orchid", price: 279.99, image: "/lovable-uploads/5b6aacd0-7446-4450-aee5-9ade645281b9.png" },
];

const Index = () => {
  const [visiblePerfumes, setVisiblePerfumes] = useState(perfumes);
  const [highlighter, setHighlighter] = useState<(name: string) => React.ReactNode>(() => (n) => n);

  // Search callback
  const handleResults = useCallback((results, highlight) => {
    setVisiblePerfumes(results);
    setHighlighter(() => highlight);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Top-bar search */}
        <div className="w-full flex justify-end items-center px-8 pt-8">
          <PerfumeSearchBar perfumes={perfumes} onResults={handleResults} />
        </div>
        {/* Perfume product grid */}
        <section className="max-w-3xl mx-auto py-10 px-4 animate-fade-in">
          <h2 className="text-center text-3xl mb-5 font-playfair font-bold gold-glow">Our Perfumes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {visiblePerfumes.length === 0 ? (
              <div className="col-span-full flex flex-col items-center pt-16 pb-24">
                <span className="text-gold-primary text-lg mb-2">No perfumes found.</span>
                <span className="text-muted-foreground">Try a different search term.</span>
              </div>
            ) : (
              visiblePerfumes.map((perfume) => (
                <div
                  key={perfume.id}
                  className="bg-card border border-gold-primary/30 rounded-xl overflow-hidden card-hover shadow-md flex flex-col"
                >
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="flex flex-col gap-1 p-4 h-full">
                    <h3 className="text-gold-primary text-lg font-bold font-playfair mb-1 text-shadow">{highlighter(perfume.name)}</h3>
                    <span className="text-gold-primary">${perfume.price}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
