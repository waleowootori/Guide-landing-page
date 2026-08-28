// ─────────────────────────────────────────────────────────────────────────────
// All static page copy lives here so components stay logic-only.
// Edit text here without touching any component file.
// ─────────────────────────────────────────────────────────────────────────────

/** Nav links — label + anchor id */
export const NAV_LINKS = [
  { label: 'The Guide',          id: 'story'      },
  { label: "What's Inside",      id: 'curriculum' },
  { label: 'Success Stories',    id: 'proof'      },
  { label: 'FAQ',                id: 'faq'        },
]

/** 5-point critique cards */
export const CRITIQUE_CARDS = [
  {
    n:     '01',
    title: 'Flaw: Generic "LinkedIn Tips" Without Location Nuance',
    flaw:  'Telling Africans to just "optimize LinkedIn" without solving geo-restrictions, international tax compliance (W-8BEN), and timezone alignment.',
    fix:   'Direct frameworks to position yourself as an offshore expert, overcome African IP filtering, and invoice US/UK firms legally.',
    span:  '',
  },
  {
    n:     '02',
    title: 'Flaw: Outdated Dead Job Links & Scams',
    flaw:  'Copy-pasted lists of dead aggregator links where 10,000 bots apply within 30 minutes, drowning human candidates.',
    fix:   'Curated verifiable, live hiring channels and exact search strings to spot unadvertised stealth roles before public posting.',
    span:  '',
  },
  {
    n:     '03',
    title: 'Flaw: No Actionable Day-by-Day Cadence',
    flaw:  '80 pages of continuous reading with zero daily micro-milestones, causing buyer overwhelm and zero implementation.',
    fix:   'A strict 30-Day Sprint Calendar with fill-in spreadsheet checklists that dictate exactly what to do from 9 AM to 11 AM daily.',
    span:  '',
  },
  {
    n:     '04',
    title: 'Flaw: Weak Scripting for Direct Outreach',
    flaw:  '"Dear Hiring Manager, kindly review my CV" templates that get flagged as spam in founder inboxes.',
    fix:   'Value-first Loom audit scripts and custom DM templates with a verified 34% response rate from Seed/Series-A CEOs.',
    span:  '',
  },
  {
    n:     '05',
    title: 'Flaw: Overwhelming Information Without Support',
    flaw:  'Most guides drop a 100-page PDF in your lap and leave you to figure it out alone, leading to frustration and zero results.',
    fix:   'A complete ecosystem of actionable templates, real-world examples, and proven trackers so you have everything you need to execute immediately.',
    span:  'md:col-span-2 lg:col-span-2',
  },
]

/** Pain-point cards */
export const PAIN_CARDS = [
  {
    iconClass: 'bg-red-500/10 border border-red-500/30 text-red-400',
    icon:      'XCircle',
    title:     'You Apply... Then Crickets',
    body:      'Sending hundreds of CVs into the online void with zero feedback, wondering if a human even opened your attachment.',
  },
  {
    iconClass: 'bg-amber-500/10 border border-amber-500/30 text-amber-400',
    icon:      'Hourglass',
    title:     'Ghosted After Round 1',
    body:      'Waiting weeks for an email that never comes, making you question your competence and lowering your salary expectations.',
  },
  {
    iconClass: 'bg-blue-500/10 border border-blue-500/30 text-blue-400',
    icon:      'HelpCircle',
    title:     "No Idea What's Broken",
    body:      'You have the design, writing, coding, or virtual assistant skills, but your international positioning is fundamentally sabotaging you.',
  },
]

/** Curriculum pillar cards */
export const CURRICULUM_CARDS = [
  {
    icon:  'FileText',
    title: 'ATS CV Optimization',
    body:  'Beat the robots. Learn how to format and structure your CV so it actually reaches human eyes and scores 90%+ on candidate scans.',
  },
  {
    icon:  'Linkedin',
    title: 'LinkedIn Mastery',
    body:  'Turn your profile into a lead generator. Attract international recruiters passively while you sleep using optimized search triggers.',
  },
  {
    icon:  'Send',
    title: 'Strategic Networking',
    body:  'Skip the 500-person application line. Learn how to reach out to founders and decision-makers directly and effectively.',
  },
  {
    icon:  'ShieldAlert',
    title: 'Scam & Trap Detection',
    body:  'Protect yourself. Identify fake job listings, predatory remote work scams, and fake check schemes instantly before wasting time.',
  },
]

