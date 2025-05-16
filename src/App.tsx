import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Features from "./components/Features";
import ProductCategories from "./components/ProductCategories";
import CustomerTestimonials from "./components/CustomerTestimonials";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { useAppStore } from "./store/store";
import { theme } from "./theme/theme";

function App() {
  const currentTheme = useAppStore((state) => state.theme);

  return (
    <div
      className="min-h-screen transition-colors duration-200"
      style={{
        backgroundColor: theme[currentTheme].background.primary,
        color: theme[currentTheme].text.primary,
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <Stats />
        <Features />
        <ProductCategories />
        <CustomerTestimonials />
        <ContactInfo />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
