import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Store,
  Layers,
  Sparkles,
  ArrowRight,
  Upload,
  Palette,
  Eye,
  CheckCircle2,
  Globe,
  MapPin,
  Mail,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';

export const CreateCompany: React.FC = () => {
  const navigate = useNavigate();
  const { addStore } = useStore();
  const { user, login } = useAuth();

  // Form states
  const [name, setName] = useState('Vanguard Acoustics');
  const [slug, setSlug] = useState('vanguard-acoustics');
  const [category, setCategory] = useState('Pro Audio & Hi-Fi');
  const [description, setDescription] = useState(
    'Bespoke electroacoustic monitoring, studio reference cables, and planar magnetic transducer innovations.'
  );
  const [brandColor, setBrandColor] = useState('#2563EB');
  const [location, setLocation] = useState('Stockholm, Sweden');
  const [email, setEmail] = useState('atelier@vanguard-sound.com');
  const [website, setWebsite] = useState('https://vanguard-sound.com');

  // Preset Logos & Banners
  const [logo, setLogo] = useState(
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80'
  );
  const [banner, setBanner] = useState(
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80'
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-generate slug when name changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Company name is required';
    if (!slug.trim()) errs.slug = 'Storefront URL slug is required';
    if (!description.trim()) errs.description = 'Company description is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'A valid contact email is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const createdStore = addStore({
        name,
        slug,
        category,
        description,
        brandColor,
        location,
        email,
        website,
        logo,
        banner,
        totalProducts: 0,
        totalSales: 0,
        verified: true,
      });

      // Update auth role to seller with this new store
      login('seller', email, name, createdStore.id);

      navigate('/seller/dashboard');
    }, 600);
  };

  // Color Presets
  const COLOR_PRESETS = [
    { name: 'Electric Blue', hex: '#2563EB' },
    { name: 'Deep Indigo', hex: '#4F46E5' },
    { name: 'Slate Dark', hex: '#0F172A' },
    { name: 'Emerald Forest', hex: '#059669' },
    { name: 'Amber Gold', hex: '#D97706' },
    { name: 'Royal Purple', hex: '#7C3AED' },
    { name: 'Crimson Rose', hex: '#E11D48' },
  ];

  return (
    <MainLayout>
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Merchant Onboarding Wizard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Create Your Company Storefront
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Configure your brand identity, unique store URL, and custom accent palette with live real-time storefront preview.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Company Info */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>Brand Identity & Handle</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Unique Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={handleNameChange}
                      placeholder="e.g. Aether Soundworks"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Slug preview */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Storefront Web Address (Slug) *
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 overflow-hidden text-xs">
                      <span className="px-3 text-slate-600 bg-slate-100 font-mono border-r border-slate-200">
                        nexora.io/store/
                      </span>
                      <input
                        type="text"
                        required
                        value={slug}
                        onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                        className="flex-1 bg-transparent px-3 py-2.5 text-slate-900 focus:outline-none font-mono"
                      />
                    </div>
                    {errors.slug && <p className="text-xs text-rose-600 mt-1">{errors.slug}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Business Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                      >
                        <option value="Pro Audio & Hi-Fi">Pro Audio & Hi-Fi</option>
                        <option value="Electronics & Computing">Electronics & Computing</option>
                        <option value="Minimalist Workspace">Minimalist Workspace</option>
                        <option value="Cameras & Optics">Cameras & Optics</option>
                        <option value="Horology & Timepieces">Horology & Timepieces</option>
                        <option value="Everyday Carry & Bags">Everyday Carry & Bags</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Location / Headquarter
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Stockholm, Sweden"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Company Story & Bio *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Briefly describe what your brand crafts or curates..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 transition-all leading-relaxed"
                    />
                    {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
                  </div>
                </div>
              </div>

              {/* Step 2: Branding Assets & Colors */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span>Branding Visuals & Color Palette</span>
                </h3>

                <div className="space-y-4">
                  {/* Brand Color Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Store Accent Color</span>
                      <span className="font-mono text-slate-500 normal-case">{brandColor}</span>
                    </label>
                    <div className="flex items-center gap-2 flex-wrap">
                      {COLOR_PRESETS.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => setBrandColor(c.hex)}
                          className={`w-7 h-7 rounded-xl transition-all relative ${
                            brandColor === c.hex ? 'ring-2 ring-offset-2 ring-slate-800 scale-110' : 'hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                      <div className="flex items-center gap-1.5 ml-2">
                        <input
                          type="color"
                          value={brandColor}
                          onChange={(e) => setBrandColor(e.target.value)}
                          className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                        />
                        <span className="text-[11px] text-slate-400">Custom</span>
                      </div>
                    </div>
                  </div>

                  {/* Logo Image */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Logo Image URL
                    </label>
                    <input
                      type="url"
                      value={logo}
                      onChange={(e) => setLogo(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  {/* Banner Image */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Storefront Header Banner Image URL
                    </label>
                    <input
                      type="url"
                      value={banner}
                      onChange={(e) => setBanner(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Channels */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <span>Contact & External Channels</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Support Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Official Website (Optional)
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Launching Storefront...</span>
                  ) : (
                    <>
                      <span>Complete Setup & Open Seller Hub</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Live Storefront Interactive Preview (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Live Storefront Preview
                </h3>
              </div>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Real-Time Updates
              </span>
            </div>

            {/* Preview Store Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-elevated overflow-hidden transition-all">
              {/* Banner */}
              <div className="relative h-32 w-full bg-slate-900 overflow-hidden">
                <img
                  src={banner || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'}
                  alt="Banner preview"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span
                    className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full shadow-sm"
                    style={{ backgroundColor: brandColor }}
                  >
                    Custom Theme
                  </span>
                </div>
              </div>

              {/* Identity & Bio */}
              <div className="p-5 pt-0 relative">
                <div className="-mt-10 mb-3 flex items-end justify-between">
                  <img
                    src={logo || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80'}
                    alt="Logo"
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white"
                    style={{ outline: `2px solid ${brandColor}` }}
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <h4 className="text-base font-bold text-slate-900">{name || 'Your Company Name'}</h4>
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                  nexora.io/store/{slug || 'your-slug'}
                </p>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {description || 'Enter a company description to see your brand story here.'}
                </p>

                {/* Metadata */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {location || 'Location'}
                  </span>
                  <span className="font-semibold text-slate-800">0 Products Listed</span>
                </div>

                {/* Simulated Storefront Catalog Preview */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Storefront Appearance:
                  </p>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Store className="w-4 h-4 text-slate-700" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Custom Brand Accents</p>
                        <p className="text-[10px] text-slate-500">Buttons & links match your hex color</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl text-white text-[11px] font-semibold shadow-xs"
                      style={{ backgroundColor: brandColor }}
                    >
                      Follow Store
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Once created, you can immediately add products, configure stock levels, and customize your store banners from the Seller Command Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
