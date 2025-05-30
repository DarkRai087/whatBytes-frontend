import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12 transition-all duration-500 hover:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">Filters</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">Category</li>
              <li className="hover:text-white transition-colors duration-300">Price Range</li>
              <li className="hover:text-white transition-colors duration-300">Brand</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">Our Story</li>
              <li className="hover:text-white transition-colors duration-300">Contact</li>
              <li className="hover:text-white transition-colors duration-300">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-600 rounded hover:bg-blue-500 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-600 rounded hover:bg-blue-500 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
                <FaTwitter className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-600 rounded hover:bg-blue-500 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="hover:text-white transition-colors duration-300">© 2024 Logo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}