import { MenuButton } from './MenuButton';

interface LeftSectionProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const LeftSection = ({ isOpen, toggleMenu }: LeftSectionProps) => {
  return (
    <div className="flex items-center gap-4 fixed left-0 pl-8">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
}; 