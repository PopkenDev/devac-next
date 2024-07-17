import { z, ZodType } from 'zod';

export type RegisterFormData = {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
};
export type LoginFormData = {
  userName: string;
  password: string;
};

export const RegisterSchema: ZodType<RegisterFormData> = z
  .object({
    userName: z
      .string()
      .min(3, 'Username must contain atleast 3 characters')
      .max(20, 'Max 20 characters'),
    email: z
      .string()
      .email({ message: 'Please provide a valid email address' }),
    password: z.string().min(6),
    repeatPassword: z
      .string()
      .min(6, 'Password must contain atleast 6 characters'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export const LoginSchema: ZodType<LoginFormData> = z.object({
  userName: z
    .string()
    .min(3, 'Username must contain atleast 3 characters')
    .max(20, 'Max 20 characters'),
  password: z.string().min(6, 'Password must contain atleast 6 characters'),
});
