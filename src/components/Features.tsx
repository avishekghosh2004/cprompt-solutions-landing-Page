import type { FC } from 'react'

const Features: FC = () => {
  const features = [
    {
      title: 'Expert D.A.A.S Focus',
      description: 'At C Prompt, we specialize in IT leasing, delivering cutting-edge Device as a Service (D.A.A.S) solutions.'
    },
    {
      title: 'Flexibility Unleashed',
      description: 'Embrace unparalleled flexibility with our tailor-made, flexi plans. Special customize terms to fit distinct requirements for Events / special projects.'
    },
    {
      title: 'No Quantity Limits',
      description: 'Large Corporate, SME, Start-up or Individuals - C Prompt eliminates quantity restrictions, providing tailored solutions for businesses of all sizes.'
    },
    {
      title: 'Nationwide Reach',
      description: 'Benefit from our strong Pan India presence. C Prompt ensures seamless IT leasing and rental support wherever your business operates.'
    },
    {
      title: 'Promise of prompt service',
      description: 'At C Prompt we provide prompt online and onsite assistance to ensure our clients receive the support needed to overcome challenge.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Lease 4 Ease with C Prompt Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features