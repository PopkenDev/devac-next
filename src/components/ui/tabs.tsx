'use client';

import React, { useState } from 'react';

interface TabsProps {
  data: {
    label: string;
    icon: React.ReactNode;
  }[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const Tabs = ({ data, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="dark-shadow flex gap-x-8 rounded-md bg-[#131313] p-2">
      {data.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`rounded-md px-4 py-1 text-sm font-semibold transition-none ${activeTab === index ? 'bg-orange-600 text-gray-50' : 'text-gray-600'}`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};
