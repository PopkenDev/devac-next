import { Header } from '@/components/header';
import { SideMenu } from '@/components/side-menu';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <div className="appContainer dark flex">
        <SideMenu />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
