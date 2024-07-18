import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { LoginSchema } from '@/schemas';
import { getUserByUsername } from './data/user';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { userName, password } = validatedFields.data;
          const user = await getUserByUsername(userName);

          if (!user || !user.password) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
