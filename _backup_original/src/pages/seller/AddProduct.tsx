import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  PlusCircle,
  Upload,
  Sparkles,
  Tag,
  CheckCircle2,
  Image as ImageIcon,
  X,
  AlertCircle
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import { ProductCondition, ProductStatus } from '../../types';

export const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addProduct, stores, categories } = useStore();

  const currentStore = stores.find((s) => s.id === user?.storeId) || stores[0];

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('');
  const [originalPrice, setOriginalPrice] = useState<string>('');
  const [category, setCategory] = useState<string>(categories[0]?.name || 'Pro Audio & Hi-Fi');
  const [condition, setCondition] = useState<ProductCondition>('New');
  const [conditionDetail, setConditionDetail] = useState('');
  const [stock, setStock] = useState<string>('10');
  const [status, setStatus] = useState<ProductStatus>('published');
  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
  ]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [features, setFeatures] = useState<string>('Aircraft-grade milled chassis\nLossless wireless audio\nFast USB-C charging');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAddImage = () => {
    if (newImageUrl.trim() && newImageUrl.startsWith('http')) {
      setImages([...images, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    if (images.length > 1) {
      setImages(images.filter((_, i) => i !== index));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!title.trim()) errs.title = 'Product title is required';
    if (!description.trim()) errs.description = 'Description is required';
    if (!price || Number(price) <= 0) errs.price = 'Please enter a valid price greater than 0';
    if (!stock || Number(stock) < 0) errs.stock = 'Stock must be 0 or higher';
    if (images.length === 0) errs.images = 'At least one product image is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const featureList = features
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    addProduct({
      title: title.trim(),
      description: description.trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      category,
      condition,
      conditionDetail: conditionDetail.trim() || undefined,
      stock: Number(stock),
      status,
      images,
      rating: 5.0,
      reviewCount: 0,
      storeId: currentStore?.id || 'store-1',
      storeName: currentStore?.name || 'Aether Soundworks',
      sellerVerified: currentStore?.verified ?? true,
      features: featureList,
    });

    navigate('/seller/products');
  };

  // Image Presets for rapid demo
  const IMAGE_PRESETS = [
    { label: 'Audio Headphone', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Mechanical Keyboard', url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Studio Monitor Stand', url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Camera Rangefinder', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Chronograph Watch', url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <DashboardLayout
      title="Add New Product"
      subtitle="Create a new listing in your store catalog."
      actions={
        <Link
          to="/seller/products"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </Link>
      }
    >
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              1. General Product Information
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Product Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Horizon X9 Wireless Planar Headphones"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-medium"
              />
              {errors.title && <p className="text-xs text-rose-600 mt-1">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Catalog Visibility Status
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus('published')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      status === 'published'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Published (Live)
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('draft')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      status === 'draft'
                        ? 'border-slate-700 bg-slate-100 text-slate-900'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Draft (Hidden)
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Description *
              </label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe key materials, engineering, sound profile, condition, or use-cases..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
              {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Feature Highlights (One per line)
              </label>
              <textarea
                rows={3}
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="Bullet point 1&#10;Bullet point 2"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-mono text-xs"
              />
            </div>
          </div>

          {/* Section 2: Condition & Transparency (New vs Used) */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>2. Product Condition & Transparency</span>
              <span className="text-xs font-normal text-slate-400 normal-case">
                Important for buyer trust & marketplace compliance
              </span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Item Condition *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setCondition('New');
                    setConditionDetail('Brand New Factory Sealed in Box');
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    condition === 'New'
                      ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/10'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${condition === 'New' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Brand New</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Factory sealed, unopened, full warranty</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCondition('Used');
                    setConditionDetail('Certified Pre-Owned 9.5/10 Mint Condition');
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    condition === 'Used'
                      ? 'border-amber-600 bg-amber-50/50 ring-2 ring-amber-500/10'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${condition === 'Used' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pre-Owned / Used</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Certified refurbished or vintage collector piece</p>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Condition Detail & Cosmetic Grade Note
              </label>
              <input
                type="text"
                value={conditionDetail}
                onChange={(e) => setConditionDetail(e.target.value)}
                placeholder={
                  condition === 'New'
                    ? 'e.g. Brand New Sealed in Original Retail Packaging'
                    : 'e.g. Mint Condition 9.5/10, shutter count 2,100, boxed with cables'
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Section 3: Pricing & Inventory */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              3. Pricing & Inventory Controls
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Listing Price ($ USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="499.00"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-mono font-bold"
                  />
                </div>
                {errors.price && <p className="text-xs text-rose-600 mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Original Price ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="599.00"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Stock Units Available *
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="10"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-mono font-bold"
                />
                {errors.stock && <p className="text-xs text-rose-600 mt-1">{errors.stock}</p>}
              </div>
            </div>
          </div>

          {/* Section 4: Imagery */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>4. Product Media & Gallery</span>
              <span className="text-xs font-normal text-slate-400 normal-case">
                {images.length} image(s) attached
              </span>
            </h3>

            {/* Attached Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {images.map((url, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 group bg-slate-100">
                  <img src={url} alt={`Upload ${idx}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  {idx === 0 && (
                    <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Cover
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Add Image by URL input */}
            <div className="flex gap-2">
              <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Paste high-res image URL (e.g. Unsplash)..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                Add Image
              </button>
            </div>

            {/* Quick Presets */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Or pick a demo image preset:
              </span>
              <div className="flex flex-wrap gap-2">
                {IMAGE_PRESETS.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setImages([p.url])}
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <Link
              to="/seller/products"
              className="px-6 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/25 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publish Product to Store</span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
