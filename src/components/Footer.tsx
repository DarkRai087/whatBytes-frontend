import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white py-16 mt-20 border-t-4 border-[#D4FF00] overflow-hidden">
      {/* Geometric background */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4FF00] via-[#FF006E] to-[#00F5FF]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4FF00] blur-md opacity-50" />
                <Zap className="w-10 h-10 text-[#D4FF00] relative z-10 fill-current" />
              </div>
              <span className="text-4xl font-bold tracking-tighter">STACK</span>
            </div>
            <p className="font-mono text-sm text-gray-400 uppercase tracking-wide mb-6 max-w-md">
              Neo-brutalist e-commerce experience. Bold design. Zero compromises.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, color: '#D4FF00', url: 'https://facebook.com' },
                { icon: FaTwitter, color: '#FF006E', url: 'https://twitter.com' },
                { icon: FaInstagram, color: '#FFBE0B', url: 'https://instagram.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div 
                    className="absolute inset-0 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
                    style={{ backgroundColor: social.color }}
                  />
                  <div className="relative w-12 h-12 bg-white border-4 border-[#0A0A0A] flex items-center justify-center">
                    <social.icon className="text-[#0A0A0A] text-xl" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="hover:text-[#D4FF00] transition-colors cursor-pointer">Electronics</li>
              <li className="hover:text-[#FF006E] transition-colors cursor-pointer">Clothing</li>
              <li className="hover:text-[#FFBE0B] transition-colors cursor-pointer">Home</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Info</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="hover:text-[#D4FF00] transition-colors cursor-pointer">About</li>
              <li className="hover:text-[#FF006E] transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-[#FFBE0B] transition-colors cursor-pointer">Privacy</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
              © 2024 Stack. All rights reserved.
            </p>
            <div className="flex gap-2">
              {['#D4FF00', '#FF006E', '#FFBE0B', '#00F5FF'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}