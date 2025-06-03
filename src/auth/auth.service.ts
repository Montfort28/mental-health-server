import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const SALT_ROUNDS = 10;

export async function checkEmailExists(email: string): Promise<boolean> {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });
  return !!existingUser;
}

export async function createUser(name: string, email: string, password: string): Promise<number> {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash: hashedPassword,
      name,
      isEmailVerified: false
    }
  });

  return user.id;
}

export async function loginUser(email: string, password: string): Promise<{ token: string; user: any } | null> {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      passwordHash: true,
      name: true,
      isEmailVerified: true
    }
  });

  if (!user) return null;

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) return null;

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  const { passwordHash, ...userWithoutPassword } = user;
  return {
    token,
    user: userWithoutPassword
  };
}

export async function verifyEmail(userId: number): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { isEmailVerified: true }
  });
}

export async function requestPasswordReset(email: string): Promise<number | null> {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  return user?.id || null;
}

export async function resetPassword(userId: number, newPassword: string): Promise<void> {
  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash: hashedPassword }
  });
}

export async function getUserById(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      isEmailVerified: true
    }
  });
  return user;
}
