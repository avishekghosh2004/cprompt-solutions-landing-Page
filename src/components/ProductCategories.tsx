import type { FC } from 'react'

const ProductCategories: FC = () => {
  const categories = [
    { name: 'Laptop', action: 'Rent Now' },
    { name: 'Mac book', action: 'Rent Now' },
    { name: 'Tab', action: 'Rent Now' },
    { name: 'iMac', action: 'Rent Now' },
    { name: 'Desktop', action: 'Rent Now' },
    { name: 'Server', action: 'Rent Now' },
    { name: 'Interactive Display', action: 'Rent Now' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Product Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition duration-300">
              <h3 className="text-lg font-medium mb-3">{category.name}</h3>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">
                {category.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories