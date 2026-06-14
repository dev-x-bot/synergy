// Central content model for the Synergy marketing site.
// Drafted from the reference site; refine copy here without touching pages.
import {
  Workflow, Target, RefreshCw, Repeat, Building2, PiggyBank, Briefcase,
  UserCheck, Zap, Sparkles, GitBranch, Bot, PenTool, Layers, Lock, Radar,
  FileCheck, CloudUpload, Boxes, Wallet, BookOpen, Users, ShieldCheck,
  Smartphone, Network, HeartPulse, BarChart3, ShoppingCart, Truck,
  type LucideIcon,
} from "lucide-react";

export type Point = { h: string; p: string; icon: LucideIcon };

export type Item = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  points: Point[];
  // services are grouped in the nav as either "service" or "expertise"
  kind?: "service" | "expertise";
};

export const services: Item[] = [
  {
    slug: "project-services",
    kind: "service",
    title: "Project Services",
    tagline: "Outcome-owned delivery, end to end.",
    intro:
      "When you need a result rather than a resource, our project teams take full ownership — scoping, building and shipping against clear milestones and SLAs.",
    points: [
      { h: "Managed delivery", p: "Dedicated pods that own scope, timeline and quality from kickoff to launch.", icon: Workflow },
      { h: "Fixed-scope builds", p: "Predictable cost and milestones for well-defined initiatives.", icon: Target },
      { h: "Modernization", p: "Re-platforming and re-architecting legacy systems with zero-drama cutovers.", icon: RefreshCw },
    ],
  },
  {
    slug: "captive-offshoring",
    kind: "service",
    title: "Captive Offshoring",
    tagline: "Your own offshore team, stood up fast.",
    intro:
      "Build a dedicated global capability center without the overhead. We assemble, house and operate your offshore team while you keep full control.",
    points: [
      { h: "Build-operate-transfer", p: "Stand up a team now, take ownership on your timeline.", icon: Repeat },
      { h: "Talent + infrastructure", p: "Hiring, workspace, security and compliance handled end to end.", icon: Building2 },
      { h: "Cost efficiency", p: "Global delivery economics with local accountability.", icon: PiggyBank },
    ],
  },
  {
    slug: "staffing-services",
    kind: "service",
    title: "Staffing Services",
    tagline: "The right specialist, exactly when you need them.",
    intro:
      "From a single hard-to-find expert to a full squad, we place screened, role-ready talent that plugs straight into your team and roadmap.",
    points: [
      { h: "Contract & contract-to-hire", p: "Flexible engagement models that scale up or down with demand.", icon: Briefcase },
      { h: "Direct placement", p: "Permanent hires sourced, vetted and matched to your culture.", icon: UserCheck },
      { h: "Rapid ramp", p: "Pre-screened benches mean shortlists in days, not weeks.", icon: Zap },
    ],
  },
  {
    slug: "ai-ml",
    kind: "expertise",
    title: "AI / ML",
    tagline: "Turn data into decisions.",
    intro:
      "Production-grade machine learning, generative AI and intelligent automation — built to ship, monitor and scale, not just to demo.",
    points: [
      { h: "Generative AI", p: "RAG, copilots and agents grounded in your data, with guardrails.", icon: Sparkles },
      { h: "ML engineering", p: "Pipelines, MLOps and monitoring that keep models healthy in production.", icon: GitBranch },
      { h: "Automation", p: "Document, decision and workflow automation that compounds over time.", icon: Bot },
    ],
  },
  {
    slug: "digital-transformation",
    kind: "expertise",
    title: "Digital Transformation",
    tagline: "Reinvent products and operations around people.",
    intro:
      "End-to-end reinvention of how you build, sell and serve — designed around the people who use your products every day.",
    points: [
      { h: "Experience design", p: "Research-led product and service design that moves real metrics.", icon: PenTool },
      { h: "Process reinvention", p: "Streamline operations with automation and unified data.", icon: Workflow },
      { h: "Platform modernization", p: "Composable, API-first foundations built to evolve.", icon: Layers },
    ],
  },
  {
    slug: "cyber-security",
    kind: "expertise",
    title: "Cyber Security",
    tagline: "Protect what matters most.",
    intro:
      "Zero-trust architecture, threat detection and governance that protect your customers, your data and your reputation.",
    points: [
      { h: "Zero-trust architecture", p: "Identity-first security designed for distributed teams.", icon: Lock },
      { h: "Threat detection & response", p: "Continuous monitoring with rapid containment.", icon: Radar },
      { h: "Governance & compliance", p: "Frameworks and controls mapped to your obligations.", icon: FileCheck },
    ],
  },
  {
    slug: "cloud-enablement",
    kind: "expertise",
    title: "Cloud Enablement",
    tagline: "Faster, leaner and genuinely yours.",
    intro:
      "Migration, modernization and FinOps that make the cloud work for you — resilient, cost-aware and ready to scale.",
    points: [
      { h: "Migration", p: "Pragmatic, low-risk moves to AWS, Azure and GCP.", icon: CloudUpload },
      { h: "Modernization", p: "Containers, serverless and IaC for speed and resilience.", icon: Boxes },
      { h: "FinOps", p: "Visibility and controls that keep cloud spend honest.", icon: Wallet },
    ],
  },
  {
    slug: "emerging-talent",
    kind: "expertise",
    title: "Emerging Talent",
    tagline: "Trained, screened, ready from day one.",
    intro:
      "A pipeline of mentored specialists — assessed and upskilled on modern stacks — ready to plug into your roadmap immediately.",
    points: [
      { h: "Academy model", p: "Role-specific training aligned to your tech stack.", icon: BookOpen },
      { h: "Screened & mentored", p: "Assessed for skill and attitude, supported as they ramp.", icon: UserCheck },
      { h: "Build your bench", p: "A sustainable pipeline for long-term capacity.", icon: Users },
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
      { h: "Core modernization", p: "Migrate and modernize core systems without disrupting operations.", icon: RefreshCw },
      { h: "Risk & compliance", p: "Real-time controls and reporting built for scrutiny.", icon: ShieldCheck },
      { h: "Digital banking", p: "Customer experiences that are fast, secure and trusted.", icon: Smartphone },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Technology that improves outcomes.",
    intro:
      "Secure, interoperable systems that help providers and payers deliver better care while protecting sensitive data.",
    points: [
      { h: "Interoperability", p: "Connected data across systems and standards (HL7/FHIR).", icon: Network },
      { h: "Patient experience", p: "Digital front doors that simplify access to care.", icon: HeartPulse },
      { h: "Data & analytics", p: "Insight that supports better, faster clinical decisions.", icon: BarChart3 },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Personalized commerce at scale.",
    intro:
      "Unified data and modern commerce platforms that lift conversion and re-imagine the customer journey across channels.",
    points: [
      { h: "Unified commerce", p: "Seamless experiences across web, app and store.", icon: ShoppingCart },
      { h: "Personalization", p: "Data-driven journeys that grow basket and loyalty.", icon: Sparkles },
      { h: "Supply chain", p: "Visibility and automation from warehouse to doorstep.", icon: Truck },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shipping-devops-automation",
    tag: "DevOps",
    title: "Powering shipping operations through DevOps automation",
    summary:
      "Automated pipelines cut release cycles from weeks to hours for a global shipping operator.",
    image: "/site/cases/devops.svg",
  },
  {
    slug: "retail-personalized-shopping",
    tag: "Digital Transformation",
    title: "Revolutionizing personalized shopping through digital transformation",
    summary:
      "A unified data layer lifted conversion and re-imagined the journey for a national retailer.",
    image: "/site/cases/retail.svg",
  },
  {
    slug: "banking-cloud-migration",
    tag: "Banking",
    title: "Streamlining operations through cloud migration",
    summary:
      "A large bank moved core workflows to the cloud, slashing cost and unlocking new agility.",
    image: "/site/cases/banking.svg",
  },
];

export const offices = [
  { city: "Florida, USA", addr: "32499, SAPNA CHIME DR WESLEY CHAPEL, FL, 33545-4999, United States.", link: "Get directions →" },
  { city: "Hyderabad, India", addr: "5th Floor, Western Aqua, Whitefields, Hitech City, Hyderabad 500081.", link: "+91 96449 56789" },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((s) => s.slug === slug);
