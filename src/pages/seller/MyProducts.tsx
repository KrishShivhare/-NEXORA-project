import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusCircle,
  Search,
  SlidersHorizontal,
  Edit,
  Trash2,
  ExternalLink,
  Package,
  AlertTriangle,
  CheckCircle,
  Eye
} from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import { ConditionBadge, StatusBadge } from '../../components/common/Badge';

export const MyProducts: React.FC = () => {
  const { user } = useAuth();
  const { products, stores, deleteProduct, updateProduct } = useStore();

  const currentStore = stores.find((s) => s.id === user?.storeId) || stores[0];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [conditionFilter, setConditionFilter] = useState<'all' | 'New' | 'Used'>('all');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Products for this seller
  const sellerProducts = useMemo(() => {
    return products.filter(
      (p) => p.storeId === currentStore?.id || p.storeName === currentStore?.name
    );
  }, [products, currentStore]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return sellerProducts.filter((p) => {
      if (statusFilter !== 'all' && p.status !== statusFilter) return false;
      if (conditionFilter !== 'all' && p.condition !== conditionFilter) return false;
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [sellerProducts, statusFilter, conditionFilter, searchTerm]);

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setDeleteConfirmId(null);
  };

  const toggleStatus = (id: string, current: 'published' | 'draft') => {
    updateProduct(id, { status: current === 'published' ? 'draft' : 'published' });
  };

  return (
    <DashboardLayout
      title="My Inventory Catalog"
      subtitle={`Manage all products listed under ${currentStore?.name || 'your store'}.`}
      actions={
        <Link
          to="/seller/products/new"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add New Product</span>
        </Link>
      }
    >
      {/* Search and Filters Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 mb-6 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs border border-transparent focus:border-blue-500 focus:outline-none"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
          {/* Status filter */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                statusFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              All ({sellerProducts.length})
            </button>
            <button
              onClick={() => setStatusFilter('published')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                statusFilter === 'published' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Live ({sellerProducts.filter((p) => p.status === 'published').length})
            </button>
            <button
              onClick={() => setStatusFilter('draft')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                statusFilter === 'draft' ? 'bg-white text-slate-700 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Drafts ({sellerProducts.filter((p) => p.status === 'draft').length})
            </button>
          </div>

          {/* Condition filter */}
          <select
            value={conditionFilter}
            onChange={(e) => setConditionFilter(e.target.value as any)}
            className="bg-slate-100 text-xs font-semibold text-slate-700 px-3 py-1.5 rounded-xl border-none focus:outline-none"
          >
            <option value="all">All Conditions</option>
            <option value="New">New Only</option>
            <option value="Used">Used / Pre-Owned</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Product Details</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Condition</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Stock Status</th>
                <th className="py-3.5 px-4">Visibility</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Title & Image */}
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-12 h-12 rounded-xl object-cover bg-slate-100 shrink-0"
                        />
                        <div className="min-w-0 max-w-xs">
                          <Link
                            to={`/product/${p.id}`}
                            className="font-bold text-slate-900 hover:text-blue-600 line-clamp-1 text-xs"
                          >
                            {p.title}
                          </Link>
                          <span className="text-[11px] text-slate-400 font-mono">ID: {p.id}</span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      {p.category}
                    </td>

                    {/* Condition */}
                    <td className="py-3.5 px-4">
                      <ConditionBadge condition={p.condition} detail={p.conditionDetail} size="sm" />
                    </td>

                    {/* Price */}
                    <td className="py-3.5 px-4 font-bold text-slate-900 font-mono">
                      ${p.price.toLocaleString()}
                    </td>

                    {/* Stock */}
                    <td className="py-3.5 px-4">
                      {p.stock > 0 ? (
                        <span
                          className={`font-semibold ${
                            p.stock <= 3 ? 'text-amber-600 flex items-center gap-1' : 'text-slate-800'
                          }`}
                        >
                          {p.stock <= 3 && <AlertTriangle className="w-3 h-3 text-amber-500" />}
                          {p.stock} units
                        </span>
                      ) : (
                        <span className="font-semibold text-rose-600">Out of Stock</span>
                      )}
                    </td>

                    {/* Visibility status */}
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => toggleStatus(p.id, p.status)}
                        title="Click to toggle publish/draft"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <StatusBadge status={p.status} />
                      </button>
                    </td>

                    {/* Action buttons */}
                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          to={`/product/${p.id}`}
                          title="Preview Product"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/seller/products/edit/${p.id}`}
                          title="Edit Product"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirmId(p.id)}
                          title="Delete Product"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    <Package className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                    <p className="font-bold text-slate-700">No products match your criteria</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Try relaxing your search query or reset your filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-200 shadow-2xl animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Delete Product?</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Are you sure you want to remove this product from your inventory? This action immediately deletes it from the marketplace.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-xs font-semibold text-white hover:bg-rose-700 transition-colors"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
