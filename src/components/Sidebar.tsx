'use client';

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
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg h-fit">
      <h2 className="text-xl font-bold mb-6">Filters</h2>
      
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-sm">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}