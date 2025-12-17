import { motion } from 'framer-motion';

interface IngredientCardProps {
  emoji: string;
  title: string;
  description: string;
  delay?: number;
}

const IngredientCard = ({ emoji, title, description, delay = 0 }: IngredientCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-cream rounded-2xl p-8 text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
    >
      <div className="text-7xl mb-6 animate-bounce-soft">{emoji}</div>
      <h3 className="font-display text-2xl text-chocolate mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

const IngredientsSection = () => {
  const ingredients = [
    {
      emoji: '🥛',
      title: 'Lapte',
      description: 'Lapte proaspăt pentru un aluat cremos.',
    },
    {
      emoji: '🧈',
      title: 'Unt',
      description: 'Unt de calitate pentru aromă și textură.',
    },
    {
      emoji: '🌾',
      title: 'Făină',
      description: 'Făină albă, cernută cu grijă.',
    },
    {
      emoji: '🥚',
      title: 'Ouă',
      description: 'Ouă proaspete de la țară.',
    },
    {
      emoji: '✨',
      title: 'Vanilie',
      description: 'Esență de vanilie pentru un parfum delicios.',
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-chocolate mb-4">
            Ingrediente Alese
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Doar ce e mai bun ajunge în clătitele noastre
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={ingredient.title}
              {...ingredient}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
