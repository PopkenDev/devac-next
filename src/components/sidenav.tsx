'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faGraduationCap,
  faChartLine,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';
import { SidenavItem } from './sidenav-item';

const sideNav = [
  {
    label: 'Home',
    subText: 'Home sweet home',
    href: '/dashboard',
    icon: (
      <FontAwesomeIcon
        icon={faHouseChimney}
        className="h-6 w-6 transition-none"
      />
    ),
  },
  {
    label: 'Course hub',
    subText: 'Explore courses',
    href: '',
    icon: (
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="h-6 w-6 transition-none"
      />
    ),
  },
  {
    label: 'Take a quiz',
    subText: 'Test your knowledge',
    href: '',
    icon: (
      <FontAwesomeIcon
        icon={faFileSignature}
        className="h-6 w-6 transition-none"
      />
    ),
  },
  {
    label: 'Leaderboard',
    subText: 'Check your rank',
    href: '/leaderboard',
    icon: (
      <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 transition-none" />
    ),
  },
];

interface SideNavProps {
  isExpanded: boolean;
  closeMenu: () => void;
}

export const SideNav = ({ isExpanded, closeMenu }: SideNavProps) => {
  return (
    <nav className="flex-1">
      <ul>
        {sideNav.map((item, index) => (
          <SidenavItem
            label={item.label}
            index={index}
            icon={item.icon}
            href={item.href}
            isExpanded={isExpanded}
            subText={item.subText}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
    </nav>
  );
};
