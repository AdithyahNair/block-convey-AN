import { Timestamp } from "firebase/firestore";

// Blog data interfaces

export interface BlogPost {
  id: string;
  title: string;
  content?: string; // Keep for backward compatibility
  contentSection?: Section[]; // New field for structured content
  summary: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  author: string;
  tags: string[];
  categories: string[];
  imageUrl: string;
  published: boolean;
  slug: string;
}

// Navigation interfaces
export interface SubItem {
  title: string;
  description: string;
  path?: string;
}

export interface NavItem {
  label: string;
  subitems: SubItem[];
}

export interface NavLinksProps {
  items: NavItem[];
}

export interface NavDropdownProps {
  label: string;
  items: SubItem[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: (path?: string) => void;
}

export interface Section {
  type: "introduction" | "heading" | "paragraph" | "list-item";
  content: string;
  level?: number;
  sectionId?: string | number;
}

// We don't need BlogDetailParams anymore as React Router v6 infers types
