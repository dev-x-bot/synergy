// Central icon map (lucide-react) so iconography stays consistent site-wide.
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  ListChecks,
  Globe2,
  Users,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Cloud,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export {
  ChevronDown,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "project-services": ListChecks,
  "captive-offshoring": Globe2,
  "staffing-services": Users,
  "ai-ml": Cpu,
  "digital-transformation": TrendingUp,
  "cyber-security": ShieldCheck,
  "cloud-enablement": Cloud,
  "emerging-talent": GraduationCap,
};

export const industryIcons: Record<string, LucideIcon> = {
  "banking-capital-markets": Landmark,
  healthcare: HeartPulse,
  retail: ShoppingBag,
};

// Resolve any service/industry slug to its icon (services first, then industries).
export function iconForSlug(slug: string): LucideIcon {
  return serviceIcons[slug] || industryIcons[slug] || ListChecks;
}
