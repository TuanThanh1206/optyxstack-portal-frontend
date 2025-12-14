"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faGaugeHigh,
  faShieldHalved,
  faCloud,
  faDatabase,
  faNetworkWired,
  faSearch,
  faFilter,
  faStar,
  faShoppingCart,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  priceUnit: string;
  icon: IconDefinition;
  rating: number;
  reviews: number;
  featured?: boolean;
  popular?: boolean;
}

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Products", icon: faServer },
    { id: "vps", name: "VPS & Servers", icon: faServer },
    { id: "optimization", name: "Optimization", icon: faGaugeHigh },
    { id: "security", name: "Security", icon: faShieldHalved },
    { id: "backup", name: "Backup & Storage", icon: faCloud },
    { id: "database", name: "Database", icon: faDatabase },
    { id: "networking", name: "Networking", icon: faNetworkWired },
  ];

  const products: Product[] = [
    {
      id: "vps-001",
      name: "Managed VPS - Starter",
      category: "vps",
      description: "Perfect for small projects and websites. Includes 24/7 management.",
      price: "29",
      priceUnit: "/month",
      icon: faServer,
      rating: 4.8,
      reviews: 124,
      popular: true,
    },
    {
      id: "vps-002",
      name: "Managed VPS - Professional",
      category: "vps",
      description: "High-performance VPS for growing businesses. 4 vCPU, 8GB RAM.",
      price: "49",
      priceUnit: "/month",
      icon: faServer,
      rating: 4.9,
      reviews: 89,
      featured: true,
    },
    {
      id: "vps-003",
      name: "Managed VPS - Enterprise",
      category: "vps",
      description: "Enterprise-grade VPS with dedicated resources and priority support.",
      price: "99",
      priceUnit: "/month",
      icon: faServer,
      rating: 5.0,
      reviews: 45,
    },
    {
      id: "opt-001",
      name: "One-Time Server Optimization",
      category: "optimization",
      description: "Complete server performance audit and optimization. One-time service.",
      price: "199",
      priceUnit: "one-time",
      icon: faGaugeHigh,
      rating: 4.7,
      reviews: 203,
      popular: true,
    },
    {
      id: "opt-002",
      name: "Database Optimization",
      category: "optimization",
      description: "Specialized database tuning and query optimization service.",
      price: "149",
      priceUnit: "one-time",
      icon: faGaugeHigh,
      rating: 4.6,
      reviews: 67,
    },
    {
      id: "sec-001",
      name: "Security Monitoring",
      category: "security",
      description: "24/7 security monitoring with real-time threat detection.",
      price: "29",
      priceUnit: "/month",
      icon: faShieldHalved,
      rating: 4.9,
      reviews: 156,
      featured: true,
    },
    {
      id: "sec-002",
      name: "DDoS Protection",
      category: "security",
      description: "Advanced DDoS protection with automatic mitigation.",
      price: "79",
      priceUnit: "/month",
      icon: faShieldHalved,
      rating: 4.8,
      reviews: 92,
    },
    {
      id: "backup-001",
      name: "Cloud Backup - Basic",
      category: "backup",
      description: "Daily automated backups with 7-day retention.",
      price: "9",
      priceUnit: "/month",
      icon: faCloud,
      rating: 4.5,
      reviews: 234,
    },
    {
      id: "backup-002",
      name: "Cloud Backup - Pro",
      category: "backup",
      description: "Hourly backups with 30-day retention and point-in-time recovery.",
      price: "19",
      priceUnit: "/month",
      icon: faCloud,
      rating: 4.7,
      reviews: 178,
      popular: true,
    },
    {
      id: "db-001",
      name: "Managed MySQL Database",
      category: "database",
      description: "Fully managed MySQL with automated backups and monitoring.",
      price: "39",
      priceUnit: "/month",
      icon: faDatabase,
      rating: 4.8,
      reviews: 112,
    },
    {
      id: "db-002",
      name: "Managed PostgreSQL",
      category: "database",
      description: "Enterprise PostgreSQL with high availability setup.",
      price: "49",
      priceUnit: "/month",
      icon: faDatabase,
      rating: 4.9,
      reviews: 87,
    },
    {
      id: "net-001",
      name: "CDN Service",
      category: "networking",
      description: "Global CDN for fast content delivery worldwide.",
      price: "19",
      priceUnit: "/month",
      icon: faNetworkWired,
      rating: 4.6,
      reviews: 145,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-high":
        return parseFloat(b.price) - parseFloat(a.price);
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return b.reviews - a.reviews;
    }
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      vps: "bg-blue-100 text-blue-600",
      optimization: "bg-purple-100 text-purple-600",
      security: "bg-red-100 text-red-600",
      backup: "bg-green-100 text-green-600",
      database: "bg-yellow-100 text-yellow-600",
      networking: "bg-indigo-100 text-indigo-600",
    };
    return colors[category] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="flex gap-6">
      {/* Category Sidebar */}
      <aside className="w-64 bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-fit sticky top-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center">
          <FontAwesomeIcon icon={faFilter} className="mr-2 text-indigo-600" />
          Categories
        </h3>
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left ${
                selectedCategory === category.id
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FontAwesomeIcon icon={category.icon} className="w-5 mr-3" />
              <span className="font-medium">{category.name}</span>
              {selectedCategory === category.id && (
                <FontAwesomeIcon icon={faChevronRight} className="ml-auto text-sm" />
              )}
            </button>
          ))}
        </nav>

        {/* Filter Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-3 text-sm">Price Range</h4>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Under $20/month
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              $20 - $50/month
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              $50 - $100/month
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Over $100/month
            </label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Store</h2>
            <p className="text-gray-600 mt-1">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
            <p className="text-gray-500 text-lg">No products found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all ${
                  product.featured ? "ring-2 ring-indigo-500" : ""
                }`}
              >
                {product.featured && (
                  <div className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 text-center">
                    Featured
                  </div>
                )}
                {product.popular && !product.featured && (
                  <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 text-center">
                    Popular
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${getCategoryColor(product.category)}`}>
                      <FontAwesomeIcon icon={product.icon} className="text-xl" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                      <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-sm text-gray-500 ml-1">{product.priceUnit}</span>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

