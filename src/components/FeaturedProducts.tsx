
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';
import { useCart } from '@/contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Tom Ford Black Orchid',
    price: '$399',
    image: '/lovable-uploads/a2e03bb4-8a53-4d98-aba7-b96389c92c03.png'
  },
  {
    id: 2,
    name: 'Dolce & Gabbana Velvet Amber Skin',
    price: '$359',
    image: '/lovable-uploads/a2e03bb4-8a53-4d98-aba7-b96389c92c03.png'
  },
  {
    id: 3,
    name: 'Creed Royal Oud',
    price: '$429',
    image: '/lovable-uploads/a2e03bb4-8a53-4d98-aba7-b96389c92c03.png'
  },
  {
    id: 4,
    name: 'Jo Malone Dark Water & Vanilla',
    price: '$379',
    image: '/lovable-uploads/a2e03bb4-8a53-4d98-aba7-b96389c92c03.png'
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
  },
  {
    id: 16,
    name: 'Royal Saffron',
    price: '$469',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80'
  }
];

const FeaturedProducts = () => {
  const { addItem } = useCart();

  const scrollToProducts = () => {
    document.getElementById('featured-products')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <section id="featured-products" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 
          onClick={scrollToProducts}
          className="text-3xl md:text-4xl font-playfair text-center mb-12 gold-glow cursor-pointer hover:scale-105 transition-transform duration-300"
        >
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
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-primary/10 to-gold-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.3), rgba(0, 0, 0, 0.5))"
                }}
              />
              <Card className="bg-card border-gold-primary/20 relative z-10 h-full flex flex-col">
                <CardContent className="p-0">
                  <AspectRatio ratio={3/4} className="bg-black/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-lg"
                      onError={(e) => {
                        console.error(`Failed to load image: ${product.image}`);
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80';
                      }}
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter className="flex flex-col items-center p-6 pt-4 mt-auto">
                  <h3 className="text-xl font-playfair text-gold-primary text-center mb-2">{product.name}</h3>
                  <p className="text-gold-primary font-semibold mb-4">{product.price}</p>
                  <Button
                    className="w-full h-10 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black transition-colors group-hover:glow font-medium tracking-wide uppercase whitespace-nowrap px-4"
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
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
