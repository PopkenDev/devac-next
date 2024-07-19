import { SettingsPageClient } from './components/client';

const SettingsPage = () => {
  return (
    <main className="h-full">
      <div className="flex h-full flex-col items-center py-8">
        <SettingsPageClient />
      </div>
    </main>
  );
};

export default SettingsPage;
