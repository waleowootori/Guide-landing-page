import React from "react";

export default function Footer({ onPrivacyClick }) {
  return (
    <footer className="bg-forest-900 text-emerald-100/70 text-xs py-12 border-t border-forest-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-bold text-base text-amber-400">Remote Career System</div>
            <p className="text-slate-400 mt-1">© 2026 Remote Career System by the Founder. All rights reserved. Built for the modern professional. Built by BOG Web and Development.</p>
            <p className="text-slate-400 mt-1">
              <a href="mailto:bogenquiries@gmail.com" className="text-amber-400 hover:underline">Contact Us</a>
            </p>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <a href="#story" className="hover:text-amber-400 transition-colors">
              About the Founder
            </a>
            <a href="#curriculum" className="hover:text-amber-400 transition-colors">
              Guide Curriculum
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              Support &amp; FAQ
            </a>
            <button onClick={onPrivacyClick} className="hover:text-amber-400 transition-colors text-left">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
