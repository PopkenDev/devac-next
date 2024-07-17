'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faGraduationCap,
  faChartLine,
  faFileSignature,
  faBookOpen,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const sideNav = [
  {
    label: 'Home',
    subText: 'Home sweet home',
    icon: (
      <FontAwesomeIcon
        icon={faHouseChimney}
        className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
      />
    ),
  },
  {
    label: 'Course hub',
    subText: 'Explore courses',
    icon: (
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
      />
    ),
  },
  {
    label: 'Take a quiz',
    subText: 'Test your knowledge',
    icon: (
      <FontAwesomeIcon
        icon={faFileSignature}
        className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
      />
    ),
  },
  {
    label: 'Leaderboard',
    subText: 'Check your rank',
    icon: (
      <FontAwesomeIcon
        icon={faChartLine}
        className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
      />
    ),
  },
];

export const SideMenu = () => {
  return (
    <aside className="h-[calc(100vh-80px)] w-80">
      <div className="flex h-full flex-col border-r border-white/5 bg-[#131313]">
        <nav className="flex-1">
          <ul>
            {sideNav.map((item, index) => (
              <li
                key={index}
                className="group flex cursor-pointer flex-row items-center gap-x-4 px-2 py-3 text-gray-50 hover:bg-gray-900/20"
              >
                {item.icon}
                <div className="space-y-1">
                  <h3 className="text-base font-bold group-hover:text-orange-500">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-500">{item.subText}</p>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full">
          <Link
            href=""
            className="group flex w-full flex-row items-center gap-x-4 px-2 py-3 text-gray-50 hover:bg-gray-900/20"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
            />
            <div className="space-y-1">
              <h3 className="text-base font-bold group-hover:text-orange-500">
                Docs
              </h3>
              <p className="text-xs text-gray-500">
                Learn more about the platform
              </p>
            </div>
          </Link>
          <Link
            href=""
            className="group flex w-full flex-row items-center gap-x-4 px-2 py-3 text-gray-50 hover:bg-gray-900/20"
          >
            <FontAwesomeIcon
              icon={faGears}
              className="h-6 w-6 text-gray-50 group-hover:text-orange-500"
            />
            <div className="space-y-1">
              <h3 className="text-base font-bold group-hover:text-orange-500">
                Settings
              </h3>
              <p className="text-xs text-gray-500">
                Manage your account settings
              </p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};
