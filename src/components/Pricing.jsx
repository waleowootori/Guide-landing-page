import React from 'react';
import { Lock, Shield, Zap, Smartphone } from 'lucide-react';

export default function Pricing({ onCheckoutClick }) {
  return (
    <section id="pricing" className="py-20 bg-forest-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-amber-300/40 relative glow-effect">
          <div className="text-center max-w-lg mx-auto pb-8 border-b border-slate-100">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wider mb-2">
              SPECIAL DISCOUNT WINDOW
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900">
              Start Your Remote Journey Today
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Get the complete 30-Day Guide, Verified Link Directory, and all 3 bonus toolkits instantly.
            </p>
          </div>

          <div className="py-6 border-b border-slate-100">
            <div className="flex justify-between items-center text-sm text-slate-500 py-1.5">
              <span>30-Day Remote Career Guide (PDF)</span>
              <span className="line-through">₦20,000</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500 py-1.5">
              <span>STAR Interview Preparation Workbook</span>
              <span className="line-through">₦15,000</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500 py-1.5">
              <span>Google Spreadsheet Application Tracker</span>
              <span className="line-through">₦10,000</span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-500 py-1.5">
              <span>50+ Verified Global Job Links Directory</span>
              <span className="line-through">₦20,000</span>
            </div>

            <div className="flex justify-between items-center text-sm font-semibold text-slate-700 pt-3 border-t border-slate-100 mt-2">
              <span>Total Real Value:</span>
              <span className="text-slate-400 line-through">₦65,000</span>
            </div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
              <span>Regular Price:</span>
              <span className="text-slate-400 line-through">₦19,999</span>
            </div>
          </div>

          {/* Price Display */}
          <div className="pt-6 text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-extrabold tracking-wider uppercase text-slate-600">TODAY'S SPECIAL PRICE:</span>
              <span className="font-display text-4xl sm:text-5xl font-black text-slate-950">₦9,999</span>
            </div>
            <p className="text-xs text-amber-700 font-bold">
              (Equivalent to ~$6.50 USD — One-time payment, lifetime access)
            </p>

            {/* Interactive Checkout Redirection Button */}
            <div className="pt-2 flex flex-col items-center gap-2">
              <a href="https://selar.com/8p774j4z09" className="w-full sm:w-auto min-w-[320px] bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2">
                <span>GET INSTANT ACCESS NOW</span>
                <Lock className="w-5 h-5" />
              </a>
              <span className="text-xs font-bold text-red-500 animate-pulse mt-1">
                Price goes back to ₦19,999 soon!
              </span>
            </div>

            {/* Payment Details & Trust */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600" /> 256-Bit SSL Encrypted
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Instant PDF &amp; Spreadsheet Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-slate-600" /> Card, Transfer &amp; USSD Accepted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
