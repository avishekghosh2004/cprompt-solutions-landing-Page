import type { FC } from 'react'

const CustomerTestimonials: FC = () => {
  const testimonials = [
    {
      name: 'Rohini Goel',
      position: 'Co-founder, Smart Interviews',
      content: 'I am thrilled to share my experience with C Prompt Solutions, the absolute best in laptop rental services. The speed and efficiency with which C Prompt Solutions operates is truly commendable. They provide me with the latest and most reliable laptops whenever I need them. This promptness has played a crucial role in enhancing my workflow. The lightning-fast service is a game-changer, and with their extensive inventory, C Prompt Solutions has become my one-stop solution for all my laptop needs. What sets them apart is their no-security-deposit policy, ensuring that no capital is tied up unnecessarily. I wholeheartedly recommend them for their exceptional service and customer-friendly policies.'
    },
    {
      name: 'Drasm Valley',
      position: 'Head of Marketing & IT',
      content: 'We at Dream Valley Group have been exceptionally pleased with the services provided by C Prompt Solutions. Their swift response time, efficient service, and comprehensive range of computer configurations have significantly streamlined our operations. C Prompt Solutions is our go-to for all our computer rental needs, offering a seamless and reliable one-stop solution. We highly recommend their services to anyone seeking top-notch computer rental solutions.'
    }
  ]

  const customers = ['ISB', 'TATA PROJECTS', 'DLFA', 'Tech Mahindra']

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Esteemed Customers</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-md shadow-sm">
                <p className="font-medium">{customer}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Let Our Customers Convince You!</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 italic">{testimonial.position}</p>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials