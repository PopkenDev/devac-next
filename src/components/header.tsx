'use client';

import { Input } from '@/components/ui/input';
import {
  faBell,
  faChevronDown,
  faGear,
  faGears,
  faMagnifyingGlass,
  faPowerOff,
  faRocket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiMoonClearFill, RiMoonFill, RiSunFill } from '@remixicon/react';
import { useState } from 'react';

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
    const appContainer = document.querySelector('.appContainer');
    appContainer?.classList.toggle('dark');
  };
  return (
    <header className="h-20 w-screen border-b border-white/5 bg-[#131313]">
      <div className="flex h-full w-full items-center justify-between px-8">
        <div className="w-1/3">
          <h1 className="text-2xl font-black text-gray-50">
            DevQuest <span className="text-orange-500">Academy</span>
          </h1>
        </div>
        <div className="flex w-1/3 flex-row justify-center">
          <form>
            <div className="relative">
              <Input
                required={false}
                type="text"
                variant="default"
                placeholder="Search"
                className="w-80"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-50"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-white/20 bg-[#131313] p-1 px-2 text-gray-50">
                <p className="text-xs">
                  &#8984; + <span className="text-xs">K</span>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="flex w-1/3 items-center justify-end">
          <div className="flex items-center gap-x-8">
            <button className="text-gray-50 transition-colors duration-300 ease-in-out hover:text-orange-600">
              <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
            </button>
            <button onClick={toggleColorMode}>
              {darkMode ? (
                <RiSunFill className="h-6 w-6 text-yellow-300" />
              ) : (
                <RiMoonClearFill className="h-6 w-6 text-gray-50" />
              )}
            </button>
          </div>
          <div className="mx-8 h-8 w-px bg-white/10"></div>
          <div>
            <button className="group relative h-20">
              <div className="flex items-center gap-x-4">
                <figure className="h-9 w-9 rounded-full bg-white/50">
                  {/* Profile image here */}
                </figure>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="h-2.5 w-2.5 text-gray-50"
                />
              </div>
              <div className="absolute right-0 top-[90%] max-h-0 w-44 overflow-hidden bg-[#131313] transition-all duration-300 ease-in-out group-hover:max-h-96">
                <ul className="border border-white/5 text-left text-sm text-gray-50">
                  <li className="flex items-center gap-x-2 border-b border-white/10 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-orange-600">
                    <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5" />
                    Profile
                  </li>
                  <li className="flex items-center gap-x-2 border-b border-white/10 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-orange-600">
                    <FontAwesomeIcon icon={faGear} className="h-3.5 w-3.5" />
                    Account settings
                  </li>
                  <li className="flex items-center gap-x-2 border-b border-white/10 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-orange-600">
                    <FontAwesomeIcon icon={faRocket} className="h-3.5 w-3.5" />
                    Upgrade to{' '}
                    <span className="font-semibold text-orange-600">Pro</span>
                  </li>
                  <li className="flex items-center gap-x-2 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-orange-600">
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      className="h-3.5 w-3.5"
                    />
                    Log out
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
