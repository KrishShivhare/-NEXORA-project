import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Save,
  Sparkles,
  Tag,
  X,
  Trash2,
  AlertCircle
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { ProductCondition, ProductStatus } from '../../types';

export const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, updateProduct, deleteProduct, categories } = useStore();

  const product = getProductById(id || '');

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('');
  const [originalPrice, setOriginalPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('Pro Audio & Hi-Fi');
  const [condition, setCondition] = useState<ProductCondition>('New');
  const [conditionDetail, setConditionDetail] = useState('');
  const [stock, setStock] = useState<string>('10');
  const [status, setStatus] = useState<ProductStatus>('published');
  const [images, setImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [features, setFeatures] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price.toString());
      setOriginalPrice(product.originalPrice ? product.originalPrice.toString() : '');
      setCategory(product.category);
      setCondition(product.condition);
      setConditionDetail(product.conditionDetail || '');
      setStock(product.stock.toString());
      setStatus(product.status);
      setImages(product.images);
      setFeatures(product.features ? product.features.join('\n') : '');
    }
  }, [product]);

  if (!product) {
    return (
      <DashboardLayout title="Edit Product">
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
          <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900">Product Not Found</h3>
          <p className="text-xs text-slate-500 mt-1">
            This product may have been deleted or the ID is invalid.
          </p>
          <Link
            to="/seller/products"
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
          >
            Return to Inventory
          </Link>
        </div>
      </DashboardLayout>
    );
  }

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

    updateProduct(product.id, {
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
      features: featureList,
    });

    setSavedNotification(true);
    setTimeout(() => {
      navigate('/seller/products');
    }, 800);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(product.id);
      navigate('/seller/products');
    }
  };

  return (
    <DashboardLayout
      title={`Edit: ${product.title}`}
      subtitle={`SKU: ${product.id} • Last modified`}
      actions={
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete</span>
          </button>
          <Link
            to="/seller/products"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </Link>
        </div>
      }
    >
      <div className="max-w-4xl mx-auto">
        {savedNotification && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <span>Product updated successfully! Returning to catalog...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* General Information */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              Product Overview
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-medium"
              />
              {errors.title && <p className="text-xs text-rose-600 mt-1">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Category
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
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
                >
                  <option value="published">Published (Visible in Marketplace)</option>
                  <option value="draft">Draft (Hidden)</option>
                </select>
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
              {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Specifications & Highlights (One per line)
              </label>
              <textarea
                rows={3}
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 font-mono text-xs"
              />
            </div>
          </div>

          {/* Condition */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              Condition & Authenticity
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCondition('New')}
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
                  <p className="text-[11px] text-slate-500 mt-0.5">Factory sealed, complete warranty</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setCondition('Used')}
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
                  <h4 className="text-xs font-bold text-slate-900">Used / Pre-Owned</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Certified refurbished or vintage</p>
                </div>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Condition Detail & Grading Note
              </label>
              <input
                type="text"
                value={conditionDetail}
                onChange={(e) => setConditionDetail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>
          </div>

          {/* Pricing & Stock */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              Pricing & Stock Levels
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Price ($ USD) *
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono font-bold"
                  />
                </div>
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono font-bold"
                />
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-card space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              Media Gallery
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {images.map((url, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
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

            <div className="flex gap-2">
              <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Paste image URL to add..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
              >
                Add Image
              </button>
            </div>
          </div>

          {/* Actions */}
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
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
