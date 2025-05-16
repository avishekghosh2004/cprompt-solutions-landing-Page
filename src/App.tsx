import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Stats from './components/Stats'
import Features from './components/Features'
import ProductCategories from './components/ProductCategories'
import CustomerTestimonials from './components/CustomerTestimonials'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <HeroSection />
        <Stats />
        <Features />
        <ProductCategories />
        <CustomerTestimonials />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App
