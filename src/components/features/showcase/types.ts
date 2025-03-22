import { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
  frameworks: string[];
}