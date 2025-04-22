
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const CoffretPack = () => {
  const { addItem } = useCart();
  const packs = [
    { id: 1, name: "Luxury Collection Set", price: "599€", image: "/placeholder.svg" },
    { id: 2, name: "Holiday Gift Pack", price: "449€", image: "/placeholder.svg" },
    { id: 3, name: "Essential Trio", price: "699€", image: "/placeholder.svg" },
    { id: 4, name: "Travel Edition", price: "299€", image: "/placeholder.svg" },
    { id: 5, name: "Premium Box Set", price: "899€", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-playfair text-gold-primary mb-12">Coffret & Pack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack) => (
            <motion.div
              key={pack.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <Card className="group relative overflow-hidden border border-gold-primary/20 bg-background h-full flex flex-col">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-black/20 flex items-center justify-center">
                    <img
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center p-6 pt-4 mt-auto">
                  <h3 className="text-xl font-playfair text-gold-primary text-center mb-2">{pack.name}</h3>
                  <p className="text-gold-primary font-semibold mb-4">{pack.price}</p>
                  <Button
                    className="w-full h-10 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black transition-colors group-hover:glow font-medium tracking-wide uppercase whitespace-nowrap px-4"
                    onClick={() => addItem({ id: pack.id, name: pack.name, price: pack.price })}
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

export default CoffretPack;
