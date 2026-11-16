import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Search,
  Store,
  Layers,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Package,
  PlusCircle,
  LogOut,
  ShieldAlert,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { UserRole } from '../../types';

export const Navbar: React.FC = () => {
  const { user, role, switchRole, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const handleRoleChange = (newRole: UserRole) => {
    switchRole(newRole);
    setRoleDropdownOpen(false);
    if (newRole === 'seller') {
      navigate('/seller/dashboard');
    } else if (newRole === 'admin') {
      navigate('/admin/dashboard');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Demo helper banner */}
      <div className="bg-slate-900 text-white text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto py-0.5">
          <span className="font-semibold text-blue-400 uppercase tracking-wider text-[11px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            NEXORA Live Prototype:
          </span>
          <span className="text-slate-300 hidden sm:inline">Frontend prototype with dynamic state & demo role switching</span>
        </div>
        
        {/* Quick Role Switcher */}
        <div className="relative flex items-center gap-2">
          <span className="text-slate-400 hidden md:inline text-[11px]">View As:</span>
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-0.5 rounded text-[11px] font-medium border border-slate-700 transition-colors"
            >
              <UserCheck className="w-3 h-3 text-blue-400" />
              <span className="capitalize">{role} Mode</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {roleDropdownOpen && (
              <div
                className="absolute right-0 mt-1.5 w-44 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1"
                onClick={() => setRoleDropdownOpen(false)}
              >
                <div className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-600 border-b border-slate-100">
                  Switch Demo Account
                </div>
                <button
                  onClick={() => handleRoleChange('buyer')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${
                    role === 'buyer' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>Shopper (Marcus)</span>
                  {role === 'buyer' && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
                <button
                  onClick={() => handleRoleChange('seller')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${
                    role === 'seller' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>Seller (Elena Rostova)</span>
                  {role === 'seller' && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
                <button
                  onClick={() => handleRoleChange('admin')}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${
                    role === 'admin' ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'
                  }`}
                >
                  <span>Admin (David Mercer)</span>
                  {role === 'admin' && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  NEXORA
                </span>
                <span className="text-[10px] font-medium text-slate-600 -mt-1 hidden sm:block tracking-wide">
                  Your Business. Your Brand.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/marketplace"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/marketplace')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Marketplace
              </Link>
              <Link
                to="/#stores"
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Featured Stores
              </Link>
              <Link
                to="/#how-it-works"
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                How It Works
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-sm border border-transparent focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-3">
            {/* Start Business CTA */}
            <Link
              to="/create-company"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-blue-600 text-white transition-all shadow-sm shadow-slate-900/10"
            >
              <Store className="w-3.5 h-3.5" />
              <span>Start Your Business</span>
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Account Dropdown */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                    alt={user?.name || 'Account'}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-200"
                  />
                  <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
                </button>

                {userDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                      <div className="mt-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 capitalize border border-blue-200/50">
                          {user?.role} Account
                        </span>
                      </div>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/orders"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      >
                        <Package className="w-4 h-4" />
                        <span>Customer Orders</span>
                      </Link>

                      {(user?.role === 'seller' || user?.role === 'admin') && (
                        <>
                          <div className="border-t border-slate-100 my-1" />
                          <div className="px-4 py-1 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                            Seller Tools
                          </div>
                          <Link
                            to="/seller/dashboard"
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          >
                            <LayoutDashboard className="w-4 h-4" />
                            <span>Seller Dashboard</span>
                          </Link>
                          <Link
                            to="/seller/products"
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          >
                            <Package className="w-4 h-4" />
                            <span>My Products</span>
                          </Link>
                          <Link
                            to="/seller/products/new"
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          >
                            <PlusCircle className="w-4 h-4" />
                            <span>Add Product</span>
                          </Link>
                          <Link
                            to="/seller/profile"
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          >
                            <Store className="w-4 h-4" />
                            <span>Business Profile</span>
                          </Link>
                        </>
                      )}

                      {user?.role === 'admin' && (
                        <>
                          <div className="border-t border-slate-100 my-1" />
                          <Link
                            to="/admin/dashboard"
                            className="flex items-center gap-2.5 px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50 font-medium"
                          >
                            <ShieldAlert className="w-4 h-4 text-indigo-600" />
                            <span>Admin Dashboard</span>
                          </Link>
                        </>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-1">
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm shadow-blue-500/20"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-4 animate-in slide-in-from-top">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            <nav className="flex flex-col space-y-1">
              <Link
                to="/marketplace"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Marketplace
              </Link>
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Shopping Cart</span>
                <span className="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full text-xs">
                  {totalItems}
                </span>
              </Link>
              <Link
                to="/orders"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                My Orders
              </Link>
              <Link
                to="/create-company"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                Start Your Business
              </Link>
              {user?.role === 'seller' && (
                <Link
                  to="/seller/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  Seller Dashboard
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-indigo-700 hover:bg-indigo-50"
                >
                  Admin Portal
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
