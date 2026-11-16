import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ArrowRight, Lock, Mail, Eye, EyeOff, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    // Determine role based on email or default to buyer
    let role: UserRole = 'buyer';
    if (email.includes('seller') || email.includes('aether')) role = 'seller';
    if (email.includes('admin') || email.includes('ops')) role = 'admin';

    login(role, email, email.split('@')[0]);
    if (role === 'seller') navigate('/seller/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
    else navigate('/marketplace');
  };

  const handleQuickLogin = (role: UserRole) => {
    login(role);
    if (role === 'seller') navigate('/seller/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
    else navigate('/marketplace');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900">NEXORA</span>
        </Link>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Welcome back to NEXORA
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500">
          Sign in to manage your storefront, orders, or saved collections.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-card sm:rounded-3xl sm:px-10 border border-slate-200/80">
          {/* Quick Demo Switcher Box */}
          <div className="mb-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>1-Click Prototype Quick Login</span>
            </div>
            <p className="text-[11px] text-blue-700/80 leading-relaxed mb-3">
              Test different platform roles instantly without manual credentials:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin('buyer')}
                className="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 shadow-2xs transition-colors flex flex-col items-center gap-0.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Shopper</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('seller')}
                className="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 shadow-2xs transition-colors flex flex-col items-center gap-0.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Seller</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('admin')}
                className="py-1.5 px-2 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] font-semibold border border-blue-200 shadow-2xs transition-colors flex flex-col items-center gap-0.5"
              >
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Admin</span>
              </button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-600 font-semibold">Or enter credentials</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@aethersound.io"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 transition-all"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 transition-all"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span>Remember this session</span>
              </label>
              <a href="#forgot" className="font-semibold text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-600/25"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Prototype disclaimer note */}
          <p className="mt-6 text-center text-[11px] text-slate-600 leading-relaxed">
            Frontend prototype. In production, credentials authenticate securely via Java Spring Boot JWT authentication & MySQL.
          </p>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-blue-600 hover:underline">
                Register free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
