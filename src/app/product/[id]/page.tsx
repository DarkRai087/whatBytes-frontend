'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, Plus, Minus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore(state => state.addItem);
  
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="text-center">
          <div className="inline-block bg-white border-4 border-[#0A0A0A] p-12">
            <h1 className="text-3xl font-bold uppercase mb-4">404</h1>
            <p className="text-gray-600 mb-6 font-mono text-sm">Product Not Found</p>
            <Link href="/" className="relative group inline-block">
              <div className="absolute inset-0 bg-[#D4FF00] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative bg-[#0A0A0A] text-white px-6 py-3 border-4 border-[#0A0A0A] font-bold uppercase">
                Back Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accentColors = ['#D4FF00', '#FF006E', '#FFBE0B', '#00F5FF'];
  const accentColor = accentColors[parseInt(product.id) % accentColors.length];

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative">
      {/* Background accents */}
      <div className="fixed top-0 right-0 w-96 h-96 opacity-5 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: accentColor }} />
      
      <div className="container mx-auto px-6 py-12">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="relative bg-white border-4 border-[#0A0A0A] px-4 py-2 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold uppercase text-sm">Back</span>
            </div>
          </div>
        </Link>
        
        {/* Product detail */}
        <div className="bg-white border-4 border-[#0A0A0A] overflow-hidden">
          {/* Accent bar */}
          <div className="w-full h-3" style={{ backgroundColor: accentColor }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image section */}
            <div className="relative aspect-square bg-gray-50 border-r-4 border-[#0A0A0A] overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: accentColor }}
              />
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={800}
                className="object-cover w-full h-full relative z-10"
              />
              
              {/* Decorative corner */}
              <div 
                className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-l-[80px] border-l-transparent opacity-20"
                style={{ borderTopColor: accentColor }}
              />
            </div>
            
            {/* Details section */}
            <div className="p-12 space-y-8">
              {/* Category badge */}
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 transform translate-x-1 translate-y-1" style={{ backgroundColor: accentColor }} />
                  <div className="relative bg-[#0A0A0A] text-white px-4 py-2 border-2 border-[#0A0A0A] font-mono text-xs uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl font-bold uppercase tracking-tighter leading-tight">
                {product.title}
              </h1>
              
              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-bold">${product.price}</span>
                <span className="text-gray-400 line-through text-2xl">${Math.floor(product.price * 1.3)}</span>
              </div>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
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
                  <span className="font-mono text-sm text-gray-600">
                    ({product.rating}/5.0)
                  </span>
                </div>
              )}
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
              
              {/* Quantity selector */}
              <div className="space-y-4">
                <label className="font-bold uppercase text-sm tracking-wide">Quantity</label>
                <div className="inline-flex">
                  <div className="relative group">
                    <div 
                      className="absolute inset-0 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
                      style={{ backgroundColor: accentColor }}
                    />
                    <div className="relative flex items-center bg-white border-4 border-[#0A0A0A]">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-4 hover:bg-gray-100 transition-colors border-r-4 border-[#0A0A0A]"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="px-8 py-4 font-bold text-2xl min-w-[100px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-4 hover:bg-gray-100 transition-colors border-l-4 border-[#0A0A0A]"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                className="relative w-full group"
              >
                <div 
                  className="absolute inset-0 transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"
                  style={{ backgroundColor: accentColor }}
                />
                <div className="relative flex items-center justify-center gap-3 bg-[#0A0A0A] text-white py-6 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide text-lg">
                  <ShoppingBag className="w-6 h-6" />
                  <span>{added ? '✓ Added to Cart!' : 'Add to Cart'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}