import type { FC } from 'react'

interface NavbarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const Navbar: FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-800">C Prompt Solutions</h1>
          <span className="ml-2 text-sm font-light italic">LEASE 4 EASE</span>
        </div>
        
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar