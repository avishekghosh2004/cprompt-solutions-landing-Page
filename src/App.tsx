import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Features from "./components/Features";
import ProductCategories from "./components/ProductCategories";
import CustomerTestimonials from "./components/CustomerTestimonials";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container py-8 space-y-16">
        <HeroSection />
        <Stats />
        <Features />
        <ProductCategories />
        <CustomerTestimonials />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );

}

export default App;
