
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const CoffretPack = () => {
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
            <Card key={pack.id} className="group relative overflow-hidden border border-gold-primary/20 bg-background">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 to-gold-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <img src={pack.image} alt={pack.name} className="w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-playfair text-gold-primary mb-2">{pack.name}</h3>
                <p className="text-gold-primary/80">{pack.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoffretPack;
