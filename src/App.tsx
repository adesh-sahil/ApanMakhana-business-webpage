import { useState, useEffect, ReactNode } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShoppingCart,
  Star,
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Instagram,
  ChevronRight,
  MessageCircle,
  ArrowDown,
  Sun,
  Moon,
  HandHeart,
} from "lucide-react";
import "./components/RecipeModel";
import RecipeModal from "./components/RecipeModel";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  interface Recipe {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  }

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const benefits = [
    "Slows the ageing process",
    "Helps in losing weight",
    "Treats Insomnia",
    "Anti-inflammatory properties",
    "Good source of calcium",
    "Good for heart",
  ];

  const recipes = [
    {
      name: "Makhana Kheer 🍚✨",
      description:
        "A rich, creamy, and fragrant dessert made with foxnuts (makhana) and milk. Perfect for festivals or a comforting evening snack! 😋",
      ingredients: [
        "1 cup Foxnuts (Makhana) 🌰",
        "2 cups Full Cream Milk 🥛",
        "1/4 cup Sugar (adjust to taste) 🍯",
        "1/4 tsp Cardamom Powder 🌿",
        "A pinch of Saffron strands 🌸",
        "1 tbsp Ghee (Clarified Butter) 🧈",
        "2 tbsp Chopped Cashews and Almonds for garnish 🥜",
        "A few strands of Rose Petals for garnish (optional) 🌹",
      ],
      instructions: [
        "Roast the Makhana: Heat 1 tbsp of ghee in a pan and roast the foxnuts until they become crispy and light golden brown. Set them aside. 🔥",
        "Boil the Milk: In the same pan, add the milk and bring it to a boil. Reduce the heat to medium and let it simmer. Add saffron strands for color and aroma. 🌺",
        "Combine Makhana and Milk: Add the roasted makhana to the simmering milk. Let it cook for 10-12 minutes until the makhana softens but retains a little crunch. Stir occasionally. 🍶",
        "Add Sugar & Cardamom: Stir in the sugar and cardamom powder. Continue to cook until the kheer thickens slightly (about 5 minutes). 🍬",
        "Garnish & Serve: Garnish with chopped cashews, almonds, and optional rose petals. Serve warm or chilled—perfect for all seasons! 🌟",
      ],
    },
    {
      name: "Makhana Curry 🍲🔥",
      description:
        "A spicy, aromatic curry made with foxnuts (makhana) that's full of flavors and health benefits. A perfect savory dish for lunch or dinner! 🍽️",
      ingredients: [
        "1 cup Foxnuts (Makhana) 🌰",
        "1 Onion, finely chopped 🧅",
        "1 Tomato, pureed 🍅",
        "1/4 cup Fresh Cream 🥛",
        "1 tbsp Ginger-Garlic Paste 🧄",
        "1/2 tsp Turmeric Powder 🌿",
        "1 tsp Red Chili Powder 🌶️",
        "1 tsp Garam Masala 🥄",
        "1/2 tsp Cumin Seeds 🌾",
        "Salt to taste 🧂",
        "Fresh Coriander Leaves for garnish 🌱",
        "2 tbsp Oil or Ghee for cooking 🧈",
        "1 cup Water 💧",
      ],
      instructions: [
        "Roast the Makhana: In a pan, dry roast the makhana until crispy and set aside. 🌰🔥",
        "Prepare the Curry Base: In the same pan, heat oil or ghee and add cumin seeds. Once they splutter, add chopped onions and sauté until golden brown. 🧅✨",
        "Add Spices and Tomatoes: Add ginger-garlic paste, turmeric powder, red chili powder, and garam masala. Stir well and let the spices cook for a minute. Add pureed tomato and cook until the oil separates from the masala. 🍅",
        "Simmer the Curry: Add water to the curry base and bring it to a boil. Reduce the heat and simmer for 5 minutes. 🍲",
        "Add Makhana & Cream: Add the roasted makhana and pour in the fresh cream. Simmer for 10 minutes, allowing the makhana to absorb the curry flavors. 🍜",
        "Garnish & S Garnish with fresh coriander leaves and serve hot with roti or rice. Enjoy the perfect balance of spiciness and crunch! 🌶️🌿",
      ],
    },
    {
      name: "Makhana Laddoo 🍬💪",
      description:
        "These healthy laddoos made from foxnuts (makhana), jaggery, and dry fruits are a perfect energy snack—sweet, crunchy, and nutritious! ⚡",
      ingredients: [
        "1 cup Foxnuts (Makhana) 🌰",
        "1/2 cup Jaggery (grated) 🍯",
        "1/4 cup Ghee (Clarified Butter) 🧈",
        "1/4 tsp Cardamom Powder 🌿",
        "2 tbsp Chopped Pistachios 🥜",
        "1 tbsp Chopped Cashews 🥜",
        "1 tbsp Chopped Almonds 🥜",
        "1 tbsp Pumpkin Seeds 🎃",
        "A pinch of Saffron (optional) 🌸",
      ],
      instructions: [
        "Roast the Makhana: In a pan, dry roast the foxnuts until crispy. Set aside to cool down. 🌰🔥",
        "Prepare the Jaggery Syrup: In the same pan, melt ghee and add grated jaggery. Stir continuously until the jaggery dissolves and the syrup thickens. 🍯",
        "Mix Makhana & Dry Fruits: Crush the roasted makhana slightly and add it along with cardamom powder, pistachios, cashews, almonds, and pumpkin seeds to the jaggery syrup. Mix thoroughly. 🥜",
        "Shape the Laddoos: Once the mixture is cool enough, shape it into small laddoos. Grease your hands with a little ghee if necessary. 🧈",
        "Cool & Serve: Allow the lados to set for 30 minutes. Enjoy them as an energy snack or sweet treat after meals. 🍬💖",
      ],
    },
  ];

 

  const Section: React.FC<SectionProps> = ({
    children,
    className = "",
    id = "",
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        id={id}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div
    className={`min-h-screen min-w-screen overflow-x-hidden transition-colors duration-200 ${
      isDarkMode
        ? 'bg-dark-bg text-dark-text-primary'
        : 'bg-gradient-to-b from-green-50 to-white'
    }`}
  >
{/* Navigation */}
<header
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? isDarkMode
        ? "bg-dark-surface/95 shadow-dark-md backdrop-blur-sm"
        : "bg-white/95 shadow-md backdrop-blur-sm"
      : "bg-transparent"
  }`}
>
  <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
    {/* Left Side: Logo */}
    <motion.img
      src="./logo-bg.png"
      alt="Apan Makhana Logo"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="h-16 w-auto" 
    />

    {/* Middle: Nav Items */}
    <div className="hidden md:flex space-x-8 justify-center">
      {["home", "benefits", "recipes", "testimonials", "faq"].map((item) => (
        <Link
          key={item}
          to={item}
          smooth={true}
          className={`cursor-pointer transition-colors capitalize ${
            isDarkMode
              ? "text-dark-text-secondary hover:text-dark-primary"
              : "text-gray-600 hover:text-green-700"
          } text-lg font-medium`}
        >
          {item}
        </Link>
      ))}
    </div>

    {/* Right Side: Dark Mode + Buy Button */}
    <div className="hidden md:flex items-center space-x-4">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-dark-surface hover:bg-dark-primary/20"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-dark-text-primary" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("https://www.amazon.in/dp/B0DW3LTXJN", "_blank")}
        className={`flex items-center px-6 py-2 rounded-full transition-all ${
          isDarkMode
            ? "bg-dark-primary hover:bg-dark-primary-hover text-white"
            : "bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-lg"
        }`}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Buy Now
      </motion.button>
    </div>

    {/* Mobile Screen: Dark Mode + Menu Icon */}
    <div className="md:hidden flex items-center space-x-4">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "bg-dark-surface hover:bg-dark-primary/20"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-dark-text-primary" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          className={`w-6 h-6 ${isDarkMode ? "text-dark-text-primary" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className={`md:hidden border-t ${
          isDarkMode ? "bg-dark-surface border-dark-text-muted" : "bg-white border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {["home", "benefits", "recipes", "testimonials", "faq"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              className={`capitalize transition-colors ${
                isDarkMode ? "text-dark-text-secondary hover:text-dark-primary" : "text-gray-600 hover:text-green-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => window.open("https://www.amazon.in/dp/B0DW3LTXJN", "_blank")}
            className={`flex items-center justify-center px-6 py-2 rounded-full transition-all ${
              isDarkMode
                ? "bg-dark-primary hover:bg-dark-primary-hover text-white"
                : "bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-lg"
            }`}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Buy Now
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>


      {/* Hero Section */}
      <section
        id="home"
        className={`pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient overflow-hidden px-5 ${
          isDarkMode ? 'dark-hero-gradient' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  isDarkMode 
                    ? 'bg-dark-surface text-dark-text-primary' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  Premium Quality
                </span>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  isDarkMode 
                    ? 'bg-dark-surface text-dark-text-primary' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  FSSAI Certified
                </span>
              </div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-dark-text-primary' : ''
              }`}>
                <span className={isDarkMode ? 'text-dark-primary' : 'gradient-text'}>
                  The Taste of Mithilaa
                </span>
                <br />
                with Premium Fox Nuts
              </h2>
              <p className={`text-xl mb-8 ${
                isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'
              }`}>
               Nature's superfood, packed with essential nutrients! Rich in iron and protein, these delicious lotus seeds support heart health, strengthen bones, and promote overall vitality.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center px-4 py-2 rounded-lg shadow-sm ${
                    isDarkMode ? 'bg-dark-surface' : 'bg-white'
                  }`}
                >
                  <Star
                    className="w-5 h-5 text-yellow-500 mr-2"
                    fill="#EAB308"
                  />
                  <span className={isDarkMode ? 'text-dark-text-primary' : ''}>
                    Premium Quality
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center px-4 py-2 rounded-lg shadow-sm ${
                    isDarkMode ? 'bg-dark-surface' : 'bg-white'
                  }`}
                >
                  <Award className={`w-5 h-5 mr-2 ${
                    isDarkMode ? 'text-dark-primary' : 'text-green-600'
                  }`} />
                  <span className={isDarkMode ? 'text-dark-text-primary' : ''}>
                    FSSAI Certified
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center px-4 py-2 rounded-lg shadow-sm ${
                    isDarkMode ? 'bg-dark-surface' : 'bg-white'
                  }`}
                >
                  <HandHeart className={`w-5 h-5 mr-2 ${
                    isDarkMode ? 'text-dark-primary' : 'text-green-600'
                  }`} />
                  <span className={isDarkMode ? 'text-dark-text-primary' : ''}>
                    Hand-Picked
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open("https://www.amazon.in/dp/B0DW3LTXJN", "_blank")
                  }
                  className={`flex items-center px-8 py-3 rounded-full transition-all ${
                    isDarkMode 
                      ? 'bg-dark-primary hover:bg-dark-primary-hover text-white' 
                      : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-lg'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/apan.makhana/",
                      "_blank"
                    )
                  }
                  className={`flex items-center px-8 py-3 rounded-full transition-all border-dark-border ${
                    isDarkMode 
                      ? 'bg-dark-surface text-dark-text-primary border-dark-border' 
                      : 'bg-white text-gray-800 hover:shadow-lg'
                  }`}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Us
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center h-full"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                src="./product-front.jpeg"
                alt="Apan Makhana Premium Fox Nuts"
                className="rounded-2xl shadow-2xl w-2/3 max-w-[400px] mx-auto"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className={`absolute bottom-4 right-4 p-4 rounded-xl shadow-lg ${
                  isDarkMode ? 'bg-dark-surface' : 'bg-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className={`w-6 h-6 ${
                    isDarkMode ? 'text-dark-primary' : 'text-green-600'
                  }`} />
                  <span className={isDarkMode ? 'text-dark-text-primary' : 'font-medium'}>
                    Premium Quality
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex justify-center mt-16"
          >
            <ArrowDown className={`w-8 h-8 ${
              isDarkMode ? 'text-dark-primary' : 'text-green-600'
            }`} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section
  id="features"
  className={`py-16 ${isDarkMode ? 'dark-feature-gradient' : ''} transition-colors duration-300`}
>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-dark-primary" : "gradient-text"
              }`}
            >
              Why Choose Apan Makhana?
            </h3>
            <p
              className={`${
                isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Our premium fox nuts are carefully selected and processed to
              maintain their natural goodness
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                desc: "No artificial ingredients or preservatives",
              },
              {
                icon: Heart,
                title: "Heart Healthy",
                desc: "Low in fat and cholesterol-free",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Hand-picked and carefully processed",
              },
              {
                icon: ShieldCheck,
                title: "FSSAI Certified",
                desc: "Meets highest quality standards",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl shadow-sm hover:shadow-lg transition-all ${
                  isDarkMode
                    ? "bg-dark-surface text-dark-text-primary"
                    : "bg-white text-gray-600"
                }`}
              >
                <div
                  className={`${
                    isDarkMode ? "bg-dark-border" : "bg-green-100"
                  } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${
                      isDarkMode ? "text-dark-primary" : "text-green-600"
                    }`}
                  />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section
        id="benefits"
        className={`py-16 ${
          isDarkMode ? 'bg-dark-surface' : 'bg-green-50'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-dark-primary' : 'gradient-text'
              }`}
            >
              Health Benefits
            </h3>
            <p
              className={`${
                isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'
              } max-w-2xl mx-auto`}
            >
              Discover why Apan Makhana is nature's perfect snack for a healthy
              lifestyle
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center space-x-4 ${
                    isDarkMode ? 'bg-dark-surface' : 'bg-white'
                  } p-4 rounded-lg shadow-sm hover:shadow-md transition-all`}
                >
                  <div
                    className={`${
                      isDarkMode ? 'bg-dark-border' : 'bg-green-100'
                    } p-2 rounded-full`}
                  >
                    <ShieldCheck
                      className={`w-6 h-6 ${
                        isDarkMode ? 'text-dark-primary' : 'text-green-600'
                      }`}
                    />
                  </div>
                  <span
                    className={`${
                      isDarkMode ? 'text-dark-text-primary' : 'text-gray-800'
                    } font-medium`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src="./product-benefits.jpeg"
                alt="Apan Makhana Benefits"
                className="rounded-2xl shadow-lg w-2/3 mx-auto"
              />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-2 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg"
              >
                Premium Quality
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Recipe Section */}
      <Section
        id="recipes"
        className={`py-16 mx-5 ${isDarkMode ? '' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-dark-primary' : 'gradient-text'
              }`}
            >
              Delicious Recipes
            </h3>
            <p
              className={`${
                isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'
              } max-w-2xl mx-auto`}
            >
              Transform Apan Makhana into mouth-watering dishes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
  {recipes.map((recipe, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`bg-green-50 rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'text-dark-text-primary' : ''}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={
            index === 0
              ? './makhana-kheer.png'
              : index === 1
              ? './makhana-curry.png'
              : './makhana-laddoo.png'
          }
          alt={recipe.name}
          className="w-full h-68 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className={`p-6 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'}`}>
        <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-dark-text-primary' : ''}`}>
          {recipe.name}
        </h4>
        <p className={`${isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'} mb-4`}>
          {recipe.description}
        </p>
        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center text-green-600 hover:text-green-700"
          onClick={() => setSelectedRecipe(recipe)}
        >
          View Recipe <ChevronRight className="w-4 h-4 ml-1" />
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>

          {selectedRecipe && (
            <RecipeModal
              recipe={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
            />
          )}
        </div>
      </Section>

{/* Product Showcase */}
<Section className={`py-16 ${isDarkMode ? 'bg-dark-surface' : 'bg-green-50'}`}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-dark-primary' : 'gradient-text'}`}>
        Premium Quality Fox Nuts
      </h3>
      <p className={`${isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Discover the purity of nature with Apan Makhana
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <img
          src="./product-back.jpeg"
          alt="Apan Makhana Nutritional Information"
          className="rounded-2xl shadow-lg w-2/3 mx-auto"
        />
      </motion.div>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`${
            isDarkMode ? 'bg-dark-surface text-dark-text-primary' : 'bg-white text-gray-800'
          } p-6 rounded-xl shadow-sm hover:shadow-lg transition-all`}
        >
          <h4 className="text-xl font-semibold mb-4">Nutritional Facts</h4>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Protein</span>
              <span>9.7g</span>
            </li>
            <li className="flex justify-between">
              <span>Dietary Fiber</span>
              <span>11.0g</span>
            </li>
            <li className="flex justify-between">
              <span>Carbohydrates</span>
              <span>76.3g</span>
            </li>
            <li className="flex justify-between">
              <span>Fat Content</span>
              <span>0.8g</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`${
            isDarkMode ? 'bg-dark-surface text-dark-text-primary' : 'bg-white text-gray-800'
          } p-6 rounded-xl shadow-sm hover:shadow-lg transition-all`}
        >
          <h4 className="text-xl font-semibold mb-4">Product Features</h4>
          <ul className="space-y-2">
            {[
              'Premium Quality Fox Nuts',
              '100% Natural & Pure',
              'No Artificial Ingredients',
              'FSSAI Certified',
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <ShieldCheck className="w-5 h-5 text-green-600 mr-2" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </div>
</Section>

{/* FAQ Section */}
<Section id="faq" className={`py-16 ${isDarkMode ? '' : ''}`}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-4 gradient-text text-dark-primary">
        Frequently Asked Questions
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Find answers to common questions about Apan Makhana
      </p>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {[
          {
            q: "How should I store Apan Makhana?",
            a: "Store in a cool, dry place in an airtight container. Keep away from direct sunlight.",
          },
          {
            q: "What is the shelf life of the product?",
            a: "The product has a shelf life of 12 months from the date of packaging when stored properly.",
          },
          {
            q: "Is it suitable for all age groups?",
            a: "Yes, Apan Makhana is suitable for all age groups and is a healthy snack option for the entire family.",
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg dark:bg-gray-700 dark:text-white transition-all"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {faq.q}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</Section>

 {/* Contact Section */}
<Section className={`py-16 ${isDarkMode ? 'bg-dark-surface' : 'bg-green-50'}`}>
  <div className="container mx-auto px-4 text-center">
    <h3 className="text-3xl font-bold mb-8 gradient-text">
      Get in Touch
    </h3>
    <div className="flex flex-wrap justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          window.open("https://www.instagram.com/apan.makhana/", "_blank")
        }
        className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        <Instagram className="w-5 h-5 mr-2" />
        Follow on Instagram
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("mailto:tsmfoods01@gmail.com")}
        className="flex items-center bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Contact Us
      </motion.button>
    </div>
  </div>
</Section>

{/* Footer */}
<footer className={`py-12 ${isDarkMode ? 'bg-dark-bg text-dark-text-primary' : 'bg-gray-800 text-white'}`}>
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-bold mb-4"
        >
          Apan Makhana
        </motion.h4>
        <p className="text-gray-400">
          Premium quality fox nuts from the heart of Mithila.
        </p>
      </div>
      <div>
        <h5 className="font-semibold mb-4">Quick Links</h5>
        <ul className="space-y-2">
          {["benefits", "recipes", "faq"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item}
                smooth={true}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors capitalize"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-4">Contact</h5>
        <ul className="space-y-2 text-gray-400">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Email: tsmfoods01@gmail.com
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Phone: +91-8448714959
          </motion.li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-4">Follow Us</h5>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex space-x-4"
        >
          <a
            href="https://www.instagram.com/apan.makhana/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>©2025 Apan Makhana. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
