
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const ParfumFemme = () => {
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
            <Card key={perfume.id} className="group relative overflow-hidden border border-gold-primary/20 bg-background">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 to-gold-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <img src={perfume.image} alt={perfume.name} className="w-full h-64 object-cover mb-4" />
                <h3 className="text-xl font-playfair text-gold-primary mb-2">{perfume.name}</h3>
                <p className="text-gold-primary/80">{perfume.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParfumFemme;
