'use client';

import { useState, useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Product } from '@/types';
import ClientSearchParamsHandler from '@/components/ClientSearchParamsHandler';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, priceRange]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSearchParamsHandler
        onFilter={setFilteredProducts}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setPriceRange}
      >
        <div className="min-h-screen bg-[#FAFAFA] relative">
          {/* Geometric background accents */}
          <div className="fixed top-20 right-10 w-96 h-96 bg-[#D4FF00] opacity-5 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-20 left-10 w-96 h-96 bg-[#FF006E] opacity-5 rounded-full blur-3xl pointer-events-none" />
          
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar with animation */}
              <div className={`lg:w-1/4 ${mounted ? 'animate-slide-left' : 'opacity-0'}`}>
                <Sidebar
                  selectedCategory={selectedCategory}
                  priceRange={priceRange}
                  onCategoryChange={setSelectedCategory}
                  onPriceRangeChange={setPriceRange}
                />
              </div>

              <div className="lg:w-3/4">
                {/* Bold header */}
                <div className={`mb-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#FFBE0B] transform translate-x-2 translate-y-2" />
                    <h1 className="relative bg-[#0A0A0A] text-white px-8 py-4 border-4 border-[#0A0A0A] text-4xl font-bold uppercase tracking-tighter">
                      Products
                    </h1>
                  </div>
                  <p className="mt-4 font-mono text-sm text-gray-600 uppercase tracking-wide">
                    {filteredProducts.length} items found
                  </p>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="inline-block bg-white border-4 border-[#0A0A0A] p-12">
                      <p className="text-2xl font-bold uppercase tracking-tight mb-2">No Products Found</p>
                      <p className="text-gray-600 font-mono text-sm">Try adjusting your filters</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                      <div
                        key={product.id}
                        className={`${mounted ? 'animate-slide-up' : 'opacity-0'} delay-${Math.min(index * 100, 600)}`}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </ClientSearchParamsHandler>
    </Suspense>
  );
}