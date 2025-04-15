
import { motion } from "framer-motion";
import Header from '@/components/Header';
import { Button } from "@/components/ui/button";

const NewArrivals = () => {
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
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-center gold-glow">
            New Arrivals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-card border border-gold-primary/20 rounded-lg overflow-hidden"
              >
                <div className="relative h-[300px]">
                  <img
                    src={`https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80`}
                    alt="New Perfume"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair mb-2">Limited Edition {item}</h3>
                  <p className="text-gold-primary mb-4">${(199 + item * 10).toFixed(2)}</p>
                  <Button className="w-full bg-gold-primary text-black hover:bg-gold-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default NewArrivals;
