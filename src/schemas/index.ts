import { z, ZodType } from 'zod';

export type FormData = {
  userName: string;
  email?: string;
  password: string;
  repeatPassword?: string;
};

export const RegisterSchema: ZodType<FormData> = z
  .object({
    userName: z
      .string()
      .min(3, 'Username must contain atleast 3 characters')
      .max(20, 'Max 20 characters'),
    email: z.string().email(),
    password: z.string().min(6),
    repeatPassword: z
      .string()
      .min(6, 'Password must contain atleast 6 characters'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export const LoginSchema: ZodType<FormData> = z.object({
  userName: z
    .string({ message: 'Username must contain atleast 3 characters' })
    .min(3)
    .max(20),
  password: z.string().min(6, 'Password must contain atleast 6 characters'),
});
