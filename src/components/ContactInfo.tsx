import type { FC } from 'react'

const ContactInfo: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-6">
              C Prompt Solutions is your standout partner for rental solutions, delivering quality products, flexible plans, nationwide accessibility, and unmatched uptime standards.
            </p>
            
            <div className="mb-6">
              <p className="font-medium">3rd Floor, 2-4-438 Batiwa Edifice, Ramgopalpet, OH MG Road,</p>
              <p className="font-medium">Landmark: Lane Beside KFC, Secunderabad – 500003, Telangana</p>
              <p className="text-blue-600">sales@cpromptsolutions.in</p>
            </div>
            
            <div className="mb-6">
              <p className="font-medium">For any enquiry call on +91 9246172100</p>
              <p className="font-medium">WhatsApp Us</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Mobile No</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Your Requirements</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" rows={4}></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="notRobot" className="mr-2" />
                <label htmlFor="notRobot">I'm not a robot</label>
              </div>
              
              <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo