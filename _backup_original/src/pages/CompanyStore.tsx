import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Mail,
  Globe,
  Search,
  ShieldCheck,
  Package,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Tag,
  Info
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { ProductCard } from '../components/product/ProductCard';
import { StarRating } from '../components/common/StarRating';
import { useStore } from '../context/StoreContext';

export const CompanyStore: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getStoreBySlug, products } = useStore();

  const store = getStoreBySlug(slug || '');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  if (!store) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Info className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Storefront Not Found</h2>
          <p className="text-slate-500 text-sm mt-2">
            The merchant storefront you are looking for does not exist or has moved.
          </p>
          <Link
            to="/marketplace"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Marketplace
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Filter products belonging to this store
  const storeProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesStore = p.storeId === store.id || p.storeName.toLowerCase() === store.name.toLowerCase();
        if (!matchesStore) return false;
        if (p.status !== 'published') return false;

        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          if (!p.title.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) {
            return false;
          }
        }

        if (selectedCondition !== 'all') {
          if (p.condition.toLowerCase() !== selectedCondition.toLowerCase()) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, store, searchTerm, selectedCondition, sortBy]);

  return (
    <MainLayout>
      {/* Store Header Banner */}
      <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
        <img
          src={store.banner}
          alt={`${store.name} Banner`}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Storefront Identity Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 relative z-10 pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Logo and Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={store.logo}
                alt={store.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white shadow-lg bg-white"
                style={{ borderColor: store.brandColor }}
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {store.name}
                  </h1>
                  {store.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      Verified Brand
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
                  {store.description}
                </p>

                {/* Metadata Pills */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {store.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Member since {store.joinedDate}
                  </span>
                  {store.website && (
                    <a
                      href={store.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Website
                    </a>
                  )}
                  {store.email && (
                    <a
                      href={`mailto:${store.email}`}
                      className="flex items-center gap-1 text-slate-600 hover:text-slate-900"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {store.email}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Store Metrics Summary Box */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-8 shrink-0 gap-2">
              <div className="text-left sm:text-right">
                <StarRating rating={store.rating} reviewCount={store.reviewCount} size="md" />
                <p className="text-[11px] text-slate-600 mt-1">Merchant Rating</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-800 mt-2">
                <span className="flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-blue-600" />
                  {storeProducts.length} Items
                </span>
                <span className="flex items-center gap-1">
                  <ShoppingCart className="w-3.5 h-3.5 text-emerald-600" />
                  {store.totalSales || 300}+ Sold
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Store Catalogue Navigation & Controls */}
        <div className="mt-10">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-subtle mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* In-store Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder={`Search within ${store.name}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs border border-transparent focus:border-blue-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Condition & Sort Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setSelectedCondition('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCondition === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All ({storeProducts.length})
                </button>
                <button
                  onClick={() => setSelectedCondition('New')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    selectedCondition === 'New' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  New
                </button>
                <button
                  onClick={() => setSelectedCondition('Used')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    selectedCondition === 'Used' ? 'bg-white text-amber-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  Used
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-100 border-none text-xs font-semibold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Store Products Grid */}
          {storeProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {storeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center max-w-md mx-auto shadow-subtle my-8">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No products match your search</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing your search term or selecting "All Conditions".
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCondition('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