/** Bonus items */
export const BONUSES = [
  {
    title: 'The STAR Interview Preparation Workbook',
    badge: 'FREE BONUS (Worth ₦15,000)',
    body:  'Master the behavioral questions foreign interviewers ask. Includes verbatim sample answers for non-native English speakers.',
  },
  {
    title: 'Job Application Tracker (Google Spreadsheet)',
    badge: 'FREE BONUS (Worth ₦10,000)',
    body:  'Stay organized, monitor outreach response rates, track recruiter follow-up dates, and never drop a lead.',
  },
  {
    title: 'Curated Directory of 50+ Verified Global Job Links',
    badge: 'FREE BONUS (Worth ₦20,000)',
    body:  'Direct access to vetted platforms and hiring communities that actively recruit African developers, designers, VAs, writers, and ops talent.',
  },
]

/** Testimonials */
export const TESTIMONIALS = [
  {
    quote: '"I had applied to 90+ roles with zero calls. The Founder\'s ATS restructuring tip in Day 4 changed everything. Within 2 weeks, I landed a $2,200/mo role as a Customer Success Specialist for an Austin-based software company!"',
    name:  'Emeka O.',
    loc:   'Lagos, Nigeria • Customer Success',
    img:   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote: '"The verified links alone paid for this guide 100x over. Most sites you find on Google are full of ghost jobs. The Founder\'s vetted repository got me direct contact with the hiring lead in Berlin."',
    name:  'Tunde A.',
    loc:   'Abuja, Nigeria • Product Designer',
    img:   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    quote: '"The Interview Workbook gave me the exact confidence I needed. I always froze when asked about salary expectations. Her negotiation script got me an extra $400/month on my offer."',
    name:  'Blessing K.',
    loc:   'Nairobi, Kenya • Executive VA',
    img:   'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
  },
]

/** Pricing line items */
export const PRICE_ITEMS = [
  { label: '30-Day Remote Career Guide (PDF)',        original: '₦20,000' },
  { label: 'STAR Interview Preparation Workbook',    original: '₦15,000' },
  { label: 'Google Spreadsheet Application Tracker',       original: '₦10,000' },
  { label: '50+ Verified Global Job Links Directory', original: '₦20,000' },
]

/** FAQ accordion items */
export const FAQ_ITEMS = [
  {
    q: 'Is this suitable for beginners with zero remote experience?',
    a: 'Yes! Whether you are transitioning to remote work for the first time or looking to upgrade your current local role to international pay, the guide walks you step-by-step from foundational resume building to live negotiation.',
  },
  {
    q: 'How do I receive access after payment?',
    a: 'Immediately upon completing payment, you will be redirected to your private download dashboard and also receive an instant confirmation email with direct download links to the PDF guide and spreadsheet templates.',
  },
  {
    q: 'Is this specific to tech and software engineering only?',
    a: 'No. The strategies apply to virtual assistants, customer support, sales development, digital marketing, graphic design, content writing, data entry, project management, and software engineers.',
  },
  {
    q: 'Will this work specifically for Nigerians and other African nationals?',
    a: 'Yes, that is the exact purpose the Founder built this guide. It addresses payment processing (how to receive USD via Geegpay/Grey/Wise), handling US/UK timezone differences, and bypassing geo-blocked filters.',
  },
]

/** Footer link groups */
export const FOOTER_LINKS = [
  { label: 'About the Founder', id: 'story'      },
  { label: 'Guide Curriculum',  id: 'curriculum' },
  { label: 'Support & FAQ',     id: 'faq'        },
  { label: 'Privacy Policy',    id: '#'          },
]
