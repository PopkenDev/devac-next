'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBookOpen,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import { SideNav } from './sidenav';
import { useState } from 'react';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SidenavItem } from './sidenav-item';

export const SideMenu = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-80">
      <div
        className={`${expanded ? 'w-full' : 'w-14'} relative flex h-full flex-col border-r border-white/5 bg-[#131313] transition-all duration-300 ease-in-out`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className={`absolute ${expanded ? 'translate-x-8' : 'translate-x-8'} right-0 top-2 transition-transform duration-300 ease-in-out`}
        >
          {expanded ? (
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className="text-black transition-none dark:text-gray-50"
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="text-black transition-none dark:text-gray-50"
            />
          )}
        </button>
        <SideNav isExpanded={expanded} closeMenu={() => setExpanded(false)} />
        <div className="w-full">
          <ul>
            <SidenavItem
              closeMenu={() => setExpanded(false)}
              label="Docs"
              icon={
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
                />
              }
              href="/docs"
              isExpanded={expanded}
              subText="Learn more about the platform"
            />
            <SidenavItem
              closeMenu={() => setExpanded(false)}
              label="Discord"
              icon={
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
                />
              }
              href="/"
              isExpanded={expanded}
              subText="Join our community"
            />
            <SidenavItem
              closeMenu={() => setExpanded(false)}
              label="Settings"
              icon={
                <FontAwesomeIcon
                  icon={faGears}
                  className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
                />
              }
              href="/settings"
              isExpanded={expanded}
              subText="Manage your account settings"
            />
          </ul>
        </div>
      </div>
    </aside>
  );
};
