'use client';

import { RiUserFill, RiLockFill, RiMailFill } from '@remixicon/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormLabel } from '@/components/ui/form-label';
import { FormItem } from '@/components/ui/form-item';

export const RegisterForm = () => {
  const handleLogin = (event: any) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleLogin} className="w-80 space-y-8">
      <FormItem>
        <FormLabel variant="auth" label="Username" />
        <div className="relative">
          <Input type="text" variant="auth" />
          <RiUserFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
        </div>
      </FormItem>
      <FormItem>
        <FormLabel variant="auth" label="Email" />
        <div className="relative">
          <Input type="email" variant="auth" />
          <RiMailFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
        </div>
      </FormItem>
      <FormItem>
        <FormLabel variant="auth" label="Password" />
        <div className="relative">
          <Input type="password" variant="auth" />
          <RiLockFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
        </div>
      </FormItem>
      <FormItem>
        <FormLabel variant="auth" label="Repeat password" />
        <div className="relative">
          <Input type="password" variant="auth" />
          <RiLockFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
        </div>
      </FormItem>
      <Button label="Login" variant="auth" type="submit" />
    </form>
  );
};