import React from 'react';
import {
  Stethoscope as LucideStethoscope,
  Brain as LucideBrain,
  Phone as LucidePhone,
  Pill as LucidePill,
  ChevronDown as LucideChevronDown,
  Search as LucideSearch,
  ShoppingCart,
  ArrowRight as LucideArrowRight,
  Plus,
  CircleCheckBig,
} from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const ChevronDown = (props: IconProps) => (
  <LucideChevronDown size={12} {...props as any} />
);

export const Search = (props: IconProps) => (
  <LucideSearch size={20} {...props as any} />
);

export const Cart = (props: IconProps) => (
  <ShoppingCart size={24} {...props as any} />
);

export const ArrowRight = (props: IconProps) => (
  <LucideArrowRight size={24} {...props as any} />
);

export const MedicalCross = (props: IconProps) => (
  <Plus size={24} {...props as any} />
);

// Service Icons
export const Stethoscope = ({ color, ...props }: IconProps) => (
  <LucideStethoscope size={32} color={color} {...props as any} />
);

export const Brain = ({ color, ...props }: IconProps) => (
  <LucideBrain size={32} color={color} {...props as any} />
);

export const PhoneMedical = ({ color, ...props }: IconProps) => (
  <LucidePhone size={32} color={color} {...props as any} />
);

export const Pill = ({ color, ...props }: IconProps) => (
  <LucidePill size={32} color={color} {...props as any} />
);

export const CheckCircle = (props: IconProps) => (
  <CircleCheckBig size={16} strokeWidth={3} {...props as any} />
);
