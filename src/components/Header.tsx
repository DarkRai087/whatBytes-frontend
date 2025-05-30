'use client';

import { Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <header className="bg-blue-600 text-white p-4 transition-all duration-500 hover:bg-blue-700">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors duration-300">
          Logo
        </Link>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-blue-500 border border-blue-400 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative flex items-center space-x-1 bg-blue-700 px-3 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-300">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}