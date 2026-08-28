import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Real Results, Not Theory</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            What African Jobseekers Are Saying
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The exact strategies used by professionals in Lagos, Nairobi, Accra, and Kigali to unlock international contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-sand p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-3">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                "I had applied to 90+ roles with zero calls. The Founder's ATS restructuring tip in Day 4 changed everything. Within 2 weeks, I landed a $2,200/mo role as a Customer Success Specialist for an Austin-based software company!"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200/60">
              <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Emeka O." />
              <div>
                <div className="text-xs font-bold text-slate-900">Emeka O.</div>
                <div className="text-[11px] text-slate-500">Lagos, Nigeria • Customer Success</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-sand p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-3">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                "The verified links alone paid for this guide 100x over. Most sites you find on Google are full of ghost jobs. The Founder's vetted repository got me direct contact with the hiring lead in Berlin."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200/60">
              <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Tunde A." />
              <div>
                <div className="text-xs font-bold text-slate-900">Tunde A.</div>
                <div className="text-[11px] text-slate-500">Abuja, Nigeria • Product Designer</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-sand p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-3">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                "The Interview Workbook gave me the exact confidence I needed. I always froze when asked about salary expectations. Her negotiation script got me an extra $400/month on my offer."
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200/60">
              <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Blessing K." />
              <div>
                <div className="text-xs font-bold text-slate-900">Blessing K.</div>
                <div className="text-[11px] text-slate-500">Nairobi, Kenya • Executive VA</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
