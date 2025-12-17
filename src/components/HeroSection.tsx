import { Suspense } from 'react';
import { motion } from 'framer-motion';
import PancakeScene from './PancakeScene';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🍓</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🍫</div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🥞</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>

      <div className="container mx-auto container-padding min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 pt-20 pb-16">
        {/* Text content */}
        <motion.div 
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-strawberry font-body font-medium tracking-wider uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Artizanal • Proaspăt • Delicios
          </motion.span>
          
          <motion.h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl text-chocolate leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Clătite gătite manual,{' '}
            <span className="text-strawberry">ca acasă</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-body mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Ingrediente simple, gust autentic. Fiecare clătită este preparată cu dragoste și atenție la detalii.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#wheel" 
              className="inline-flex items-center gap-2 bg-chocolate text-chocolate-foreground px-8 py-4 rounded-full font-display text-lg shadow-warm hover:scale-105 transition-transform duration-300"
            >
              🎡 Încearcă Norocul
            </a>
            <a 
              href="#ingredients" 
              className="inline-flex items-center gap-2 bg-cream text-chocolate px-8 py-4 rounded-full font-display text-lg shadow-soft hover:shadow-warm transition-all duration-300"
            >
              🍓 Vezi Ingredientele
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Pancake */}
        <motion.div 
          className="flex-1 w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Suspense fallback={
            <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="text-8xl animate-bounce-soft">🥞</div>
            </div>
          }>
            <PancakeScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-body">Derulează în jos</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
