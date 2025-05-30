"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { Product } from "@/types";

interface ClientSearchParamsHandlerProps {
  onFilter: (filteredProducts: Product[]) => void;
  onCategoryChange?: (category: string) => void;
  onPriceRangeChange?: (range: [number, number]) => void;
  children?: React.ReactNode;
}

export default function ClientSearchParamsHandler({
  onFilter,
  onCategoryChange,
  onPriceRangeChange,
  children,
}: ClientSearchParamsHandlerProps) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    // Handle URL parameters
    const category = searchParams.get("category") || "All";
    const price = searchParams.get("price");

    setSelectedCategory(category);
    onCategoryChange?.(category);

    if (price) {
      const [min, max] = price.split("-").map(Number);
      const range: [number, number] = [min, max];
      setPriceRange(range);
      onPriceRangeChange?.(range);
    }
  }, [searchParams, onCategoryChange, onPriceRangeChange]);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    onFilter(filtered);
  }, [selectedCategory, searchQuery, priceRange, onFilter]);

  return <>{children}</>;
}
