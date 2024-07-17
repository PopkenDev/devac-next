'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faGraduationCap,
  faChartLine,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';

const sideNav = [
  {
    label: 'Home',
    subText: 'Home sweet home',
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
    icon: (
      <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 transition-none" />
    ),
  },
];

interface SideNavProps {
  isExpanded: boolean;
}

export const SideNav = ({ isExpanded }: SideNavProps) => {
  return (
    <nav className="flex-1">
      <ul>
        {sideNav.map((item, index) => (
          <li
            key={index}
            className="group flex h-[68px] cursor-pointer flex-row items-center gap-x-4 px-4 py-3 text-gray-50 hover:bg-gray-900/20"
          >
            <span className="text-gray-50 transition-none group-hover:text-orange-500">
              {item.icon}
            </span>
            <div
              className={`space-y-1 ${isExpanded ? 'w-fit overflow-auto opacity-100' : 'w-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-base font-bold group-hover:text-orange-500">
                {item.label}
              </h3>
              <p className="text-xs text-gray-500">{item.subText}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
