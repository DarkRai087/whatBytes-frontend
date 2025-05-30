'use client';

import { Star } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">{product.title}</h3>
          <p className="text-xl font-bold text-gray-900 mb-2">${product.price}</p>
          
          {product.rating && (
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 transition-colors duration-300 ${
                    i < Math.floor(product.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}