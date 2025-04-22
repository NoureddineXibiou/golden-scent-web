
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const ParfumFemme = () => {
  const { addItem } = useCart();
  const perfumes = [
    { id: 1, name: "Rose Garden", price: "299€", image: "/placeholder.svg" },
    { id: 2, name: "Midnight Jasmine", price: "349€", image: "/placeholder.svg" },
    { id: 3, name: "Golden Orchid", price: "399€", image: "/placeholder.svg" },
    { id: 4, name: "Velvet Dream", price: "329€", image: "/placeholder.svg" },
    { id: 5, name: "Crystal Romance", price: "379€", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-playfair text-gold-primary mb-12">Parfum Femme</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <motion.div
              key={perfume.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <Card className="group relative overflow-hidden border border-gold-primary/20 bg-background h-full flex flex-col">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-black/20 flex items-center justify-center">
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-2 p-6 mt-auto">
                  <h3 className="text-xl font-playfair text-gold-primary text-center">{perfume.name}</h3>
                  <p className="text-gold-primary font-semibold mb-4">{perfume.price}</p>
                  <Button
                    className="w-full py-2 px-4 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black transition-colors group-hover:glow font-medium tracking-wide uppercase truncate"
                    onClick={() => addItem({ id: perfume.id, name: perfume.name, price: perfume.price })}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParfumFemme;
