'use client';

import {
  BarChart3,
  Bot,
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Eye,
  FileText,
  FlaskConical,
  Globe,
  Handshake,
  Heart,
  Hospital,
  Key,
  Lightbulb,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Monitor,
  Palette,
  PenLine,
  Phone,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Smile,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Video,
  Wallet,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type IconName =
  | 'bot'
  | 'target'
  | 'flask'
  | 'message'
  | 'pen'
  | 'bar-chart'
  | 'search'
  | 'mail'
  | 'cart'
  | 'trending-up'
  | 'monitor'
  | 'globe'
  | 'smartphone'
  | 'megaphone'
  | 'wrench'
  | 'trophy'
  | 'briefcase'
  | 'settings'
  | 'wallet'
  | 'lightbulb'
  | 'clock'
  | 'phone'
  | 'hammer'
  | 'handshake'
  | 'calendar'
  | 'rocket'
  | 'smile'
  | 'zap'
  | 'eye'
  | 'map-pin'
  | 'hospital'
  | 'clipboard'
  | 'link'
  | 'key'
  | 'file-text'
  | 'star'
  | 'heart'
  | 'video'
  | 'palette'
  | 'check'
  | 'planning';

const iconMap: Record<IconName, LucideIcon> = {
  bot: Bot,
  target: Target,
  flask: FlaskConical,
  message: MessageCircle,
  pen: PenLine,
  'bar-chart': BarChart3,
  search: Search,
  mail: Mail,
  cart: ShoppingCart,
  'trending-up': TrendingUp,
  monitor: Monitor,
  globe: Globe,
  smartphone: Smartphone,
  megaphone: Megaphone,
  wrench: Wrench,
  trophy: Trophy,
  briefcase: Briefcase,
  settings: Settings,
  wallet: Wallet,
  lightbulb: Lightbulb,
  clock: Clock,
  phone: Phone,
  hammer: Wrench,
  handshake: Handshake,
  calendar: Calendar,
  rocket: Rocket,
  smile: Smile,
  zap: Zap,
  eye: Eye,
  'map-pin': MapPin,
  hospital: Hospital,
  clipboard: ClipboardList,
  link: Link2,
  key: Key,
  'file-text': FileText,
  star: Star,
  heart: Heart,
  video: Video,
  palette: Palette,
  check: CheckCircle2,
  planning: ClipboardCheck,
};

interface ServiceIconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function ServiceIcon({
  name,
  size = 24,
  className = 'text-[#E31E24]',
  strokeWidth = 1.75,
}: ServiceIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} strokeWidth={strokeWidth} aria-hidden />;
}

interface IconBoxProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function IconBox({ name, size = 20, className = '' }: IconBoxProps) {
  return (
    <div
      className={`w-10 h-10 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <ServiceIcon name={name} size={size} />
    </div>
  );
}