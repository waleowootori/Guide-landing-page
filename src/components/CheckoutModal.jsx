import React, { useState } from 'react';
import { X, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose }) {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      alert('Thank you! You are now being forwarded to complete your payment of ₦9,999. Your 30-day guide and toolkits are queued for instant email download.');
      onClose();
      setIsSuccess(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-slate-900">Instant Order Checkout</h3>
          <p className="text-xs text-slate-500">30-Day Guide to Secure a Remote Job + All Bonuses</p>
        </div>

        {!isSuccess ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
              <input required type="text" placeholder="e.g. Samuel Adeleke" className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Best Email (For PDF Delivery)</label>
              <input required type="email" placeholder="samuel@gmail.com" className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2">
                <span>Pay ₦9,999 &amp; Download Instantly</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400">
              🔒 Protected by Paystack/Flutterwave standard encryption.
            </p>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-lg text-slate-900">Redirecting to Secure Payment...</h4>
            <p className="text-xs text-slate-500">Preparing your personalized bundle download link and spreadsheet templates.</p>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-amber-500 h-full w-2/3 animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
