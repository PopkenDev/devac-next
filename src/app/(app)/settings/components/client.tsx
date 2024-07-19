'use client';

import { Tabs } from '@/components/ui/tabs';
import {
  faCreditCard,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { AccountSettingsForm } from './account-settings-form';
import { ProfileSettingsForm } from './profile-settings-form';

const tabs = [
  {
    label: 'Profile',
    icon: <FontAwesomeIcon icon={faUser} className="mr-2 transition-none" />,
    component: <ProfileSettingsForm />,
  },
  {
    label: 'Account settings',
    icon: <FontAwesomeIcon icon={faGear} className="mr-2 transition-none" />,
    component: <AccountSettingsForm />,
  },
  {
    label: 'Billing information',
    icon: (
      <FontAwesomeIcon icon={faCreditCard} className="mr-2 transition-none" />
    ),
    component: <AccountSettingsForm />,
  },
];

export const SettingsPageClient = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabComponent = tabs[activeTab].component;

  return (
    <>
      <Tabs data={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTabComponent}
      {/* {activeTab === 0 && tabs[0].component}
      {activeTab === 1 && tabs[1].component}
      {activeTab === 2 && tabs[2].component} */}
    </>
  );
};
