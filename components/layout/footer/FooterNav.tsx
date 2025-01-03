import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
}

export const FooterNav = () => {
  const topLinks: NavLink[] = [
    { href: '/about', label: 'VỀ CHÚNG TÔI' },
    { href: '/products', label: 'SẢN PHẨM' },
    { href: '/news', label: 'TRUYỀN THÔNG & KHUYẾN MÃI' },
  ];

  const bottomLinks: NavLink[] = [
    { href: '/library', label: 'THƯ VIỆN GAOCHU' },
    { href: '/contact', label: 'LIÊN HỆ' },
    { href: '/food-safety', label: 'AN TOÀN THỰC PHẨM' },
  ];

  const NavLinks = ({ links }: NavLinksProps) => (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-center">
      {links.map((link: NavLink, index: number) => (
        <div key={link.href} className="flex items-center">
          <Link 
            href={link.href} 
            className="hover:opacity-80 whitespace-nowrap text-3xl font-extrabold"
          >
            {link.label}
          </Link>
          {index < links.length - 1 && (
            <span className="text-white text-6xl -mt-2 mx-4">•</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <NavLinks links={topLinks} />
      <NavLinks links={bottomLinks} />
    </>
  );
};
