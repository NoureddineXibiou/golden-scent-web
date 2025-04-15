
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card mt-20 border-t border-gold-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair text-gold-primary">ESSENCE</h2>
            <p className="text-muted-foreground">
              Crafting elegant fragrances that tell your unique story since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold-primary hover:text-gold-primary/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold-primary hover:text-gold-primary/80">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold-primary hover:text-gold-primary/80">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair text-gold-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-gold-primary">Shop All</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold-primary">Collections</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold-primary">Perfumers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold-primary">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair text-gold-primary">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Fragrance Lane, Paris, France</li>
              <li>+33 123 45 67 89</li>
              <li>info@essence.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair text-gold-primary">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background border border-gold-primary/20 rounded px-3 py-2 text-sm"
              />
              <Button className="bg-gold-primary text-black hover:bg-gold-primary/90">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-primary/20 mt-12 pt-6 text-center text-sm text-muted-foreground">
          © 2025 ESSENCE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
