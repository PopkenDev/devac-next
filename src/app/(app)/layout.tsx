import { Header } from '@/components/header';
import { SideMenu } from '@/components/side-menu';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <div className="appContainer dark flex">
        <SideMenu />
        <div className="h-[calc(100vh-80px)] w-screen overflow-y-scroll bg-[hsl(0,0%,75%)] dark:bg-[hsl(240,26%,7%)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
