import React from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  PlusCircle,
  ExternalLink,
  Store,
  ArrowUpRight,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import { ConditionBadge, StatusBadge, OrderStatusBadge } from '../../components/common/Badge';

export const SellerDashboard: React.FC = () => {
  const { user } = useAuth();
  const { products, stores, orders } = useStore();

  // Find current seller store (or fallback to Aether Soundworks store-1)
  const currentStore = stores.find((s) => s.id === user?.storeId) || stores[0];

  // Products belonging to this seller
  const sellerProducts = products.filter(
    (p) => p.storeId === currentStore?.id || p.storeName === currentStore?.name
  );

  // Stats calculation
  const totalProducts = sellerProducts.length;
  const publishedCount = sellerProducts.filter((p) => p.status === 'published').length;
  const draftCount = sellerProducts.filter((p) => p.status === 'draft').length;
  const totalStock = sellerProducts.reduce((sum, p) => sum + p.stock, 0);

  // Realistic revenue demo figures
  const totalRevenue = 48620;
  const monthlyRevenue = 12450;
  const totalOrdersCount = 142;
  const avgOrderValue = 342;

  // Recent 5 products
  const recentProducts = sellerProducts.slice(0, 5);

  return (
    <DashboardLayout
      title="Store Command Center"
      subtitle={`Managing ${currentStore?.name || 'Your Brand'} storefront and inventory.`}
      actions={
        <div className="flex items-center gap-2">
          <Link
            to="/seller/products/new"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </Link>
          <Link
            to={`/store/${currentStore?.slug || 'aether-soundworks'}`}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-xs"
          >
            <span>Live Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      }
    >
      {/* 1. Top Stat Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Metric 1: Total Revenue */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gross Sales</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono">
                ${totalRevenue.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              ${monthlyRevenue.toLocaleString()} this month (demo)
            </p>
          </div>
        </div>

        {/* Metric 2: Total Orders */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Orders</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono">
                {totalOrdersCount}
              </span>
              <span className="text-xs font-bold text-blue-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-0.5" /> +8.2%
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Across global multi-vendor cart
            </p>
          </div>
        </div>

        {/* Metric 3: Active Inventory */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Store Catalog</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono">
                {totalProducts}
              </span>
              <span className="text-xs font-medium text-slate-500">
                ({publishedCount} live, {draftCount} draft)
              </span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              {totalStock} total units in stock
            </p>
          </div>
        </div>

        {/* Metric 4: Average Order Value */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg. Order Value</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-mono">
                ${avgOrderValue}
              </span>
              <span className="text-xs font-bold text-emerald-600">+5.1%</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              High basket conversion rate
            </p>
          </div>
        </div>
      </div>

      {/* 2. Visual Revenue Chart Simulation & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Revenue Performance Card (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Revenue & Sales Trajectory</h3>
              <p className="text-xs text-slate-500">Monthly store volume breakdown (USD)</p>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600">
              <button className="px-2.5 py-1 bg-white text-slate-900 rounded-lg shadow-2xs font-semibold">
                Monthly
              </button>
              <button className="px-2.5 py-1 hover:text-slate-900">Weekly</button>
            </div>
          </div>

          {/* Clean SVG/CSS Bar Chart */}
          <div className="pt-4">
            <div className="h-48 flex items-end gap-3 sm:gap-4 justify-between border-b border-slate-100 pb-3">
              {[
                { month: 'Oct', val: 6800, height: '40%' },
                { month: 'Nov', val: 8400, height: '52%' },
                { month: 'Dec', val: 14200, height: '88%' },
                { month: 'Jan', val: 9800, height: '62%' },
                { month: 'Feb', val: 11200, height: '70%' },
                { month: 'Mar (Now)', val: 16400, height: '100%', highlight: true },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="text-[10px] font-mono text-slate-600 group-hover:text-blue-600 transition-colors">
                    ${(item.val / 1000).toFixed(1)}k
                  </div>
                  <div className="w-full bg-slate-100 rounded-xl relative flex items-end overflow-hidden h-36">
                    <div
                      className={`w-full rounded-xl transition-all duration-500 ${
                        item.highlight
                          ? 'bg-blue-600 shadow-sm shadow-blue-500/30'
                          : 'bg-slate-800/80 group-hover:bg-blue-500'
                      }`}
                      style={{ height: item.height }}
                    />
                  </div>
                  <span className={`text-[11px] font-medium ${item.highlight ? 'text-blue-600 font-bold' : 'text-slate-500'}`}>
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-600 pt-3">
              <span>NEXORA 0% Platform Listing Friction</span>
              <span className="font-semibold text-emerald-600">Avg. 94.2% payout clearance rate</span>
            </div>
          </div>
        </div>

        {/* Quick Actions & Store Health (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-subtle flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Store Quick Actions</h3>
            <p className="text-xs text-slate-500 mb-4">Fast shortcuts to common merchant tasks</p>

            <div className="space-y-2">
              <Link
                to="/seller/products/new"
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <PlusCircle className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">List New Product</p>
                  <p className="text-[11px] text-slate-500">Publish new or used items</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/seller/products"
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Manage Inventory</p>
                  <p className="text-[11px] text-slate-500">Update stock, edit prices</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/seller/profile"
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-left transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Branding Studio</p>
                  <p className="text-[11px] text-slate-500">Banners, logo & brand colors</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Merchant Status</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Active & Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Recent Products & Recent Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Products (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-subtle">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Recent Products</h3>
              <p className="text-xs text-slate-500">Your latest listed inventory</p>
            </div>
            <Link
              to="/seller/products"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View all ({sellerProducts.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentProducts.length > 0 ? (
              recentProducts.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-12 h-12 rounded-xl object-cover bg-slate-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <Link
                        to={`/product/${p.id}`}
                        className="text-xs font-bold text-slate-900 hover:text-blue-600 truncate block"
                      >
                        {p.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <ConditionBadge condition={p.condition} size="sm" />
                        <StatusBadge status={p.status} />
                        <span className="text-[11px] text-slate-600">Stock: {p.stock}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      ${p.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/seller/products/edit/${p.id}`}
                      className="block text-[11px] text-blue-600 hover:underline mt-0.5"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-slate-500">
                No products found. Start by listing your first item!
              </div>
            )}
          </div>
        </div>

        {/* Recent Orders Timeline (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-subtle">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Recent Customer Activity</h3>
              <p className="text-xs text-slate-500">Latest platform order events</p>
            </div>
            <Link
              to="/orders"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>All Orders</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {orders.slice(0, 3).map((ord) => (
              <div key={ord.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-900">{ord.id}</span>
                  <OrderStatusBadge status={ord.status} />
                </div>
                <div className="text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">{ord.customerName}</p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {ord.items.map((i) => `${i.quantity}x ${i.productTitle}`).join(', ')}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-600">{ord.date}</span>
                  <span className="font-bold text-slate-900 font-mono">${ord.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
