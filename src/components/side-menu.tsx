'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBookOpen,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { SideNav } from './sidenav';
import { useState } from 'react';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

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
        <SideNav isExpanded={expanded} />
        <div className="w-full">
          <Link
            href=""
            className="group flex h-[68px] w-full flex-row items-center gap-x-4 px-4 py-3 text-gray-50 hover:bg-gray-900/20"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
            />
            <div
              className={`space-y-1 ${expanded ? 'w-fit overflow-auto opacity-100' : 'w-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-base font-bold transition-none group-hover:text-orange-500">
                Docs
              </h3>
              <p className="text-xs text-gray-500">
                Learn more about the platform
              </p>
            </div>
          </Link>
          <Link
            href=""
            className="group flex h-[68px] w-full flex-row items-center gap-x-4 px-4 py-3 text-gray-50 transition-none hover:bg-gray-900/20"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
            />
            <div
              className={`space-y-1 ${expanded ? 'w-fit overflow-auto opacity-100' : 'w-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-base font-bold transition-none group-hover:text-orange-500">
                Discord
              </h3>
              <p className="text-xs text-gray-500">Join our community</p>
            </div>
          </Link>
          <Link
            href=""
            className="group flex h-[68px] w-full flex-row items-center gap-x-4 px-4 py-3 text-gray-50 transition-none hover:bg-gray-900/20"
          >
            <FontAwesomeIcon
              icon={faGears}
              className="h-6 w-6 text-gray-50 transition-none group-hover:text-orange-500"
            />
            <div
              className={`space-y-1 ${expanded ? 'w-fit overflow-auto opacity-100' : 'w-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-base font-bold transition-none group-hover:text-orange-500">
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
