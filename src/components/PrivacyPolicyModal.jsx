import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1.5 transition-colors">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">Privacy Policy</h3>
          <p className="text-sm text-slate-500 mt-2 font-medium">Simple, honest, and transparent.</p>
        </div>

        <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            Hey there! We believe in keeping things simple and honest. No confusing legal jargon—just a straightforward explanation of how we handle your information.
          </p>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-lg">1. What We Collect</h4>
            <p>
              When you buy the Remote Career System 30-Day Guide, your purchase is processed securely through <strong>Selar</strong>. We only receive the basic details needed to deliver your PDF guide and bonus toolkits (like your name and email address). Your credit card and payment details stay strictly with Selar and are never visible to us.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-lg">2. How We Communicate</h4>
            <p>
              If you reach out to us via email or WhatsApp for support, we use your contact info solely to answer your questions and help you on your remote job journey. We don't automatically subscribe you to annoying daily newsletters unless you explicitly ask for more content.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-lg">3. The Golden Rule</h4>
            <p>
              We absolutely do not (and never will) sell, rent, or trade your personal data to third parties. We respect your privacy and hate spam just as much as you do.
            </p>
          </div>

          <p className="pt-4 border-t border-slate-100">
            That's it! If you have any questions or concerns about your data, feel free to contact us at <a href="mailto:bogenquiries@gmail.com" className="text-amber-600 font-bold hover:underline">bogenquiries@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
