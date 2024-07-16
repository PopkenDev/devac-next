'use client';

import {
  RiUserFill,
  RiLockFill,
  RiEyeFill,
  RiEyeOffFill,
} from '@remixicon/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormLabel } from '@/components/ui/form-label';
import { FormItem } from '@/components/ui/form-item';
import { useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormDate] = useState({
    username: '',
    password: '',
  });
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
        <FormLabel variant="auth" label="Password" />
        <div className="relative">
          <Input type={showPassword ? 'text' : 'password'} variant="auth" />
          <RiLockFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-xs font-semibold text-gray-50"
          >
            {showPassword ? (
              <RiEyeOffFill className="h-4 w-4 text-gray-50" />
            ) : (
              <RiEyeFill className="h-4 w-4 text-gray-50" />
            )}
          </span>
        </div>
      </FormItem>
      <Button label="Login" variant="auth" type="submit" />
    </form>
  );
};
