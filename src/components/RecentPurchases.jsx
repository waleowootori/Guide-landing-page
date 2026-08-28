import React, { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

const FAKE_PURCHASES = [
  { name: "Oluwaseun", location: "Lagos, Nigeria", item: "30-Day Guide" },
  { name: "Chima", location: "Abuja, Nigeria", item: "Remote Career System" },
  { name: "Ngozi", location: "Enugu, Nigeria", item: "30-Day Guide" },
  { name: "David", location: "London, UK", item: "Remote Career System" },
  { name: "Amina", location: "Kano, Nigeria", item: "30-Day Guide" },
  { name: "Richard", location: "Texas, USA", item: "Remote Career System" },
  { name: "Tunde", location: "Lagos, Nigeria", item: "30-Day Guide" },
  { name: "Folake", location: "Lagos, Nigeria", item: "Remote Career System" },
  {
    name: "Emmanuel",
    location: "Florida, United States",
    item: "30-Day Guide",
  },
  { name: "Chioma", location: "Owerri, Nigeria", item: "Remote Career System" },
  { name: "Ibrahim", location: "Kaduna, Nigeria", item: "30-Day Guide" },
  { name: "Sarah", location: "Nairobi, Kenya", item: "30-Day Guide" },
  { name: "Ade", location: "Lagos, Nigeria", item: "Remote Career System" },
  { name: "Chinedu", location: "Asaba, Nigeria", item: "30-Day Guide" },
  { name: "David", location: "Texas, USA", item: "Remote Career System" },
  { name: "Nnamdi", location: "Abuja, Nigeria", item: "30-Day Guide" },
  { name: "Aisha", location: "Kumasi, Ghana", item: "Remote Career System" },
  { name: "Olumide", location: "Lagos, Nigeria", item: "30-Day Guide" },
  { name: "Kemi", location: "Akure, Nigeria", item: "Remote Career System" },
  { name: "Emeka", location: "Onitsha, Nigeria", item: "30-Day Guide" },
  { name: "Femi", location: "Lagos, Nigeria", item: "Remote Career System" },
  { name: "Love", location: "Onitsha, Nigeria", item: "30-Day Guide" },
  {
    name: "Efe",
    location: "Benin City, Nigeria",
    item: "Remote Career System",
  },
  {
    name: "Grace",
    location: "Mississippi, United States",
    item: "30-Day Guide",
  },
  { name: "Seun", location: "New Jersey, USA", item: "Remote Career System" },
  { name: "Kelechi", location: "Owerri, Nigeria", item: "30-Day Guide" },
  { name: "Zainab", location: "Abuja, Nigeria", item: "Remote Career System" },
];

export default function RecentPurchases() {
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase =
        FAKE_PURCHASES[Math.floor(Math.random() * FAKE_PURCHASES.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      // Hide after 12 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 12000);
    };

    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 12000);

    // Then show a popup every 15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[280px] w-[calc(100%-2rem)] bg-white border border-emerald-100 shadow-xl rounded-xl p-3 transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}>
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 mt-0.5">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="flex-1 pr-3">
          <p className="text-xs text-slate-800 leading-snug">
            <span className="font-bold">{currentPurchase.name}</span> from{" "}
            <span className="font-semibold">{currentPurchase.location}</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Purchased{" "}
            <span className="text-amber-600 font-semibold">
              {currentPurchase.item}
            </span>
          </p>
          <p className="text-[9px] text-slate-400 mt-0.5 font-medium">
            Just now
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
