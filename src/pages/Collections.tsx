
import { motion } from "framer-motion";
import Header from '@/components/Header';

const Collections = () => {
  const collections = [
    { name: "Summer Paradise", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80" },
    { name: "Winter Dreams", image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80" },
    { name: "Spring Bloom", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80" },
  ];

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
            Our Collections
          </h1>
          <div className="space-y-20">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-playfair mb-4 gold-glow">{collection.name}</h2>
                  <p className="text-lg mb-6">Discover our exclusive {collection.name.toLowerCase()} collection.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gold-primary text-black rounded-md hover:bg-gold-primary/90 transition-colors"
                  >
                    Explore Collection
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Collections;
