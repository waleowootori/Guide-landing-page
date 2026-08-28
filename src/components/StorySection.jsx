import { ShieldCheck, ChevronRight } from "lucide-react";
import founderImg from "../public/Founder.jpeg";

/**
 * Section id="story"
 * The Founder's narrative — emotional connection section.
 */
export default function StorySection() {
  return (
    <section
      id="story"
      className="py-20 bg-[#F5EFE6] border-b border-[#E8DFC8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D6C0] shadow-xl relative">
          {/* Author header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-slate-100">
            <div className="relative">
              <img
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-amber-400 shadow-md"
                src={founderImg}
                alt="The Founder"
              />
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 bg-emerald-500 w-5 h-5 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md">
                Founder Story
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1.5">
                "I Sent Over 310 Job Applications and Got Rejected by Every
                Single One..."
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-semibold">
                Remote Talent Strategist
              </p>
            </div>
          </div>

          {/* Story body */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-6">
            <p>
              In mid-2022, I was stuck. Fuel prices were surging, inflation was
              eating every kobo of my local salary before it even hit my
              account, and I was spending 4 hours every day in brutal Lagos
              traffic just to commute to an office that drained my soul.
            </p>
            <p>
              I knew remote work was the answer. I saw people on Twitter
              claiming they earned in Dollars and Euros from their bedrooms.{" "}
              <strong>So I did what everyone does:</strong> I created an account
              on Upwork, scrolled LinkedIn for 6 hours a day, and spammed my CV
              to over 300 job ads.
            </p>

            {/* Pull quote */}
            <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl italic font-medium text-amber-900">
              "Result? 300 automated rejection emails or pure silence. I felt
              completely invisible. I thought international companies simply
              didn't want to hire Nigerians."
            </div>

            <p>
              Then I had a breakthrough realization:{" "}
              <em>
                Hiring managers in the US and Europe don't reject Africans
                because of where we live; they reject us because our
                applications look untrusted, generic, and unoptimized for their
                filtering software (ATS).
              </em>
            </p>
            <p>
              I stopped spamming CVs. I completely re-engineered my profile,
              created value-first video pitches, optimized for stealth job
              boards, and developed a systematic 30-day outreach routine. Within
              28 days, I booked 4 high-level interviews and landed a{" "}
              <strong>$2,800/month remote contract</strong> with a US tech
              startup.
            </p>
            <p>
              That single shift changed my family's financial reality forever.
              It eliminated commute stress, sheltered me from local currency
              devaluation, and gave me complete time freedom.
            </p>
            <p className="font-semibold text-slate-900">
              I distilled every single template, cold DM script, interview prep
              question, and <u>verifiable direct link</u> into this 30-Day Guide
              so that you don't waste months making the painful mistakes I made.
            </p>
          </div>

          {/* Footer row */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span className="text-xs font-bold text-slate-700">
                100% Practical • Includes Real Application Links
              </span>
            </div>
            <a
              href="#pricing"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4 flex items-center gap-1">
              Get the exact framework the Founder used{" "}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
