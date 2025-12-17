import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-chocolate text-chocolate-foreground">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-6xl mb-6 block">📍</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Ne Găsești La Bazar
          </h2>
          <p className="text-2xl md:text-3xl font-display mb-4 opacity-90">
            Clătite calde, pe loc
          </p>
          <p className="text-lg opacity-80 mb-8">
            Făcute manual, servite cu zâmbet 😊
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-cream text-chocolate px-8 py-4 rounded-full font-display text-xl shadow-warm"
          >
            <MapPin className="w-6 h-6" />
            <span>Te așteptăm!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
