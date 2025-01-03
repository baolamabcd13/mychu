import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
    { title: "TRANG CHỦ", href: "/" },
    { 
      title: "VỀ VIFON", 
      href: "/about",
      submenu: [
        { title: "Giới thiệu", href: "/about/intro" },
        { title: "Lịch sử", href: "/about/history" },
        { title: "Thành tựu", href: "/about/achievements" },
        { title: "Cộng đồng", href: "/about/community" }
      ]
    },
    { 
      title: "SẢN PHẨM", 
      href: "/products",
      submenu: [
        { title: "Mì", href: "/products/noodles" },
      ]
    },
    { title: "CỬA HÀNG VIFONMART", href: "/vifonmart" },
    { 
      title: "TRUYỀN THÔNG & KHUYẾN MÃI", 
      href: "/news-promotions",
      submenu: [
        { title: "Tin tức & Sự kiện", href: "/news-promotions/news" },
        { title: "Khuyến mãi", href: "/news-promotions/promotions" }
      ]
    },
    { title: "THƯ VIỆN VIFON", href: "/vifon-library" },
    { title: "AN TOÀN THỰC PHẨM", href: "/food-safety" },
    { title: "LIÊN HỆ", href: "/contact" }
  ];
