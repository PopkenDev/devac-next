'use client';

import { useRouter } from 'next/navigation';

interface SidenavItemProps {
  icon: React.ReactNode;
  label: string;
  subText: string;
  isExpanded: boolean;
  href: string;
  closeMenu: () => void;
}

export const SidenavItem = ({
  icon,
  label,
  subText,
  href,
  isExpanded,
  closeMenu,
  ...props
}: SidenavItemProps) => {
  const router = useRouter();
  return (
    <li
      onClick={() => {
        router.push(href), closeMenu();
      }}
      {...props}
      className="group flex h-[68px] cursor-pointer flex-row items-center gap-x-4 px-4 py-3 text-gray-50 hover:bg-gray-900/20"
    >
      <span className="text-gray-50 transition-none group-hover:text-orange-500">
        {icon}
      </span>
      <div
        className={`space-y-1 ${isExpanded ? 'w-fit overflow-auto opacity-100' : 'w-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}
      >
        <h3 className="text-base font-bold group-hover:text-orange-500">
          {label}
        </h3>
        <p className="text-xs text-gray-500">{subText}</p>
      </div>
    </li>
  );
};
