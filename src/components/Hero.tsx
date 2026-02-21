import { motion } from 'framer-motion';
import { ShoppingCart, Instagram, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';
const INSTAGRAM_URL = 'https://www.instagram.com/apan.makhana/';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] gradient-hero flex flex-col">
      {/* Decorative blurs */}
      <div className="absolute top-16 -left-20 w-64 h-64 bg-brand-300/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-16 -right-20 w-72 h-72 bg-gold-300/8 rounded-full blur-[100px]" />

      <div className="relative flex-1 flex items-center w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-28 lg:pt-32 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-1"
          >
            <div className="flex justify-center lg:justify-start mb-5">
              <span className="section-label">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                Premium Fox Nuts from Mithila
              </span>
            </div>

            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-5 tracking-tight">
              <span className="gradient-text-brand">The Taste of</span>
              <br />
              <span className="text-gray-900">Mithilaa</span>
            </h1>

            <p className="text-[0.95rem] leading-relaxed sm:text-lg text-gray-500 font-body max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8">
              Hand-picked, FSSAI certified fox nuts — rich in protein, antioxidants &amp; natural goodness.
              Now available in <strong className="text-gray-700">300+ outlets across 8+ states</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open(AMAZON_URL, '_blank')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 
                           rounded-full font-body font-semibold text-[0.9rem] gradient-cta text-white 
                           shadow-lg shadow-brand-600/20 active:shadow-md transition-all"
              >
                <ShoppingCart className="w-[18px] h-[18px]" />
                Buy on Amazon — ₹480
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open(INSTAGRAM_URL, '_blank')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 
                           rounded-full font-body font-semibold text-[0.9rem] bg-white text-gray-700 
                           border border-gray-200 shadow-sm active:shadow-none transition-all"
              >
                <Instagram className="w-[18px] h-[18px] text-pink-500" />
                @apan.makhana
              </motion.button>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mt-6 text-[0.75rem] font-body text-gray-400">
              <span className="flex items-center gap-1">✅ FSSAI Certified</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1">🌿 100% Natural</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1">🇮🇳 Made in India</span>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center order-2"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[65%] h-[65%] bg-gradient-to-br from-brand-200/20 to-gold-200/10 rounded-full blur-[60px]" />
            </div>

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src="./product-front.jpeg"
              alt="Apan Makhana Premium Fox Nuts"
              className="relative w-[55%] sm:w-[45%] lg:w-[60%] max-w-[320px] rounded-2xl shadow-2xl shadow-black/10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <Link to="metrics" smooth offset={-20} className="cursor-pointer">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center pb-5"
        >
          <ChevronDown className="w-5 h-5 text-brand-400/60" />
        </motion.div>
      </Link>
    </section>
  );
}
