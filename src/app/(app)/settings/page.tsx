import { auth } from '@/auth';
import { SettingsPageClient } from './components/client';

const SettingsPage = async () => {
  const session = await auth();
  return (
    <main className="h-full">
      <div className="flex h-full flex-col items-center py-8">
        <SettingsPageClient user={session?.user} />
      </div>
    </main>
  );
};

export default SettingsPage;
