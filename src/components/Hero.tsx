import { motion } from 'framer-motion';
import { ShoppingCart, Instagram, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const AMAZON_URL = 'https://www.amazon.in/dp/B0DW3LTXJN';
const INSTAGRAM_URL = 'https://www.instagram.com/apan.makhana/';

// Stagger timings (seconds)
const T = {
  line1: 0.3,
  line2: 1.0,
  brand: 1.8,
  tagline: 2.6,
  desc: 3.1,
  cta: 3.5,
  trust: 3.9,
  product: 1.2,
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] gradient-hero flex flex-col overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-16 -left-20 w-64 h-64 bg-brand-300/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-16 -right-20 w-72 h-72 bg-gold-300/8 rounded-full blur-[100px]" />

      <div className="relative flex-1 flex items-center w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-28 lg:pt-32 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
          {/* Cinematic text reveal */}
          <div className="text-center lg:text-left order-1">
            {/* Line 1 — origin */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: T.line1, duration: 0.6, ease: 'easeOut' }}
              className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-400 mb-2 sm:mb-3"
            >
              From the farms of Mithila
            </motion.p>

            {/* Line 2 — scale */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: T.line2, duration: 0.6, ease: 'easeOut' }}
              className="font-body text-xs sm:text-sm tracking-[0.15em] uppercase text-brand-600/70 mb-4 sm:mb-5"
            >
              To 300+ stores across India
            </motion.p>

            {/* Brand name — THE reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: T.brand, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95]">
                <span className="gradient-text-brand">Apan</span>
                <br />
                <span className="text-gray-900">Makhana</span>
              </h1>
            </motion.div>

            {/* Gold divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: T.tagline - 0.2, duration: 0.5 }}
              className="origin-center lg:origin-left mx-auto lg:mx-0 my-3 sm:my-4"
            >
              <div className="gold-line w-12 sm:w-16 mx-auto lg:mx-0" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: T.tagline, duration: 0.5 }}
              className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 
                         tracking-wide"
            >
              India's Premium Fox Nuts
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.desc, duration: 0.5 }}
              className="text-sm sm:text-[0.95rem] leading-relaxed text-gray-400 font-body max-w-sm mx-auto lg:mx-0 mb-6 sm:mb-7"
            >
              Hand-picked, FSSAI certified &amp; 100% natural.
              Rich in protein, antioxidants &amp; goodness.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: T.cta, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
            >
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
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.trust, duration: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start mt-5 text-[0.7rem] sm:text-xs font-body text-gray-400"
            >
              <span>✅ FSSAI Certified</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>🌿 100% Natural</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>🇮🇳 Made in India</span>
            </motion.div>
          </div>

          {/* Product image — enters slightly after the origin text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: T.product, duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Scroll indicator */}
      <Link to="metrics" smooth offset={-20} className="cursor-pointer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ opacity: { delay: 4.2 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
          className="flex justify-center pb-5"
        >
          <ChevronDown className="w-5 h-5 text-brand-400/60" />
        </motion.div>
      </Link>
    </section>
  );
}
