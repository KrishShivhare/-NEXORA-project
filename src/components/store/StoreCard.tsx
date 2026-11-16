import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, ShoppingCart } from 'lucide-react';
import { Store } from '../../types';
import { StarRating } from '../common/StarRating';
import { VerifiedBadge } from '../common/Badge';

interface StoreCardProps {
  store: Store;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      {/* Banner */}
      <div className="relative h-28 w-full bg-slate-800 overflow-hidden">
        <img
          src={store.banner}
          alt={`${store.name} banner`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        <div className="absolute top-2.5 right-2.5">
          {store.verified && <VerifiedBadge text="Verified Vendor" />}
        </div>
      </div>

      {/* Body with Logo overlap */}
      <div className="px-5 pb-5 pt-0 flex-1 flex flex-col justify-between relative">
        <div>
          {/* Overlapping Logo */}
          <div className="-mt-8 mb-3 flex items-end justify-between">
            <img
              src={store.logo}
              alt={store.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white"
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
              {store.category}
            </span>
          </div>

          {/* Store Name & Description */}
          <Link to={`/store/${store.slug}`}>
            <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
              {store.name}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {store.description}
          </p>

          {/* Rating */}
          <div className="mt-3">
            <StarRating rating={store.rating} reviewCount={store.reviewCount} size="sm" />
          </div>
        </div>

        {/* Store Metrics & CTA */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Package className="w-3.5 h-3.5 text-slate-400" />
              {store.totalProducts || 12} items
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <ShoppingCart className="w-3.5 h-3.5 text-slate-400" />
              {store.totalSales || 300}+ sold
            </span>
          </div>

          <Link
            to={`/store/${store.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
          >
            <span>Visit Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
