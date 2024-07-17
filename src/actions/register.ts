'use server';

import { z } from 'zod';
import bcrypt from 'bcryptjs';

import { RegisterSchema, RegisterFormData } from '@/schemas';
import { db } from '@/lib/db';

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  const { userName, email, password } =
    validatedFields.data as RegisterFormData;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
  });

  const existingUserName = await db.user.findUnique({
    where: {
      userName,
    },
  });
  //   Check if the email is already in use
  if (existingEmail) {
    return { error: 'Email already in use!' };
  }
  //   Check if the username is already in use
  if (existingUserName) {
    return { error: 'Username already in use!' };
  }

  await db.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
    },
  });

  if (!validatedFields.success) {
    throw new Error('Invalid fields');
  }
};
