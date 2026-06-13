// Central content model for the Synergy marketing site.
// Drafted from the reference site; refine copy here without touching pages.

export type Item = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  points: { h: string; p: string }[];
};

export const services: Item[] = [
  {
    slug: "project-services",
    title: "Project Services",
    tagline: "Outcome-owned delivery, end to end.",
    intro:
      "When you need a result rather than a resource, our project teams take full ownership — scoping, building and shipping against clear milestones and SLAs.",
    points: [
      { h: "Managed delivery", p: "Dedicated pods that own scope, timeline and quality from kickoff to launch." },
      { h: "Fixed-scope builds", p: "Predictable cost and milestones for well-defined initiatives." },
      { h: "Modernization", p: "Re-platforming and re-architecting legacy systems with zero-drama cutovers." },
    ],
  },
  {
    slug: "captive-offshoring",
    title: "Captive Offshoring",
    tagline: "Your own offshore team, stood up fast.",
    intro:
      "Build a dedicated global capability center without the overhead. We assemble, house and operate your offshore team while you keep full control.",
    points: [
      { h: "Build-operate-transfer", p: "Stand up a team now, take ownership on your timeline." },
      { h: "Talent + infrastructure", p: "Hiring, workspace, security and compliance handled end to end." },
      { h: "Cost efficiency", p: "Global delivery economics with local accountability." },
    ],
  },
  {
    slug: "staffing-services",
    title: "Staffing Services",
    tagline: "The right specialist, exactly when you need them.",
    intro:
      "From a single hard-to-find expert to a full squad, we place screened, role-ready talent that plugs straight into your team and roadmap.",
    points: [
      { h: "Contract & contract-to-hire", p: "Flexible engagement models that scale up or down with demand." },
      { h: "Direct placement", p: "Permanent hires sourced, vetted and matched to your culture." },
      { h: "Rapid ramp", p: "Pre-screened benches mean shortlists in days, not weeks." },
    ],
  },
  {
    slug: "ai-ml",
    title: "AI / ML",
    tagline: "Turn data into decisions.",
    intro:
      "Production-grade machine learning, generative AI and intelligent automation — built to ship, monitor and scale, not just to demo.",
    points: [
      { h: "Generative AI", p: "RAG, copilots and agents grounded in your data, with guardrails." },
      { h: "ML engineering", p: "Pipelines, MLOps and monitoring that keep models healthy in production." },
      { h: "Automation", p: "Document, decision and workflow automation that compounds over time." },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    tagline: "Reinvent products and operations around people.",
    intro:
      "End-to-end reinvention of how you build, sell and serve — designed around the people who use your products every day.",
    points: [
      { h: "Experience design", p: "Research-led product and service design that moves real metrics." },
      { h: "Process reinvention", p: "Streamline operations with automation and unified data." },
      { h: "Platform modernization", p: "Composable, API-first foundations built to evolve." },
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    tagline: "Protect what matters most.",
    intro:
      "Zero-trust architecture, threat detection and governance that protect your customers, your data and your reputation.",
    points: [
      { h: "Zero-trust architecture", p: "Identity-first security designed for distributed teams." },
      { h: "Threat detection & response", p: "Continuous monitoring with rapid containment." },
      { h: "Governance & compliance", p: "Frameworks and controls mapped to your obligations." },
    ],
  },
  {
    slug: "cloud-enablement",
    title: "Cloud Enablement",
    tagline: "Faster, leaner and genuinely yours.",
    intro:
      "Migration, modernization and FinOps that make the cloud work for you — resilient, cost-aware and ready to scale.",
    points: [
      { h: "Migration", p: "Pragmatic, low-risk moves to AWS, Azure and GCP." },
      { h: "Modernization", p: "Containers, serverless and IaC for speed and resilience." },
      { h: "FinOps", p: "Visibility and controls that keep cloud spend honest." },
    ],
  },
  {
    slug: "emerging-talent",
    title: "Emerging Talent",
    tagline: "Trained, screened, ready from day one.",
    intro:
      "A pipeline of mentored specialists — assessed and upskilled on modern stacks — ready to plug into your roadmap immediately.",
    points: [
      { h: "Academy model", p: "Role-specific training aligned to your tech stack." },
      { h: "Screened & mentored", p: "Assessed for skill and attitude, supported as they ramp." },
      { h: "Build your bench", p: "A sustainable pipeline for long-term capacity." },
    ],
  },
];

export const industries: Item[] = [
  {
    slug: "banking-capital-markets",
    title: "Banking & Capital Markets",
    tagline: "Resilient, compliant platforms for global capital.",
    intro:
      "We build secure, regulated platforms for the institutions that keep capital moving — from core modernization to real-time risk.",
    points: [
      { h: "Core modernization", p: "Migrate and modernize core systems without disrupting operations." },
      { h: "Risk & compliance", p: "Real-time controls and reporting built for scrutiny." },
      { h: "Digital banking", p: "Customer experiences that are fast, secure and trusted." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Technology that improves outcomes.",
    intro:
      "Secure, interoperable systems that help providers and payers deliver better care while protecting sensitive data.",
    points: [
      { h: "Interoperability", p: "Connected data across systems and standards (HL7/FHIR)." },
      { h: "Patient experience", p: "Digital front doors that simplify access to care." },
      { h: "Data & analytics", p: "Insight that supports better, faster clinical decisions." },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Personalized commerce at scale.",
    intro:
      "Unified data and modern commerce platforms that lift conversion and re-imagine the customer journey across channels.",
    points: [
      { h: "Unified commerce", p: "Seamless experiences across web, app and store." },
      { h: "Personalization", p: "Data-driven journeys that grow basket and loyalty." },
      { h: "Supply chain", p: "Visibility and automation from warehouse to doorstep." },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shipping-devops-automation",
    tag: "DevOps",
    title: "Powering shipping operations through DevOps automation",
    summary:
      "Automated pipelines cut release cycles from weeks to hours for a global shipping operator.",
  },
  {
    slug: "retail-personalized-shopping",
    tag: "Digital Transformation",
    title: "Revolutionizing personalized shopping through digital transformation",
    summary:
      "A unified data layer lifted conversion and re-imagined the journey for a national retailer.",
  },
  {
    slug: "banking-cloud-migration",
    tag: "Banking",
    title: "Streamlining operations through cloud migration",
    summary:
      "A large bank moved core workflows to the cloud, slashing cost and unlocking new agility.",
  },
];

export const offices = [
  { city: "Austin, USA", addr: "WeWork Office Spaces, 600 Congress Ave, Austin, TX 78701, United States.", link: "Get directions →" },
  { city: "Hyderabad, India", addr: "12th Floor, Western Aqua, Whitefields, Hitech City, Hyderabad 500081.", link: "+91 96493 45789" },
  { city: "Bangalore, India", addr: "World Trade Center, 22nd Floor, 26/1 Dr Rajkumar Rd, Malleshwaram, Bangalore 560055.", link: "+91 96493 45789" },
  { city: "Pune, India", addr: "Regus Tech Center, 5th Floor, Plot 30, Rajiv Gandhi MIDC Rd, Hinjewadi, Pune 411057.", link: "+91 96493 45789" },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((s) => s.slug === slug);
