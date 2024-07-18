import { auth } from '@/auth';

const DashboardPage = async () => {
  const session = await auth();
  return (
    <main className="h-full">
      <div className="flex h-full flex-col items-center justify-center bg-white dark:bg-black">
        <h1 className="text-black dark:text-gray-50">DashboardPage</h1>
        <p className="text-black dark:text-gray-50">
          Session: {JSON.stringify(session)}
        </p>
      </div>
    </main>
  );
};

export default DashboardPage;
