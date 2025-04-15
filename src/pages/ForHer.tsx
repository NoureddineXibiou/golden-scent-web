
import { motion } from "framer-motion";
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";

const ForHer = () => {
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
            For Her
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 relative h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80"
                alt="Featured Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h2 className="text-3xl font-playfair mb-4">Featured Collection</h2>
                  <Button className="bg-gold-primary text-black hover:bg-gold-primary/90">
                    Shop Now
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {[1, 2].map((item) => (
                <div key={item} className="bg-card border border-gold-primary/20 rounded-lg p-6">
                  <h3 className="text-xl font-playfair mb-4">Signature Scent {item}</h3>
                  <p className="mb-4">Discover your perfect fragrance</p>
                  <Button variant="outline" className="w-full border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black">
                    Learn More
                  </Button>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ForHer;
