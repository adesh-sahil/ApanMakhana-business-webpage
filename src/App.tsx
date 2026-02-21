import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustTicker from './components/TrustTicker';
import MetricsBar from './components/MetricsBar';
import WhyChoose from './components/WhyChoose';
import Product from './components/Product';
import NationwidePresence from './components/NationwidePresence';
import Recipes from './components/Recipes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustTicker />
      <MetricsBar />
      <WhyChoose />
      <Product />
      <NationwidePresence />
      <Recipes />
      <FAQ />
      <Footer />
    </>
  );
}
