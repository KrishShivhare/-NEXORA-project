import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  CreditCard,
  Lock,
  Check,
  Tag
} from 'lucide-react';
import { MainLayout } from '../../components/layout/MainLayout';
import { ConditionBadge } from '../../components/common/Badge';
import { useCart } from '../../context/CartContext';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, shipping, estimatedTax, total } = useCart();
  const { addOrder } = useStore();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Coupon state
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  // Checkout Modal State
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [fullName, setFullName] = useState(user?.name || 'Marcus Vance');
  const [street, setStreet] = useState('742 Evergreen Terrace, Suite 4B');
  const [city, setCity] = useState('Portland');
  const [state, setState] = useState('OR');
  const [postalCode, setPostalCode] = useState('97201');
  const [country, setCountry] = useState('United States');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NEXORA10') {
      const disc = Number((subtotal * 0.10).toFixed(2));
      setDiscount(disc);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try "NEXORA10" for 10% demo discount.');
    }
  };

  const finalTotal = Math.max(0, Number((total - discount).toFixed(2)));

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderItems = items.map((i) => ({
        productId: i.product.id,
        productTitle: i.product.title,
        price: i.product.price,
        quantity: i.quantity,
        image: i.product.images[0],
        storeName: i.product.storeName,
      }));

      addOrder({
        customerName: fullName,
        customerEmail: user?.email || 'marcus.vance@design.co',
        items: orderItems,
        subtotal,
        shipping,
        tax: estimatedTax,
        total: finalTotal,
        status: 'Processing',
        shippingAddress: {
          fullName,
          street,
          city,
          state,
          postalCode,
          country,
        },
      });

      clearCart();
      setIsProcessing(false);
      setIsCheckingOut(false);
      navigate('/orders');
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-5 shadow-subtle">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Your Cart is Empty</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
            Explore hundreds of verified makers and independent stores to find your next favorite piece.
          </p>
          <Link
            to="/marketplace"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/25"
          >
            <span>Explore Marketplace Drops</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review your multi-vendor items before secure checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-subtle divide-y divide-slate-100 overflow-hidden">
              {items.map((item) => {
                const p = item.product;
                return (
                  <div key={p.id} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    {/* Item Details */}
                    <div className="flex items-start gap-4 min-w-0">
                      <Link to={`/product/${p.id}`} className="shrink-0">
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-20 h-20 rounded-2xl object-cover bg-slate-100 border border-slate-200"
                        />
                      </Link>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <ConditionBadge condition={p.condition} detail={p.conditionDetail} size="sm" />
                          <span className="text-[11px] text-slate-400 font-medium truncate">
                            Sold by <strong className="text-slate-700">{p.storeName}</strong>
                          </span>
                        </div>

                        <Link to={`/product/${p.id}`}>
                          <h3 className="font-bold text-slate-900 text-sm hover:text-blue-600 line-clamp-1">
                            {p.title}
                          </h3>
                        </Link>

                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="font-black text-slate-900 font-mono text-base">
                            ${p.price.toLocaleString()}
                          </span>
                          {p.originalPrice && (
                            <span className="text-xs text-slate-400 line-through">
                              ${p.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quantity & Delete Controls */}
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                        <button
                          onClick={() => updateQuantity(p.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg bg-white text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold text-xs shadow-2xs"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-xs text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(p.id, item.quantity + 1)}
                          disabled={item.quantity >= p.stock}
                          className="w-7 h-7 rounded-lg bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 flex items-center justify-center font-bold text-xs shadow-2xs"
                        >
                          +
                        </button>
                      </div>

                      {/* Total for this line */}
                      <div className="text-right min-w-[70px]">
                        <span className="font-bold text-sm text-slate-900 font-mono">
                          ${(p.price * item.quantity).toLocaleString()}
                        </span>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(p.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Utilities */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <Link to="/marketplace" className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                ← Continue Browsing
              </Link>
              <button
                onClick={clearCart}
                className="text-slate-400 hover:text-rose-600 transition-colors"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-subtle">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Order Summary
              </h3>

              {/* Promo code */}
              <div className="py-4 border-b border-slate-100">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon (Try NEXORA10)"
                    disabled={promoApplied}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 uppercase font-mono tracking-wider focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={promoApplied || !promoCode.trim()}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {promoApplied && (
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3" /> 10% Prototype Promo applied!
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-600 mt-1.5">{promoError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="py-4 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-900 font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (10%)</span>
                    <span className="font-mono">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-mono text-slate-900 font-semibold">
                    {shipping === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-mono text-slate-900 font-semibold">${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-slate-900 font-mono">${finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="mt-2 w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Trust Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Guaranteed authentic from verified merchants</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>30-Day Money Back Buyer Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal Flow */}
      {isCheckingOut && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 shadow-2xl my-8 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Finalize Demo Checkout</h3>
                <p className="text-xs text-slate-500">Fast simulation of multi-vendor order placement</p>
              </div>
              <button
                onClick={() => setIsCheckingOut(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Shipping Destination
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 font-medium"
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                        State / Province
                      </label>
                      <input
                        type="text"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 uppercase mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 font-medium font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Payment Simulation
                </h4>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Demo Instant Payment</p>
                      <p className="text-[11px] text-slate-500 font-mono">{cardNumber}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    ${finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>Placing Order...</span>
                  ) : (
                    <>
                      <span>Authorize & Place Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </MainLayout>
  );
};
