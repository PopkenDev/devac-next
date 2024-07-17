import { SideMenu } from '@/components/side-menu';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideMenu />
      {children}
    </div>
  );
};

export default AppLayout;
