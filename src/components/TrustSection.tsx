import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    'Gătite manual în bucătărie',
    'Fără compromisuri, fără ingrediente artificiale',
    'Ingrediente proaspete, alese cu grijă',
    'Preparate cu dragoste și atenție',
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-6xl mb-6 block">👩‍🍳</span>
            <h2 className="font-display text-4xl md:text-5xl text-chocolate mb-4">
              De Ce Ne Alegi Pe Noi?
            </h2>
            <p className="text-muted-foreground text-lg">
              Pentru că fiecare clătită este făcută cu suflet
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-cream rounded-xl p-5 shadow-soft"
              >
                <CheckCircle className="w-6 h-6 text-strawberry flex-shrink-0" />
                <span className="text-foreground font-medium text-left">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
