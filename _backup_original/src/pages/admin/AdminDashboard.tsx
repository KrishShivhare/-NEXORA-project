import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  TrendingUp,
  DollarSign,
  Store,
  Users,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Search,
  Server,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { VerifiedBadge } from '../../components/common/Badge';

export const AdminDashboard: React.FC = () => {
  const { stores, updateStore, products, orders, resetDemoData } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [resetMessage, setResetMessage] = useState(false);

  const toggleVerification = (storeId: string, current: boolean) => {
    updateStore(storeId, { verified: !current });
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo products, stores, and orders to initial defaults?')) {
      resetDemoData();
      setResetMessage(true);
      setTimeout(() => setResetMessage(false), 3000);
    }
  };

  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout
      title="NEXORA Platform Administration"
      subtitle="Superadmin controls for multi-vendor moderation, take-rate analytics & infrastructure."
      mode="admin"
      actions={
        <button
          onClick={handleResetData}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700 shadow-2xs"
        >
          Reset Demo State
        </button>
      }
    >
      {resetMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Demo state reset to initial rich fixtures!</span>
        </div>
      )}

      {/* 1. Global Platform Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Platform GMV</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 font-mono">$2,842,500</span>
            <span className="text-xs font-bold text-emerald-600">+24.8%</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">Gross merchandise platform volume</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">NEXORA Take Rate (5%)</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 font-mono">$142,125</span>
            <span className="text-xs font-bold text-emerald-600">Pure Margin</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">Platform fee retained automatically</p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Merchants</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Store className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 font-mono">{stores.length}</span>
            <span className="text-xs text-slate-500">Verified Stores</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">Multi-tenant independent brand hubs</p>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-subtle">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live Products</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 font-mono">{products.length}</span>
            <span className="text-xs text-slate-500">SKUs Indexed</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-1">New and pre-owned listings</p>
        </div>
      </div>

      {/* 2. Vendor Moderation Directory */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Merchant Directory & Verification</h3>
            <p className="text-xs text-slate-500">Audit merchant stores, grant verified badges, or inspect stores.</p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search vendor or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Merchant Store</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Moderation Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStores.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={s.logo} alt={s.name} className="w-9 h-9 rounded-xl object-cover bg-slate-100" />
                      <div>
                        <Link
                          to={`/store/${s.slug}`}
                          className="font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1"
                        >
                          <span>{s.name}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </Link>
                        <span className="text-[11px] text-slate-400 font-mono">/store/{s.slug}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-slate-600 font-medium">
                    {s.category}
                  </td>

                  <td className="py-3 px-4 text-slate-500">
                    {s.location}
                  </td>

                  <td className="py-3 px-4 font-semibold text-slate-800">
                    ★ {s.rating} ({s.reviewCount})
                  </td>

                  <td className="py-3 px-4">
                    {s.verified ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Unverified
                      </span>
                    )}
                  </td>

                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => toggleVerification(s.id, s.verified)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                        s.verified
                          ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                          : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {s.verified ? 'Revoke Badge' : 'Grant Verified'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Architecture & Spring Boot Backend Integration Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-elevated">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Spring Boot & MySQL Backend Integration Protocol
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                This UI is pre-wired with clean typed interfaces corresponding to standard REST endpoints:
                <code className="bg-slate-800 px-2 py-0.5 rounded text-blue-400 font-mono text-[11px] ml-1">/api/v1/products</code>,
                <code className="bg-slate-800 px-2 py-0.5 rounded text-blue-400 font-mono text-[11px] ml-1">/api/v1/stores</code>,
                <code className="bg-slate-800 px-2 py-0.5 rounded text-blue-400 font-mono text-[11px] ml-1">/api/v1/orders</code>,
                and JWT auth under
                <code className="bg-slate-800 px-2 py-0.5 rounded text-blue-400 font-mono text-[11px] ml-1">/api/v1/auth</code>.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              REST API Ready
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
