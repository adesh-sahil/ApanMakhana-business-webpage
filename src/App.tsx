import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Recipes from './components/Recipes';
import ProductShowcase from './components/ProductShowcase';
import StorePresence from './components/StorePresence';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Benefits />
      <Recipes />
      <ProductShowcase />
      <StorePresence />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
