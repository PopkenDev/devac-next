import { db } from '@/lib/db';

export const getUserByUsername = async (userName: string) => {
  try {
    const user = await db.user.findUnique({ where: { userName } });
    return user;
  } catch (error) {
    return null;
  }
};
