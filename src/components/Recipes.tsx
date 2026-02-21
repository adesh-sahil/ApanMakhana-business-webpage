import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, ChefHat, X } from 'lucide-react';

const RECIPES = [
    {
        title: 'Masala Makhana',
        time: '10 min',
        servings: '2',
        image: './makhana-recipe.jpeg',
        ingredients: ['2 cups Apan Makhana', '1 tbsp ghee', '½ tsp turmeric', '½ tsp chili powder', 'Salt to taste', 'Curry leaves'],
        steps: ['Dry roast makhana on medium heat until crispy.', 'Add ghee, turmeric, chili & curry leaves.', 'Toss well for 2 minutes. Serve hot!'],
    },
    {
        title: 'Makhana Kheer',
        time: '25 min',
        servings: '4',
        image: './makhana-kheer.png',
        ingredients: ['1 cup Apan Makhana', '1 liter full cream milk', '½ cup sugar', '1 tbsp ghee', 'Cardamom, nuts for garnish'],
        steps: ['Roast makhana in ghee till crispy. Crush lightly.', 'Boil milk, reduce by half on low flame.', 'Add makhana, sugar & cardamom. Simmer 10 min.', 'Garnish with nuts. Serve warm or chilled.'],
    },
    {
        title: 'Makhana Curry',
        time: '20 min',
        servings: '3',
        image: './makhana-curry.png',
        ingredients: ['2 cups Apan Makhana', '1 cup tomato puree', '½ cup cream', '1 tsp garam masala', 'Ginger-garlic paste', 'Oil & salt'],
        steps: ['Roast makhana in oil. Set aside.', 'Sauté ginger-garlic paste, add tomato puree.', 'Add spices, cream & makhana. Simmer 8 min.', 'Garnish with cream and serve with rice or roti.'],
    },
];

export default function Recipes() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="recipes" className="py-16 sm:py-20 lg:py-28 gradient-green-soft" ref={ref}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
                        <span className="section-label mb-4 inline-flex">
                            <ChefHat className="w-3 h-3" />
                            Cook with Makhana
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                            Delicious Recipes
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-base max-w-md mx-auto">
                            Simple recipes that make makhana the star of your kitchen
                        </p>
                    </motion.div>
                </div>

                {/* Recipe cards — horizontal scroll on mobile, grid on desktop */}
                <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-3 -mx-5 px-5 sm:-mx-0 sm:px-0 
                        snap-x snap-mandatory scrollbar-hide 
                        sm:grid sm:grid-cols-3 sm:overflow-visible">
                    {RECIPES.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="flex-shrink-0 w-[260px] sm:w-auto snap-start card overflow-hidden cursor-pointer 
                         group"
                            onClick={() => setActive(i)}
                        >
                            <div className="relative h-40 sm:h-44 overflow-hidden">
                                <img
                                    src={r.image}
                                    alt={r.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-display font-bold text-gray-900 mb-2">{r.title}</h3>
                                <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-gray-500">
                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{r.time}</span>
                                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{r.servings} servings</span>
                                </div>
                                <button className="mt-3 text-xs sm:text-sm font-body font-semibold text-brand-600 
                                   group-hover:text-brand-700 transition-colors">
                                    View Recipe →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recipe modal — bottom sheet on mobile */}
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center sm:justify-center"
                    onClick={() => setActive(null)}
                >
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full sm:w-[520px] max-h-[85vh] bg-white rounded-t-2xl sm:rounded-2xl 
                       overflow-y-auto shadow-xl"
                    >
                        <div className="sticky top-0 bg-white border-b border-gray-50 p-4 flex items-center justify-between z-10">
                            <h3 className="text-base font-display font-bold text-gray-900">{RECIPES[active].title}</h3>
                            <button onClick={() => setActive(null)} className="p-1.5 rounded-lg active:bg-gray-100">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>
                        <div className="p-4 sm:p-5">
                            <img
                                src={RECIPES[active].image}
                                alt={RECIPES[active].title}
                                className="w-full h-44 sm:h-52 object-cover rounded-xl mb-4"
                            />
                            <div className="flex gap-3 mb-4 text-xs font-body text-gray-500">
                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{RECIPES[active].time}</span>
                                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{RECIPES[active].servings} servings</span>
                            </div>
                            <h4 className="text-sm font-body font-bold text-gray-800 mb-2">Ingredients</h4>
                            <ul className="space-y-1 mb-5">
                                {RECIPES[active].ingredients.map((ing) => (
                                    <li key={ing} className="text-sm font-body text-gray-600 flex items-start gap-2">
                                        <span className="text-brand-500 mt-0.5">•</span>{ing}
                                    </li>
                                ))}
                            </ul>
                            <h4 className="text-sm font-body font-bold text-gray-800 mb-2">Steps</h4>
                            <ol className="space-y-2">
                                {RECIPES[active].steps.map((step, i) => (
                                    <li key={i} className="text-sm font-body text-gray-600 flex items-start gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 text-brand-600 
                                     text-xs font-semibold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
