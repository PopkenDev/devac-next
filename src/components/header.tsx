'use client';

import { Input } from '@/components/ui/input';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
        <div className="flex w-1/3 justify-end">
          <button onClick={toggleColorMode}>
            {darkMode ? (
              <RiSunFill className="text-yellow-300" />
            ) : (
              <RiMoonClearFill className="text-gray-50" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
