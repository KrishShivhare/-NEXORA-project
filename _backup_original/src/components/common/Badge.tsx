import React from 'react';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, Tag } from 'lucide-react';
import { ProductCondition, ProductStatus } from '../../types';

interface ConditionBadgeProps {
  condition: ProductCondition;
  detail?: string;
  size?: 'sm' | 'md';
}

export const ConditionBadge: React.FC<ConditionBadgeProps> = ({ condition, detail, size = 'sm' }) => {
  const isNew = condition === 'New';
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1 font-medium';

  return (
    <span
      title={detail || (isNew ? 'Brand new factory sealed' : 'Certified pre-owned / used')}
      className={`inline-flex items-center gap-1 rounded-full font-medium transition-colors ${sizeClasses} ${
        isNew
          ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
          : 'bg-amber-50 text-amber-800 border border-amber-200/60'
      }`}
    >
      {isNew ? <Sparkles className="w-3 h-3 text-blue-600" /> : <Tag className="w-3 h-3 text-amber-600" />}
      <span>{condition}</span>
    </span>
  );
};

export const StatusBadge: React.FC<{ status: ProductStatus }> = ({ status }) => {
  const isPublished = status === 'published';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        isPublished
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-slate-100 text-slate-600 border-slate-200'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isPublished ? 'bg-emerald-500' : 'bg-slate-400'}`} />
      <span className="capitalize">{status}</span>
    </span>
  );
};

export const OrderStatusBadge: React.FC<{ status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled' }> = ({ status }) => {
  const styles = {
    Processing: 'bg-blue-50 text-blue-700 border-blue-200',
    Shipped: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const icons = {
    Processing: <Clock className="w-3 h-3 text-blue-600" />,
    Shipped: <Clock className="w-3 h-3 text-indigo-600" />,
    Delivered: <CheckCircle2 className="w-3 h-3 text-emerald-600" />,
    Cancelled: <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
      <span>{status}</span>
    </span>
  );
};

export const VerifiedBadge: React.FC<{ text?: string }> = ({ text = 'Verified Store' }) => {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200/50">
      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 fill-blue-50" />
      <span>{text}</span>
    </span>
  );
};
