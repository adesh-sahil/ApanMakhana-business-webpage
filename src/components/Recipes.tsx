import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, X } from 'lucide-react';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    tag: string;
}

const RECIPES: Recipe[] = [
    {
        name: 'Makhana Kheer',
        description: 'A rich, creamy dessert made with foxnuts and milk. Perfect for festivals!',
        image: './makhana-kheer.png',
        tag: 'Dessert',
        ingredients: [
            '1 cup Foxnuts (Makhana)',
            '2 cups Full Cream Milk',
            '¼ cup Sugar (adjust to taste)',
            '¼ tsp Cardamom Powder',
            'A pinch of Saffron strands',
            '1 tbsp Ghee',
            '2 tbsp Chopped Cashews & Almonds',
        ],
        instructions: [
            'Roast makhana in ghee until crispy and golden.',
            'Boil milk, reduce heat, simmer. Add saffron.',
            'Add roasted makhana, cook 10-12 min until softened.',
            'Add sugar and cardamom. Cook until thickened.',
            'Garnish with nuts. Serve warm or chilled!',
        ],
    },
    {
        name: 'Makhana Curry',
        description: 'A spicy, aromatic curry full of flavors. Perfect for lunch or dinner!',
        image: './makhana-curry.png',
        tag: 'Main Course',
        ingredients: [
            '1 cup Foxnuts (Makhana)',
            '1 Onion, finely chopped',
            '1 Tomato, pureed',
            '¼ cup Fresh Cream',
            '1 tbsp Ginger-Garlic Paste',
            '½ tsp Turmeric, 1 tsp Red Chili Powder',
            '1 tsp Garam Masala, Salt to taste',
        ],
        instructions: [
            'Dry roast makhana until crispy.',
            'Sauté onions in oil with cumin seeds.',
            'Add spices and tomato puree. Cook until oil separates.',
            'Add water, boil, simmer 5 mins.',
            'Add makhana and cream. Simmer 10 mins. Garnish.',
        ],
    },
    {
        name: 'Makhana Laddoo',
        description: 'Healthy energy balls with jaggery & dry fruits — sweet and nutritious!',
        image: './makhana-laddoo.png',
        tag: 'Snack',
        ingredients: [
            '1 cup Foxnuts (Makhana)',
            '½ cup Jaggery (grated)',
            '¼ cup Ghee',
            '¼ tsp Cardamom Powder',
            '2 tbsp Chopped Pistachios',
            '1 tbsp each: Cashews, Almonds',
            '1 tbsp Pumpkin Seeds',
        ],
        instructions: [
            'Dry roast foxnuts until crispy. Cool down.',
            'Melt ghee, add jaggery. Stir until syrup thickens.',
            'Crush makhana, add with nuts and cardamom.',
            'Shape into laddoos with greased hands.',
            'Set for 30 mins. Enjoy!',
        ],
    },
];

function RecipeModal({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center 
                 justify-center z-50 p-0 sm:p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg 
                   max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header image */}
                <div className="relative h-44 sm:h-48 overflow-hidden rounded-t-3xl">
                    <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full 
                       flex items-center justify-center active:bg-white/70"
                    >
                        <X className="w-4 h-4 text-gray-700" />
                    </button>
                    <div className="absolute bottom-3 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-body 
                             font-semibold text-brand-700">
                            {recipe.tag}
                        </span>
                    </div>
                </div>

                <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-1.5">
                        {recipe.name}
                    </h3>
                    <p className="text-gray-500 font-body text-sm mb-5">{recipe.description}</p>

                    <div className="mb-5">
                        <h4 className="text-xs font-body font-semibold text-gray-800 uppercase tracking-wider mb-2.5">
                            Ingredients
                        </h4>
                        <div className="space-y-1.5">
                            {recipe.ingredients.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm font-body text-gray-600">
                                    <span className="w-1.5 h-1.5 mt-1.5 bg-brand-400 rounded-full flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-body font-semibold text-gray-800 uppercase tracking-wider mb-2.5">
                            Instructions
                        </h4>
                        <div className="space-y-2.5">
                            {recipe.instructions.map((step, i) => (
                                <div key={i} className="flex gap-2.5 text-sm font-body text-gray-600">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full gradient-cta text-white text-[10px] 
                                   font-semibold flex items-center justify-center mt-0.5">
                                        {i + 1}
                                    </span>
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Recipes() {
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="recipes" className="py-16 sm:py-20 lg:py-28 gradient-section-alt" ref={ref}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                    >
                        <span className="section-badge mb-4 inline-flex">Cook with Makhana</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3">
                            <span className="gradient-text-brand">Delicious Recipes</span>
                        </h2>
                        <p className="text-gray-500 font-body text-sm sm:text-lg max-w-xl mx-auto">
                            Transform our fox nuts into mouth-watering dishes your family will love
                        </p>
                    </motion.div>
                </div>

                {/* Recipe cards — horizontal scroll on mobile */}
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-5 px-5 sm:-mx-0 sm:px-0 
                        snap-x snap-mandatory scrollbar-hide 
                        sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
                    {RECIPES.map((recipe, i) => (
                        <motion.div
                            key={recipe.name}
                            initial={{ opacity: 0, y: 25 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="flex-shrink-0 w-[280px] sm:w-auto snap-start group card-premium overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-44 sm:h-52 overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md 
                                 rounded-full text-[10px] sm:text-xs font-body font-semibold text-brand-700">
                                    {recipe.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-display font-bold text-gray-800 mb-1.5">
                                    {recipe.name}
                                </h3>
                                <p className="text-gray-500 font-body text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                                    {recipe.description}
                                </p>
                                <button
                                    onClick={() => setSelectedRecipe(recipe)}
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-body font-semibold 
                             text-brand-600 active:text-brand-700 group/btn"
                                >
                                    View Recipe
                                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recipe modal — slides up from bottom on mobile */}
            <AnimatePresence>
                {selectedRecipe && (
                    <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}
