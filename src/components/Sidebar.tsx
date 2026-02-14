'use client';

import { Sliders } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function Sidebar({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceRangeChange
}: SidebarProps) {
  const categories = [
    { name: 'All', color: '#D4FF00' },
    { name: 'Electronics', color: '#FF006E' },
    { name: 'Clothing', color: '#FFBE0B' },
    { name: 'Home', color: '#00F5FF' }
  ];

  return (
    <div className="space-y-6 sticky top-6">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#D4FF00] transform translate-x-1 translate-y-1" />
        <div className="relative bg-[#0A0A0A] text-white p-6 border-4 border-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <Sliders className="w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight">Filters</h2>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white border-4 border-[#0A0A0A] p-6">
        <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className="relative w-full group"
            >
              <div 
                className={`absolute inset-0 transform transition-transform ${
                  selectedCategory === category.name 
                    ? 'translate-x-2 translate-y-2' 
                    : 'translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2'
                }`}
                style={{ backgroundColor: category.color }}
              />
              <div 
                className={`relative px-4 py-3 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide text-sm transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-white text-[#0A0A0A]'
                }`}
              >
                {category.name}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="bg-white border-4 border-[#0A0A0A] p-6">
        <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Price Range</h3>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-3 appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #0A0A0A 0%, #0A0A0A ${(priceRange[1] / 1000) * 100}%, #E5E7EB ${(priceRange[1] / 1000) * 100}%, #E5E7EB 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-[#0A0A0A] text-white px-3 py-2 border-2 border-[#0A0A0A] font-mono font-bold text-sm">
              ${priceRange[0]}
            </div>
            <div className="bg-[#FF006E] text-white px-3 py-2 border-2 border-[#0A0A0A] font-mono font-bold text-sm">
              ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="hidden lg:block">
        <div className="border-4 border-[#0A0A0A] p-6 bg-[#D4FF00] transform rotate-2">
          <p className="font-mono text-xs text-[#0A0A0A] uppercase tracking-wider">
            🔥 Neo-Brutalist <br/>Design System
          </p>
        </div>
      </div>
    </div>
  );
}