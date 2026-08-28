import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const FAKE_PURCHASES = [
  { name: 'Oluwaseun', location: 'Lagos, Nigeria', item: '30-Day Guide' },
  { name: 'Chima', location: 'Abuja, Nigeria', item: 'Remote Career System' },
  { name: 'Sarah', location: 'Nairobi, Kenya', item: '30-Day Guide' },
  { name: 'David', location: 'London, UK', item: 'Remote Career System' },
  { name: 'Amina', location: 'Accra, Ghana', item: '30-Day Guide' },
  { name: 'Someone', location: 'Texas, USA', item: 'Remote Career System' },
  { name: 'Tunde', location: 'Ibadan, Nigeria', item: '30-Day Guide' },
  { name: 'Grace', location: 'Kigali, Rwanda', item: 'Remote Career System' },
  { name: 'Emmanuel', location: 'Port Harcourt, Nigeria', item: '30-Day Guide' },
  { name: 'Joy', location: 'Johannesburg, SA', item: 'Remote Career System' },
];

export default function RecentPurchases() {
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = FAKE_PURCHASES[Math.floor(Math.random() * FAKE_PURCHASES.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    // Then show a popup every 12 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[320px] w-[calc(100%-2rem)] bg-white border border-emerald-100 shadow-xl rounded-xl p-4 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 mt-0.5">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div className="flex-1 pr-4">
          <p className="text-sm text-slate-800 leading-snug">
            <span className="font-bold">{currentPurchase.name}</span> from <span className="font-semibold">{currentPurchase.location}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Purchased the <span className="text-amber-600 font-semibold">{currentPurchase.item}</span>
          </p>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Just now</p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
