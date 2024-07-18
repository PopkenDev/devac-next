'use client';

import {
  RiUserFill,
  RiLockFill,
  RiEyeFill,
  RiEyeOffFill,
  RiGithubFill,
  RiGoogleFill,
} from '@remixicon/react';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormLabel } from '@/components/ui/form-label';
import { FormItem } from '@/components/ui/form-item';
import { LoginFormData, LoginSchema } from '../../schemas';
import { FormErrorMsg } from '../ui/form-error-msg';
import { Login } from '@/actions/login';
import { FormError } from '@/components/ui/form-error';
import { FormSuccess } from '../ui/form-success';

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const githubIcon = <RiGithubFill className="h-6 w-6 text-gray-50" />;
  const googleIcon = <RiGoogleFill className="h-6 w-6 text-gray-50" />;

  const handleLogin = (values: LoginFormData) => {
    startTransition(() => {
      Login(values).then((data) => {
        setError(data?.error);
      });
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="w-80 space-y-8">
        <FormItem>
          <FormLabel variant="auth" label="Username" />
          <div className="relative">
            <Input
              disabled={isPending}
              required={true}
              type="text"
              variant="auth"
              {...register('userName')}
            />
            <RiUserFill className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-50" />
          </div>
          {errors.userName && (
            <FormErrorMsg message={errors.userName.message} />
          )}
        </FormItem>
        <FormItem>
          <FormLabel variant="auth" label="Password" />
          <div className="relative">
            <Input
              disabled={isPending}
              required={true}
              type={showPassword ? 'text' : 'password'}
              variant="auth"
              {...register('password')}
            />
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
          {errors.password && (
            <FormErrorMsg message={errors.password.message} />
          )}
        </FormItem>
        {error && <FormError message="Invalid credentials!" />}
        {success && <FormSuccess message="Email sent!" />}
        <Button
          disabled={isPending}
          label="Login"
          variant="auth"
          type="submit"
        />
      </form>
      <div>
        <p className="my-8 text-center text-sm font-semibold text-gray-50">
          Or continue with
        </p>
      </div>
      <div className="flex gap-x-8">
        <Button
          label="Github"
          variant="default"
          type="button"
          icon={githubIcon}
          className="flex w-full items-center justify-center gap-x-2 bg-[#222] py-2 text-sm font-semibold text-gray-50 outline-none ring-gray-400 transition-all duration-300 ease-in-out hover:bg-gray-900 focus:ring-2"
        />
        <Button
          label="Google"
          variant="default"
          type="button"
          icon={googleIcon}
          className="flex w-full items-center justify-center gap-x-2 bg-red-800 py-2 text-sm font-semibold text-gray-50 outline-none ring-gray-400 transition-all duration-300 ease-in-out hover:bg-red-700 focus:ring-2"
        />
      </div>
    </>
  );
};
