import type { FC } from 'react'

const Footer: FC = () => {
  const quickLinks = [
    'About Us', 'Career', 'Blogs', 'Contact Us', 'Terms & Condition', 'Privacy Policy'
  ]

  const usefulLinks = [
    'Best Laptop Rental in Chennai: Your Partner by Excellence',
    'Rent A Laptop in Chennai At C Prompt Solutions',
    'Get Desktops & Laptops on Rent: The Modern Way of Thinking For IT',
    'Affordable Tech at Your Fingerings: Flexible Laptop Rentals in Hyderabad with C Prompt Solutions',
    'Laptop Rental Services in Hyderabad: Find the Best with C Prompt Solutions'
  ]

  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">C Prompt Solutions</h3>
            <p className="italic mb-2">LEARN & LEAVE</p>
            <p className="mb-2">3rd Floor, 2-4-438 Batiwa Edifice, Ramgopalpet, OH MG Road,</p>
            <p className="mb-2">Landmark: Lane Beside KFC, Secunderabad – 500003, Telangana</p>
            <p className="mb-2">sales@cpromptsolutions.in / support@cpromptsolutions.in</p>
            <p>+91 9246172100</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="hover:text-blue-300 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index} className="hover:text-blue-300 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>COPYRIGHT © 2024 C PROMPT SOLUTIONS. ALL RIGHTS RESERVED. POWERED BY DINGIMOST</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer