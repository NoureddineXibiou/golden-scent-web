
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Midnight Orchid',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Golden Amber',
    price: '$259',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Royal Oud',
    price: '$329',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Velvet Rose',
    price: '$279',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Black Orchid',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Mystic Oud',
    price: '$389',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Divine Jasmine',
    price: '$269',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Amber Dreams',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    name: 'Gold Elixir',
    price: '$419',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    name: 'Royal Musk',
    price: '$339',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80'
  },
  {
    id: 11,
    name: 'Silk Rose',
    price: '$289',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80'
  },
  {
    id: 12,
    name: 'Night Jasmine',
    price: '$309',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80'
  },
  {
    id: 13,
    name: 'Pearl Essence',
    price: '$379',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80'
  },
  {
    id: 14,
    name: 'Gold Rush',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80'
  },
  {
    id: 15,
    name: 'Black Diamond',
    price: '$449',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 gold-glow">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gold-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card className="bg-card border-gold-primary/20 relative z-10">
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-xl font-playfair text-gold-primary">{product.name}</h3>
                  <p className="text-gold-primary font-semibold">{product.price}</p>
                  <Button
                    className="w-full bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black transition-colors group-hover:glow"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
