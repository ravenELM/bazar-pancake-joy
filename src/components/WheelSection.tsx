import { motion } from 'framer-motion';
import FortuneWheel from './FortuneWheel';

const WheelSection = () => {
  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-5xl mb-4 block">🎡</span>
          <h2 className="font-display text-4xl md:text-5xl text-chocolate mb-4">
            Roata Norocului
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Încearcă-ți norocul! Poți câștiga clătite gratis sau topping-uri extra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FortuneWheel />
        </motion.div>
      </div>
    </section>
  );
};

export default WheelSection;
