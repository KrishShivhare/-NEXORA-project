import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe2,
  CheckCircle2,
  Package,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { ProductCard } from '../components/product/ProductCard';
import { StoreCard } from '../components/store/StoreCard';
import { useStore } from '../context/StoreContext';

export const Home: React.FC = () => {
  const { products, stores, categories } = useStore();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      navigate('/marketplace');
    }
  };

  // Trending products: published products
  const trendingProducts = products.filter((p) => p.status === 'published').slice(0, 8);
  const featuredStores = stores.slice(0, 3);

  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 border-b border-slate-200/60">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
              <span>The Next Generation Multi-Vendor Commerce Platform</span>
              <span className="hidden sm:inline text-blue-400">|</span>
              <span className="hidden sm:inline font-normal text-blue-600">Explore New & Pre-Owned</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Your Business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Your Brand.
              </span>{' '}
              Your Store.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              NEXORA unifies visionary independent makers, premium electronics brands, and discerning shoppers on an enterprise-grade multi-vendor SaaS ecosystem.
            </p>

            {/* Interactive Search Bar in Hero */}
            <form onSubmit={handleHeroSearch} className="mt-8 max-w-xl mx-auto">
              <div className="relative flex items-center bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-slate-200/90 p-1.5 transition-all">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search audio gear, mechanical keyboards, timepieces, cameras..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-600/30 shrink-0"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Suggestion Pills */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 flex-wrap">
                <span className="text-slate-400">Popular:</span>
                {['Planar Headphones', 'Mechanical Keyboards', 'Vintage Watches', 'Minimalist Desk'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSearchInput(tag);
                      navigate(`/marketplace?search=${encodeURIComponent(tag)}`);
                    }}
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </form>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/marketplace"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Marketplace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/create-company"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Start Your Business</span>
              </Link>
            </div>

            {/* Micro Stats Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">$2.4M+</p>
                <p className="text-xs text-slate-500 font-medium">Merchant Volume</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">120+</p>
                <p className="text-xs text-slate-500 font-medium">Curated Brands</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">99.8%</p>
                <p className="text-xs text-slate-500 font-medium">Buyer Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">0%</p>
                <p className="text-xs text-slate-500 font-medium">Setup Friction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Discover By Category
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Curated Collections
              </h2>
            </div>
            <Link
              to="/marketplace"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
            >
              <span>View all categories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/marketplace?category=${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-subtle hover:shadow-card-hover transition-all"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {cat.itemCount} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trending Products (New & Used) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Trending Today</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Marketplace Drops
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore brand-new releases and certified pre-owned treasures with verified seller backing.
              </p>
            </div>
            <Link
              to="/marketplace"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-blue-600 transition-colors shadow-sm self-start sm:self-auto"
            >
              Explore All ({products.length})
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Seller Stores */}
      <section id="stores" className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Entrepreneur Showcases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Seller Storefronts
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Independent creators and established ateliers powered by NEXORA’s multi-vendor commerce engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/create-company"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 underline underline-offset-4"
            >
              <span>Want to feature your brand here? Open your storefront</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How NEXORA Works */}
      <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Seamless Commerce Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              How NEXORA Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Engineered to make buying transparent and running an online brand effortless.
            </p>
          </div>

          {/* Dual Flow: For Buyers and For Sellers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Shoppers */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">For Shoppers & Collectors</h3>
                  <p className="text-xs text-slate-500">Uncompromised authenticity and smooth purchasing</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">1. Discover Unique Goods</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Search across hundreds of independent brands or filter specifically by condition (Factory New or Certified Pre-Owned).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">2. Verified Seller Transparency</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Inspect seller ratings, condition breakdown, warranty details, and direct storefront policies before you buy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">3. Unified Multi-Vendor Checkout</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Bundle products from multiple independent stores into a single shopping cart with real-time order tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Entrepreneurs */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">For Merchants & Brands</h3>
                  <p className="text-xs text-slate-400">Launch a brand without building commerce infrastructure</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">1. Instant Company Setup</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Claim your unique store slug, upload your brand logo, pick your custom accent palette, and preview your storefront in minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">2. Full Inventory Control</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Publish products with multiple photos, detailed technical specifications, condition notes (New vs. Used), and stock counts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">3. Real-Time Analytics & Growth</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Track revenue, manage active orders, monitor inventory health, and leverage NEXORA marketplace traffic directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Entrepreneur Benefits */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Built For Serious Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why High-Growth Brands Choose NEXORA
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The power of a standalone Shopify store combined with the distribution of a global marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-blue-600 flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Dedicated Brand Storefronts</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every merchant receives their own branded URL (`/store/:slug`), custom header banner, brand accent color styling, and curated catalogue.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Custom hex color theming
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Merchant bio & contact badge
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-100/60 text-indigo-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Condition Transparency</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                First-class support for both factory new inventory and certified pre-owned/used goods with condition grading and warranty notes.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> Distinct New / Used badge styling
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> Detailed cosmetic grade notes
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/60 text-emerald-600 flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Full Seller Command Center</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Manage stock levels, draft unpublished items, edit pricing in real-time, and analyze orders via a modern Linear/Stripe-style dashboard.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Instant CRUD persistence
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Revenue & order breakdown
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. High-Impact CTA Banner */}
      <section className="py-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Launch Your Brand Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            Ready to build your digital commerce empire?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Create your company storefront in under 3 minutes. No technical hurdles, full brand autonomy, and immediate marketplace access.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/create-company"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Create Your Company Store</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/marketplace"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
