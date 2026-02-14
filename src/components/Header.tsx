'use client';

import { Search, ShoppingCart, Zap } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <header className="relative bg-[#0A0A0A] text-white border-b-4 border-[#D4FF00] overflow-hidden">
      {/* Geometric background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF006E] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 py-5 relative z-10">
        <div className="flex items-center justify-between gap-6">
          {/* Bold Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
              <Zap className="w-8 h-8 text-[#D4FF00] relative z-10 fill-current" />
            </div>
            <span className="text-3xl font-bold tracking-tighter">
              STACK
            </span>
          </Link>
          
          {/* Search bar with neo-brutalist style */}
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4FF00] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative bg-white border-4 border-[#0A0A0A] overflow-hidden">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0A0A0A] w-5 h-5" />
                <input
                  type="text"
                  placeholder="SEARCH PRODUCTS..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-14 pr-4 py-3 bg-white text-[#0A0A0A] placeholder-gray-400 focus:outline-none font-mono text-sm uppercase tracking-wide font-bold"
                />
              </div>
            </div>
          </div>
          
          {/* Cart button with bold accent */}
          <Link 
            href="/cart" 
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#FF006E] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="relative flex items-center gap-3 bg-white text-[#0A0A0A] px-6 py-3 border-4 border-[#0A0A0A]">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wide text-sm">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF006E] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#0A0A0A] animate-pulse">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}