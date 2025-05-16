import type { FC } from 'react'

const Stats: FC = () => {
  const stats = [
    { value: '19+', label: 'Years' },
    { value: '3.6+', label: 'Google Ratings' },
    { value: '791+', label: 'Clients' },
    { value: '40+', label: 'Locations' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg">
              <p className="text-3xl font-bold text-blue-800">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats