
import { motion } from "framer-motion";
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";

const ForHim = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center gold-glow">
            For Him
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-playfair gold-glow">Masculine Elegance</h2>
              <p className="text-lg">Discover our curated collection of sophisticated fragrances for the modern gentleman.</p>
              <Button className="bg-gold-primary text-black hover:bg-gold-primary/90">
                Explore Collection
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square relative rounded-lg overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80"
                    alt={`Category ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-lg font-playfair">Category {item}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ForHim;
