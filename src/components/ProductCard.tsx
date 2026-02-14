'use client';

import { Star, Plus } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  // Random rotation for variety (-2 to 2 degrees)
  const rotation = (parseInt(product.id) % 5) - 2;
  const accentColors = ['#D4FF00', '#FF006E', '#FFBE0B', '#00F5FF'];
  const accentColor = accentColors[parseInt(product.id) % accentColors.length];

  return (
    <Link 
      href={`/product/${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="group relative bg-white border-4 border-[#0A0A0A] overflow-hidden cursor-pointer"
        style={{
          transform: isHovered ? `rotate(${rotation}deg) scale(1.05)` : `rotate(0deg) scale(1)`,
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Colored accent bar */}
        <div 
          className="absolute top-0 left-0 w-full h-2 z-10"
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Image container with bold shadow */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
            style={{ backgroundColor: accentColor }}
          />
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Price tag overlay */}
          <div 
            className="absolute top-4 right-4 bg-[#0A0A0A] text-white px-4 py-2 border-2 border-white font-mono font-bold text-xl rotate-3"
          >
            ${product.price}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-3 relative">
          {/* Bold title */}
          <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">
            {product.title}
          </h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? 'fill-current'
                      : ''
                  }`}
                  style={{
                    color: i < Math.floor(product.rating!) ? accentColor : '#D1D5DB'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="relative w-full group/btn overflow-hidden"
          >
            <div 
              className="absolute inset-0 transform translate-x-1 translate-y-1 group-hover/btn:translate-x-2 group-hover/btn:translate-y-2 transition-transform"
              style={{ backgroundColor: accentColor }}
            />
            <div className="relative flex items-center justify-center gap-2 bg-[#0A0A0A] text-white py-3 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide text-sm">
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </div>
          </button>
        </div>

        {/* Geometric accent corner */}
        <div 
          className="absolute bottom-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] opacity-30"
          style={{ borderBottomColor: accentColor }}
        />
      </div>
    </Link>
  );
}