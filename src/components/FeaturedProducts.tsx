
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

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
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 gold-glow">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-gold-primary/20 card-hover">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-center space-y-4 p-6">
                <h3 className="text-xl font-playfair">{product.name}</h3>
                <p className="text-gold-primary">{product.price}</p>
                <Button
                  className="w-full bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black transition-colors"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
