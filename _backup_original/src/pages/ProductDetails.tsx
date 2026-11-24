import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ShoppingBag,
  ChevronRight,
  Sparkles,
  Store,
  Star,
  ExternalLink,
  Zap,
  Info
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { ConditionBadge } from '../components/common/Badge';
import { StarRating } from '../components/common/StarRating';
import { ProductCard } from '../components/product/ProductCard';
import { useStore } from '../context/StoreContext';
import { useCart } from '../context/CartContext';
import { Review } from '../types';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, products, stores } = useStore();
  const { addToCart } = useCart();

  const product = getProductById(id || '');

  const [selectedImage, setSelectedImage] = useState<string>(product?.images[0] || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'reviews' | 'shipping'>('details');
  const [added, setAdded] = useState(false);

  // Demo reviews state
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'rev-1',
      author: 'Julian Thorne',
      rating: 5,
      date: '2 days ago',
      comment: 'Build quality is absolute perfection. Exactly as described by the seller, packaged with supreme care.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'rev-2',
      author: 'Clara Oswald',
      rating: 5,
      date: '1 week ago',
      comment: 'Super fast shipping from the merchant. The condition report was 100% accurate. Will definitely shop from this store again.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
  ]);

  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Info className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
          <p className="text-slate-500 text-sm mt-2">
            The product you are looking for may have been removed or is temporarily unavailable.
          </p>
          <Link
            to="/marketplace"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Back to Marketplace</span>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Update selected image when product changes
  if (!selectedImage && product.images[0]) {
    setSelectedImage(product.images[0]);
  }

  const store = stores.find((s) => s.id === product.storeId || s.name === product.storeName);
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.storeId === product.storeId))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewAuthor.trim() && newReviewComment.trim()) {
      const newRev: Review = {
        id: `rev-${Date.now()}`,
        author: newReviewAuthor.trim(),
        rating: newReviewRating,
        date: 'Just now',
        comment: newReviewComment.trim(),
      };
      setReviews([newRev, ...reviews]);
      setNewReviewAuthor('');
      setNewReviewComment('');
    }
  };

  return (
    <MainLayout>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto">
            <Link to="/" className="hover:text-blue-600 transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/marketplace" className="hover:text-blue-600 transition-colors shrink-0">
              Marketplace
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              to={`/marketplace?category=${encodeURIComponent(product.category)}`}
              className="hover:text-blue-600 transition-colors truncate max-w-[150px] shrink-0"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-medium truncate max-w-[200px]">
              {product.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Primary Large Image */}
            <div className="relative aspect-square w-full bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-subtle group">
              <img
                src={selectedImage || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <ConditionBadge condition={product.condition} detail={product.conditionDetail} size="md" />
                {product.originalPrice && (
                  <span className="bg-rose-500 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                    Save ${(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      (selectedImage || product.images[0]) === img
                        ? 'border-blue-600 ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Condition Assurance Notice */}
            <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs border border-slate-200">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  {product.condition === 'New' ? 'Factory Sealed & Guaranteed New' : 'Certified Pre-Owned Inspection'}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {product.conditionDetail ||
                    (product.condition === 'New'
                      ? 'Supplied brand new in original retail packaging with full manufacturer warranty coverage.'
                      : 'Professionally evaluated for optical, cosmetic, and mechanical integrity by our verified vendor team.')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Buy Actions & Store Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Verified Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {product.category}
                </span>
                {product.sellerVerified && (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Merchant
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h1>

              {/* Rating & Stock */}
              <div className="mt-3 flex items-center gap-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
                <span className="text-slate-300">•</span>
                <span className={`text-xs font-semibold ${product.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>

              {/* Pricing Box */}
              <div className="mt-6 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-subtle">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900 font-mono">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-slate-600 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Or 4 interest-free payments of ${(product.price / 4).toFixed(2)} with Klarna / Affirm.
                </p>

                {/* Quantity & CTA */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 flex items-center justify-center font-bold text-sm shadow-xs"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-sm text-slate-900">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        disabled={quantity >= product.stock}
                        className="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 flex items-center justify-center font-bold text-sm shadow-xs"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={product.stock <= 0}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                        added
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : product.stock <= 0
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-slate-900 hover:bg-blue-600 text-white shadow-sm shadow-slate-900/10'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    disabled={product.stock <= 0}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Instant Checkout</span>
                  </button>
                </div>

                {/* Trust Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Free global express shipping over $150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>30-day verified merchant returns</span>
                  </div>
                </div>
              </div>

              {/* Seller Information Card */}
              {store && (
                <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-subtle">
                  <div className="flex items-center gap-3">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-slate-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-slate-900 truncate">{store.name}</h4>
                        {store.verified && <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />}
                      </div>
                      <p className="text-xs text-slate-500 truncate">{store.location}</p>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-600">
                        <span className="font-semibold text-amber-500 flex items-center gap-0.5">
                          ★ {store.rating}
                        </span>
                        <span>•</span>
                        <span>{store.totalSales || 350}+ orders fulfilled</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/store/${store.slug}`}
                    className="mt-3 w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    <Store className="w-3.5 h-3.5 text-blue-600" />
                    <span>Visit Seller Storefront</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabbed In-Depth Information */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200/80 shadow-subtle p-6 sm:p-8">
          {/* Tabs Navigation */}
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 overflow-x-auto">
            {[
              { id: 'details', label: 'Overview & Details' },
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'reviews', label: `Customer Reviews (${reviews.length})` },
              { id: 'shipping', label: 'Shipping & Warranty' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === 'details' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-lg font-bold text-slate-900">About this product</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                {product.features && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Product Specifications</h3>
                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">Condition</span>
                    <span className="font-semibold text-slate-900">{product.condition}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">Condition Note</span>
                    <span className="font-semibold text-slate-900">{product.conditionDetail || 'Standard'}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">Category</span>
                    <span className="font-semibold text-slate-900">{product.category}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">Merchant</span>
                    <span className="font-semibold text-slate-900">{product.storeName}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">In Stock</span>
                    <span className="font-semibold text-slate-900">{product.stock} units</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-slate-600">SKU / Item ID</span>
                    <span className="font-mono text-slate-700">{product.id}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-3xl space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Verified Buyer Feedback</h3>
                  <StarRating rating={product.rating} reviewCount={reviews.length} size="md" />
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={rev.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                            alt={rev.author}
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <span className="text-xs font-bold text-slate-900">{rev.author}</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                            Verified Buyer
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-600">{rev.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>

                {/* Add Review Form */}
                <form onSubmit={handleAddReview} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <h4 className="text-sm font-bold text-slate-900">Write a Review</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                        Rating
                      </label>
                      <select
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(Number(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                        <option value={2}>2 Stars - Below Expectations</option>
                        <option value={1}>1 Star - Poor</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                      Your Review
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your experience with this product and seller..."
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="max-w-2xl space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <h3 className="text-lg font-bold text-slate-900">Shipping & Return Guarantees</h3>
                <p>
                  All orders placed on NEXORA are processed directly by verified independent merchants within 24 to 48 business hours.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h5 className="font-bold text-slate-900 mb-1">Global Express Delivery</h5>
                    <p className="text-xs text-slate-500">
                      Standard tracking provided via FedEx, UPS, or DHL with signature confirmation on orders exceeding $300.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h5 className="font-bold text-slate-900 mb-1">30-Day Buyer Protection</h5>
                    <p className="text-xs text-slate-500">
                      If the received item does not match its condition description, you are covered by NEXORA’s money-back buyer guarantee.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products from the Same Store / Category */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  You May Also Like
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Similar Curations
                </h2>
              </div>
              <Link
                to="/marketplace"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                View full catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
