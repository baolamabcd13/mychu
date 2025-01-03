export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

export interface MenuState {
  isOpen: boolean;
  activeSubmenu: string | null;
  hoveredItem: string | null;
} 