import type { FC } from 'react'

const HeroSection: FC = () => {
  return (
    <section className="bg-blue-700 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Ideal Solution for IT Excellence</h1>
        <p className="text-xl mb-8">AFFORDABLE Lease 4 Ease & nothing else</p>
        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-md hover:bg-blue-100 transition duration-300">
          View Products
        </button>
      </div>
    </section>
  )
}

export default HeroSection