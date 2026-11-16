import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, ShieldCheck, Check, Heart, Server } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm mt-auto border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Verified Multi-Vendor Platform</h4>
                <p className="text-xs text-slate-400">Every merchant storefront is verified for quality and authentic goods.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">New & Certified Used Quality</h4>
                <p className="text-xs text-slate-400">Clear condition transparency with warranties and return protection.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Modern SaaS Architecture</h4>
                <p className="text-xs text-slate-400">Clean modular frontend, architected for Spring Boot & MySQL microservices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">NEXORA</span>
            </Link>
            <p className="text-slate-300 text-sm max-w-sm font-medium">
              Your Business. Your Brand. Your Store.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              NEXORA empowers modern merchants, independent brands, and collectors to launch their custom digital storefronts and reach discerning buyers worldwide through a unified multi-vendor SaaS experience.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Stay Ahead of Product Drops
              </h5>
              {subscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>You're subscribed! Welcome to the NEXORA insider network.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-800/80 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm shadow-blue-600/30"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 1: Marketplace */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Marketplace
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/marketplace" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=audio" className="hover:text-white transition-colors">
                  Pro Audio & Hi-Fi
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=electronics" className="hover:text-white transition-colors">
                  Electronics & Computing
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=workspace" className="hover:text-white transition-colors">
                  Minimalist Workspace
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=timepieces" className="hover:text-white transition-colors">
                  Timepieces & Watches
                </Link>
              </li>
              <li>
                <Link to="/marketplace?condition=Used" className="hover:text-white transition-colors text-amber-400">
                  Certified Pre-Owned (Used)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Entrepreneurs */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              For Entrepreneurs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/create-company" className="hover:text-white transition-colors font-semibold text-blue-400">
                  Launch Your Storefront
                </Link>
              </li>
              <li>
                <Link to="/seller/dashboard" className="hover:text-white transition-colors">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link to="/seller/products/new" className="hover:text-white transition-colors">
                  List a New Product
                </Link>
              </li>
              <li>
                <Link to="/seller/profile" className="hover:text-white transition-colors">
                  Custom Branding Studio
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  0% Friction Listing Policy
                </span>
              </li>
              <li>
                <Link to="/admin/dashboard" className="hover:text-white transition-colors text-indigo-400">
                  Platform Admin Area
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Trust */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Platform & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-slate-400">Frontend: React + Vite + TS</span>
              </li>
              <li>
                <span className="text-slate-400">Styling: Tailwind CSS</span>
              </li>
              <li>
                <span className="text-slate-400">Backend Ready: Spring Boot</span>
              </li>
              <li>
                <span className="text-slate-400">Storage: MySQL Schema</span>
              </li>
              <li>
                <a href="#prototype" className="text-blue-400 hover:underline">
                  Prototype Specs & Info
                </a>
              </li>
              <li>
                <span className="text-slate-500">Security & GDPR Compliance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white">Frontend SaaS Architecture Demo</span>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  This frontend prototype leverages browser localStorage for state persistence. Production authentication, transactional payments, order fulfillment, and multi-tenant isolation will integrate with a Java Spring Boot backend and MySQL relational database.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                v1.0.0-PROTOTYPE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NEXORA SaaS Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with precision & elegance</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> for modern commerce
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
