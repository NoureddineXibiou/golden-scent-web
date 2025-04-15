
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80"
          alt="Luxury Perfume"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 gold-glow animate-fade-in-up">
          Discover Your Signature Scent
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
          Explore our curated collection of luxury fragrances that tell your unique story
        </p>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-primary/50 to-gold-secondary/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <Button
            onClick={() => navigate('/parfum-femme')}
            className="relative bg-gold-primary text-black hover:bg-gold-primary/90 animate-fade-in-up animate-delay-200"
            size="lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
