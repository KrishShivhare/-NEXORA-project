import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check, ShieldCheck, Eye } from 'lucide-react';
import { Product } from '../../types';
import { ConditionBadge } from '../common/Badge';
import { StarRating } from '../common/StarRating';
import { useCart } from '../../context/CartContext';
import { useStore } from '../../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { stores } = useStore();
  const [added, setAdded] = useState(false);

  const store = stores.find((s) => s.id === product.storeId || s.name === product.storeName);
  const storeSlug = store?.slug || 'aether-soundworks';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Area */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'}
            alt={product.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          <ConditionBadge condition={product.condition} detail={product.conditionDetail} />
          {discountPercent > 0 && (
            <span className="bg-rose-500 text-white font-bold text-[11px] px-2 py-0.5 rounded-full shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <Link
            to={`/product/${product.id}`}
            className="pointer-events-auto bg-white/95 text-slate-800 hover:text-blue-600 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </Link>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Seller / Store Pill */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <Link
              to={`/store/${storeSlug}`}
              className="text-slate-600 hover:text-blue-600 font-medium inline-flex items-center gap-1 truncate max-w-[70%]"
            >
              <span className="truncate">{product.storeName}</span>
              {product.sellerVerified && (
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              )}
            </Link>
            <span className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">
              {product.category.split('&')[0]}
            </span>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-slate-900 text-sm leading-snug hover:text-blue-600 transition-colors line-clamp-2 mb-2">
              {product.title}
            </h3>
          </Link>

          {/* Star Rating */}
          <div className="mb-3">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-slate-900">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-600 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-600">
              {product.stock > 0 ? (
                product.stock < 5 ? (
                  <span className="text-amber-600 font-medium">Only {product.stock} left</span>
                ) : (
                  <span>In Stock</span>
                )
              ) : (
                <span className="text-rose-500 font-medium">Out of stock</span>
              )}
            </p>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0 ${
              added
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : product.stock <= 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-900 hover:bg-blue-600 text-white shadow-sm shadow-slate-900/10'
            }`}
            title={added ? 'Added to Cart' : 'Add to Cart'}
          >
            {added ? <Check className="w-4 h-4 animate-scale-in" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
