import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Sparkles,
  Tag,
  ArrowUpDown
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { ProductCard } from '../components/product/ProductCard';
import { useStore } from '../context/StoreContext';
import { ProductCondition } from '../types';

export const Marketplace: React.FC = () => {
  const { products, categories, stores } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedCondition, setSelectedCondition] = useState<string>(searchParams.get('condition') || 'all');
  const [selectedStore, setSelectedStore] = useState<string>(searchParams.get('store') || 'all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(6500);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync state if URL changes
  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) setSearchTerm(q);

    const c = searchParams.get('category');
    if (c !== null) setSelectedCategory(c);

    const cond = searchParams.get('condition');
    if (cond !== null) setSelectedCondition(cond);

    const s = searchParams.get('store');
    if (s !== null) setSelectedStore(s);
  }, [searchParams]);

  // Update URL params
  const updateUrlParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    updateUrlParams('category', slug);
  };

  const handleConditionSelect = (cond: string) => {
    setSelectedCondition(cond);
    updateUrlParams('condition', cond);
  };

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId);
    updateUrlParams('store', storeId);
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCondition('all');
    setSelectedStore('all');
    setSortBy('featured');
    setMaxPrice(6500);
    setSearchParams({});
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Only show published
        if (p.status !== 'published') return false;

        // Search filter
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(term);
          const matchDesc = p.description.toLowerCase().includes(term);
          const matchStore = p.storeName.toLowerCase().includes(term);
          const matchCat = p.category.toLowerCase().includes(term);
          if (!matchTitle && !matchDesc && !matchStore && !matchCat) return false;
        }

        // Category filter
        if (selectedCategory !== 'all') {
          const matchedCategoryObj = categories.find((c) => c.slug === selectedCategory);
          const catName = matchedCategoryObj?.name || selectedCategory;
          if (!p.category.toLowerCase().includes(catName.toLowerCase()) &&
              !catName.toLowerCase().includes(p.category.toLowerCase())) {
            return false;
          }
        }

        // Condition filter
        if (selectedCondition !== 'all') {
          if (p.condition.toLowerCase() !== selectedCondition.toLowerCase()) {
            return false;
          }
        }

        // Store filter
        if (selectedStore !== 'all') {
          if (p.storeId !== selectedStore) return false;
        }

        // Price filter
        if (p.price > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0; // featured/default
      });
  }, [products, searchTerm, selectedCategory, selectedCondition, selectedStore, maxPrice, sortBy, categories]);

  const activeFiltersCount =
    (searchTerm ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedCondition !== 'all' ? 1 : 0) +
    (selectedStore !== 'all' ? 1 : 0) +
    (maxPrice < 6500 ? 1 : 0);

  return (
    <MainLayout>
      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Global Marketplace
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore authentic goods, hardware, and accessories curated from verified merchants.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search products or stores..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  updateUrlParams('search', e.target.value);
                }}
                className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-xl text-sm border border-transparent focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    updateUrlParams('search', '');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle shrink-0 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                <h3 className="text-sm font-bold text-slate-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Condition Filter (New vs Used) */}
            <div className="py-4 border-b border-slate-100">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                Product Condition
              </h4>
              <div className="flex flex-col space-y-1.5">
                {[
                  { label: 'All Conditions', value: 'all' },
                  { label: 'Brand New', value: 'New', icon: Sparkles, color: 'text-blue-600' },
                  { label: 'Pre-Owned / Used', value: 'Used', icon: Tag, color: 'text-amber-600' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isChecked = selectedCondition === item.value;
                  return (
                    <button
                      key={item.value}
                      onClick={() => handleConditionSelect(item.value)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                        isChecked
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className={`w-3.5 h-3.5 ${item.color}`} />}
                        <span>{item.label}</span>
                      </div>
                      {isChecked && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filter */}
            <div className="py-4 border-b border-slate-100">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                Categories
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[11px] text-slate-600">{products.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.slug)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat.slug
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className="text-[11px] text-slate-600">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Merchant Store Filter */}
            <div className="py-4 border-b border-slate-100">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                Featured Stores
              </h4>
              <div className="space-y-1">
                <button
                  onClick={() => handleStoreSelect('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedStore === 'all'
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  All Stores
                </button>
                {stores.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => handleStoreSelect(store.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors truncate ${
                      selectedStore === store.id
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {store.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Cap Filter */}
            <div className="pt-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                <span>Max Price</span>
                <span className="text-blue-600 normal-case font-bold font-mono">
                  ${maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="6500"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex items-center justify-between text-[11px] text-slate-600 mt-1.5 font-mono">
                <span>$50</span>
                <span>$6,500</span>
              </div>
            </div>
          </aside>

          {/* Main Grid Section */}
          <div className="flex-1 w-full min-w-0">
            {/* Top Toolbar: Active stats + Sort + Mobile filter trigger */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 mb-6 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filters</span>
                  {activeFiltersCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                <p className="text-xs text-slate-500 font-medium">
                  Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span>{' '}
                  {filteredProducts.length === 1 ? 'product' : 'products'}
                  {searchTerm && (
                    <span> for "<span className="text-blue-600 font-semibold">{searchTerm}</span>"</span>
                  )}
                </p>
              </div>

              {/* Sorting Select */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-100 border-none text-xs font-semibold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured Drops</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Recently Added</option>
                </select>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2 flex-wrap mb-6">
                <span className="text-xs text-slate-600">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">
                    Search: {searchTerm}
                    <button onClick={() => { setSearchTerm(''); updateUrlParams('search', ''); }}>
                      <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                    </button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-200">
                    Category: {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
                    <button onClick={() => handleCategorySelect('all')}>
                      <X className="w-3 h-3 text-blue-500 hover:text-blue-700" />
                    </button>
                  </span>
                )}
                {selectedCondition !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-amber-50 text-amber-800 border border-amber-200">
                    Condition: {selectedCondition}
                    <button onClick={() => handleConditionSelect('all')}>
                      <X className="w-3 h-3 text-amber-600 hover:text-amber-800" />
                    </button>
                  </span>
                )}
                {selectedStore !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-purple-50 text-purple-700 border border-purple-200">
                    Store: {stores.find((s) => s.id === selectedStore)?.name || selectedStore}
                    <button onClick={() => handleStoreSelect('all')}>
                      <X className="w-3 h-3 text-purple-500 hover:text-purple-700" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold underline ml-1"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center max-w-md mx-auto shadow-subtle my-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  We couldn't find any products matching your current filters. Try relaxing your search terms or clearing active filters.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-over / Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm">Filter Products</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Condition */}
              <div className="py-4 border-b border-slate-100">
                <h4 className="text-xs font-semibold text-slate-900 mb-2">Condition</h4>
                <div className="space-y-1">
                  {['all', 'New', 'Used'].map((cond) => (
                    <button
                      key={cond}
                      onClick={() => handleConditionSelect(cond)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs capitalize ${
                        selectedCondition === cond
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-slate-600'
                      }`}
                    >
                      {cond === 'all' ? 'All Conditions' : cond}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="py-4 border-b border-slate-100">
                <h4 className="text-xs font-semibold text-slate-900 mb-2">Category</h4>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => handleCategorySelect('all')}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs ${
                      selectedCategory === 'all' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleCategorySelect(c.slug)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs ${
                        selectedCategory === c.slug ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};
