// Blog data interfaces

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  summary: string;
  createdAt: any; // Firestore Timestamp
  updatedAt: any; // Firestore Timestamp
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

// We don't need BlogDetailParams anymore as React Router v6 infers types
