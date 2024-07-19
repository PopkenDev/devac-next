import { signOut } from 'next-auth/react';

export const Logout = () => {
  const logout = () => {
    signOut({ callbackUrl: '/login' });
  };
  return (
    <span onClick={logout} className="w-full text-left">
      Logout
    </span>
  );
};
