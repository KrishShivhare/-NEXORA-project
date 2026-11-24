import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  Palette,
  ExternalLink,
  Save,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';

export const BusinessProfile: React.FC = () => {
  const { user } = useAuth();
  const { stores, updateStore } = useStore();

  const currentStore = stores.find((s) => s.id === user?.storeId) || stores[0];

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brandColor, setBrandColor] = useState('#2563EB');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (currentStore) {
      setName(currentStore.name);
      setDescription(currentStore.description);
      setCategory(currentStore.category);
      setBrandColor(currentStore.brandColor || '#2563EB');
      setLocation(currentStore.location);
      setEmail(currentStore.email);
      setPhone(currentStore.phone || '');
      setWebsite(currentStore.website || '');
      setLogo(currentStore.logo);
      setBanner(currentStore.banner);
    }
  }, [currentStore]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentStore) return;

    updateStore(currentStore.id, {
      name,
      description,
      category,
      brandColor,
      location,
      email,
      phone,
      website,
      logo,
      banner,
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const COLOR_PRESETS = [
    '#2563EB', '#4F46E5', '#0F172A', '#059669', '#D97706', '#7C3AED', '#E11D48'
  ];

  return (
    <DashboardLayout
      title="Business Profile & Branding"
      subtitle="Customize how your brand storefront appears to shoppers across NEXORA."
      actions={
        <Link
          to={`/store/${currentStore?.slug || 'aether-soundworks'}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-xs"
        >
          <span>View Live Storefront</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      }
    >
      <div className="max-w-4xl mx-auto">
        {saved && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Storefront branding updated successfully! Changes are live on your store URL.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Brand Identity & Palette */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Palette className="w-4 h-4 text-blue-600" />
              <span>Brand Identity & Accent Color</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Brand Accent Color</span>
                <span className="font-mono text-slate-500 normal-case">{brandColor}</span>
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {COLOR_PRESETS.map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => setBrandColor(hex)}
                    className={`w-8 h-8 rounded-xl transition-all ${
                      brandColor === hex ? 'ring-2 ring-offset-2 ring-slate-800 scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                ))}
                <div className="flex items-center gap-1.5 ml-3">
                  <input
                    type="color"
                    value={brandColor}
                    onChange={(e) => setBrandColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                  />
                  <span className="text-xs text-slate-500">Pick custom hex</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Company Biography & Mission *
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>
          </div>

          {/* Visual Assets (Logo & Banner) */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-600" />
              <span>Storefront Visual Assets</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Company Logo
                </label>
                <div className="flex items-center gap-4">
                  <img
                    src={logo || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80'}
                    alt="Logo"
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-200"
                    style={{ borderColor: brandColor }}
                  />
                  <input
                    type="url"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                    placeholder="https://..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Storefront Banner
                </label>
                <div className="space-y-2">
                  <div className="h-16 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={banner} alt="Banner" className="w-full h-full object-cover" />
                  </div>
                  <input
                    type="url"
                    value={banner}
                    onChange={(e) => setBanner(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>Contact & Headquarters</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Customer Support Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Location / Country
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Official Website
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Support Telephone (Optional)
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 (0) 30 892019"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/25 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Business Profile</span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
