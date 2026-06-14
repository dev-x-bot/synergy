// Icon registry: maps the string names used in the JSON data to lucide-react
// components, plus an <Icon name="..."/> helper. Keeping icons as string names
// keeps the content data plain/JSON-portable (and CMS-ready).
import {
  Landmark, HeartPulse, ShoppingBag, ListChecks, Globe2, Users, Cpu,
  TrendingUp, ShieldCheck, Cloud, GraduationCap, Workflow, Target, RefreshCw,
  Repeat, Building2, PiggyBank, Briefcase, UserCheck, Zap, Sparkles, GitBranch,
  Bot, PenTool, Layers, Lock, Radar, FileCheck, CloudUpload, Boxes, Wallet,
  BookOpen, Smartphone, Network, BarChart3, ShoppingCart, Truck,
  type LucideIcon, type LucideProps,
} from "lucide-react";

// Icons used directly in JSX (not from data).
export { ChevronDown, ArrowRight, Check, BadgeCheck, MapPin } from "lucide-react";

const REGISTRY: Record<string, LucideIcon> = {
  Landmark, HeartPulse, ShoppingBag, ListChecks, Globe2, Users, Cpu, TrendingUp,
  ShieldCheck, Cloud, GraduationCap, Workflow, Target, RefreshCw, Repeat,
  Building2, PiggyBank, Briefcase, UserCheck, Zap, Sparkles, GitBranch, Bot,
  PenTool, Layers, Lock, Radar, FileCheck, CloudUpload, Boxes, Wallet, BookOpen,
  Smartphone, Network, BarChart3, ShoppingCart, Truck,
};

// Render an icon by its data name. Falls back to a neutral icon if unknown.
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = REGISTRY[name] ?? ListChecks;
  return <Cmp {...props} />;
}
