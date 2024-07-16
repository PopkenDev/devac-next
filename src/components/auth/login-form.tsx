"use client";

import { RiUserFill, RiLockFill } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { FormItem } from "@/components/ui/form-item";

export const LoginForm = () => {
  const handleLogin = (event: any) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleLogin} className="w-80 space-y-8">
      <FormItem>
        <FormLabel variant="auth" label="Username" />
        <div className="relative">
          <Input type="text" variant="auth" />
          <RiUserFill className="text-gray-50 w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2" />
        </div>
      </FormItem>
      <FormItem>
        <FormLabel variant="auth" label="Password" />
        <div className="relative">
          <Input type="password" variant="auth" />
          <RiLockFill className="text-gray-50 w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2" />
        </div>
      </FormItem>
      <Button label="Login" variant="auth" type="submit" />
    </form>
  );
};
