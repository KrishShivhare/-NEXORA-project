import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Calendar,
  Truck,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
  Eye,
  ShoppingBag
} from 'lucide-react';
import { MainLayout } from '../../components/layout/MainLayout';
import { OrderStatusBadge } from '../../components/common/Badge';
import { useStore } from '../../context/StoreContext';
import { Order } from '../../types';

export const Orders: React.FC = () => {
  const { orders } = useStore();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Customer Orders
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track multi-vendor fulfillment, tracking numbers, and receipt history.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-subtle overflow-hidden"
              >
                {/* Order Header */}
                <div className="bg-slate-50/80 border-b border-slate-200/70 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                        Order Placed
                      </span>
                      <span className="font-semibold text-slate-900">{order.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                        Total Amount
                      </span>
                      <span className="font-bold text-slate-900 font-mono text-sm">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-semibold">
                        Ship To
                      </span>
                      <span className="font-semibold text-slate-900">{order.customerName}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <OrderStatusBadge status={order.status} />
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors shadow-2xs flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 sm:p-6 divide-y divide-slate-100">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <img
                          src={item.image}
                          alt={item.productTitle}
                          className="w-14 h-14 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200"
                        />
                        <div className="min-w-0">
                          <Link
                            to={`/product/${item.productId}`}
                            className="font-bold text-slate-900 hover:text-blue-600 line-clamp-1 text-xs sm:text-sm"
                          >
                            {item.productTitle}
                          </Link>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Sold by <span className="font-medium text-slate-700">{item.storeName}</span> • Qty: {item.quantity}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                        <Link
                          to={`/product/${item.productId}`}
                          className="block text-[11px] text-blue-600 hover:underline mt-0.5"
                        >
                          Buy Again
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tracking Footer */}
                {order.trackingNumber && (
                  <div className="px-4 sm:px-6 py-3 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <Truck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Carrier Tracking: <strong className="font-mono text-slate-800">{order.trackingNumber}</strong></span>
                    </span>
                    <span className="text-[11px] text-blue-600 font-semibold cursor-pointer hover:underline">
                      Track Package →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-16 text-center max-w-md mx-auto shadow-subtle">
            <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">No Orders Yet</h3>
            <p className="text-xs text-slate-500 mt-1">
              You haven't placed any orders yet. Browse our multi-vendor collections to get started!
            </p>
            <Link
              to="/marketplace"
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 shadow-2xl animate-in zoom-in-95 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs text-slate-400 font-mono">Invoice / Order</span>
                <h3 className="text-lg font-bold text-slate-900">{selectedOrder.id}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    Shipping Address
                  </span>
                  <p className="font-semibold text-slate-900">{selectedOrder.shippingAddress.fullName}</p>
                  <p className="text-slate-600">{selectedOrder.shippingAddress.street}</p>
                  <p className="text-slate-600">
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.postalCode}
                  </p>
                  <p className="text-slate-600">{selectedOrder.shippingAddress.country}</p>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    Fulfillment Status
                  </span>
                  <OrderStatusBadge status={selectedOrder.status} />
                  <p className="text-slate-500 mt-2 text-[11px]">
                    Date: {selectedOrder.date}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-2">
                  Line Items ({selectedOrder.items.length})
                </span>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl p-3">
                  {selectedOrder.items.map((it, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-slate-900 truncate">{it.productTitle}</p>
                        <p className="text-[11px] text-slate-500">{it.storeName} • Qty {it.quantity}</p>
                      </div>
                      <span className="font-mono font-bold text-slate-900">
                        ${(it.price * it.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-right">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-mono">${selectedOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="font-mono">${selectedOrder.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Estimated Tax</span>
                  <span className="font-mono">${selectedOrder.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-slate-900 pt-1 border-t border-slate-200">
                  <span>Order Total</span>
                  <span className="font-mono text-base">${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
              >
                Close Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};
