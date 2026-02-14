'use client';

import Link from 'next/link';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-block bg-white border-4 border-[#0A0A0A] p-16">
              <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
              <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">Cart is Empty</h1>
              <p className="text-gray-600 mb-8 font-mono text-sm uppercase">Add some products to get started</p>
              <Link href="/" className="relative inline-block group">
                <div className="absolute inset-0 bg-[#D4FF00] transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative bg-[#0A0A0A] text-white px-8 py-4 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide">
                  Start Shopping
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
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
        
        {/* Header */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#FF006E] transform translate-x-2 translate-y-2" />
            <h1 className="relative bg-[#0A0A0A] text-white px-8 py-4 border-4 border-[#0A0A0A] text-4xl font-bold uppercase tracking-tighter">
              Shopping Cart
            </h1>
          </div>
          <p className="mt-4 font-mono text-sm text-gray-600 uppercase tracking-wide">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => {
              const accentColors = ['#D4FF00', '#FF006E', '#FFBE0B', '#00F5FF'];
              const accentColor = accentColors[parseInt(item.id) % accentColors.length];
              
              return (
                <div key={item.id} className="bg-white border-4 border-[#0A0A0A]">
                  {/* Accent bar */}
                  <div className="w-full h-2" style={{ backgroundColor: accentColor }} />
                  
                  <div className="p-6 flex items-center gap-6">
                    {/* Image */}
                    <div className="relative w-24 h-24 bg-gray-100 border-4 border-[#0A0A0A] overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg uppercase tracking-tight truncate">
                        {item.title}
                      </h3>
                      <p className="font-mono text-sm text-gray-600 mt-1">
                        ${item.price} each
                      </p>
                    </div>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center">
                      <div className="relative group">
                        <div 
                          className="absolute inset-0 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
                          style={{ backgroundColor: accentColor }}
                        />
                        <div className="relative flex items-center bg-white border-4 border-[#0A0A0A]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors border-r-4 border-[#0A0A0A]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-bold min-w-[50px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors border-l-4 border-[#0A0A0A]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price and remove */}
                    <div className="text-right flex flex-col gap-3">
                      <p className="text-2xl font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="relative group inline-block"
                      >
                        <div className="absolute inset-0 bg-[#FF006E] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                        <div className="relative bg-white border-2 border-[#0A0A0A] p-2 hover:bg-gray-100 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border-4 border-[#0A0A0A] sticky top-6">
              {/* Header */}
              <div className="bg-[#0A0A0A] text-white p-6 border-b-4 border-[#D4FF00]">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Summary</h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Price breakdown */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 uppercase">Subtotal</span>
                    <span className="font-bold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 uppercase">Shipping</span>
                    <span className="font-bold text-[#D4FF00]">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 uppercase">Tax</span>
                    <span className="font-bold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t-4 border-[#0A0A0A] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold uppercase">Total</span>
                    <span className="text-3xl font-bold">${(getTotalPrice() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Checkout button */}
                <button className="relative w-full group">
                  <div className="absolute inset-0 bg-[#D4FF00] transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                  <div className="relative bg-[#0A0A0A] text-white py-4 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide">
                    Checkout
                  </div>
                </button>
                
                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="relative w-full group"
                >
                  <div className="absolute inset-0 bg-[#FF006E] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                  <div className="relative bg-white text-[#0A0A0A] py-3 border-4 border-[#0A0A0A] font-bold uppercase tracking-wide text-sm">
                    Clear Cart
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}