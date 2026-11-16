import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Store,
  ArrowLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  ShoppingBag
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStore } from '../../context/StoreContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  mode?: 'seller' | 'admin';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  subtitle,
  actions,
  mode = 'seller',
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { stores } = useStore();
  const location = useLocation();
  const navigate = useNavigate();

  // Find user's store (or default to store-1 Aether Soundworks)
  const currentStore = stores.find((s) => s.id === user?.storeId) || stores[0];

  const sellerNav = [
    { name: 'Overview', path: '/seller/dashboard', icon: LayoutDashboard },
    { name: 'My Products', path: '/seller/products', icon: Package },
    { name: 'Add Product', path: '/seller/products/new', icon: PlusCircle },
    { name: 'Business Profile', path: '/seller/profile', icon: Settings },
  ];

  const adminNav = [
    { name: 'Platform Metrics', path: '/admin/dashboard', icon: TrendingUp },
    { name: 'All Products', path: '/marketplace', icon: Package },
  ];

  const navItems = mode === 'seller' ? sellerNav : adminNav;
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white tracking-tight">NEXORA</span>
              <span className="block text-[10px] text-blue-400 font-semibold uppercase tracking-wider -mt-1">
                {mode === 'seller' ? 'Seller Hub' : 'Admin Hub'}
              </span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Store Preview Banner (Seller Mode) */}
        {mode === 'seller' && currentStore && (
          <div className="p-4 mx-3 my-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-3">
              <img
                src={currentStore.logo}
                alt={currentStore.name}
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-blue-500/30"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{currentStore.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{currentStore.category}</p>
              </div>
            </div>
            <Link
              to={`/store/${currentStore.slug}`}
              className="mt-3 w-full py-1.5 px-3 rounded-lg bg-slate-700/60 hover:bg-blue-600 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View Live Storefront</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        )}

        {/* Navigation Links */}
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            {mode === 'seller' ? 'Store Management' : 'Administration'}
          </div>

          {navItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
                {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-200" />}
              </Link>
            );
          })}

          <div className="pt-4 px-3 pb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            Shortcuts
          </div>

          <Link
            to="/marketplace"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-slate-400" />
            <span>Marketplace</span>
          </Link>

          <Link
            to="/orders"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Package className="w-4 h-4 text-slate-400" />
            <span>Customer Orders</span>
          </Link>
        </div>

        {/* Bottom Profile and Return */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'}
                alt={user?.name}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-700"
              />
              <div className="truncate">
                <p className="text-xs font-medium text-white truncate">{user?.name}</p>
                <p className="text-[10px] text-slate-500 truncate capitalize">{user?.role}</p>
              </div>
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              title="Sign Out"
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                {title}
                {mode === 'seller' && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Seller
                  </span>
                )}
              </h1>
              {subtitle && <p className="text-xs text-slate-500 hidden sm:block">{subtitle}</p>}
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {actions}
            <div className="relative">
              <button
                title="Notifications"
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
