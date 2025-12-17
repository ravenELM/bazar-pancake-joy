import HeroSection from '@/components/HeroSection';
import IngredientsSection from '@/components/IngredientsSection';
import TrustSection from '@/components/TrustSection';
import WheelSection from '@/components/WheelSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <div id="ingredients">
        <IngredientsSection />
      </div>
      <TrustSection />
      <div id="wheel">
        <WheelSection />
      </div>
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-2xl mb-2">🥞 Clătite Artizanale</p>
          <p className="text-sm opacity-70">
            Făcute cu dragoste, servite cu zâmbet
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
