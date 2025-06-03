import { Request, Response } from 'express';
import * as authService from './auth.service';

export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' });
    }
    const emailExists = await authService.checkEmailExists(email);
    if (emailExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const userId = await authService.createUser(name, email, password);
    return res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    if (!result) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(401).json({ error: (error as Error).message });
  }
}

export async function verifyEmail(req: Request, res: Response): Promise<Response> {
  try {
    const { userId } = req.query;
    if (typeof userId !== 'string') {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }
    await authService.verifyEmail(parsedUserId);
    return res.json({ message: 'Email verified successfully' });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
}

export async function requestPasswordReset(req: Request, res: Response): Promise<Response> {
  try {
    const { email } = req.body;
    const userId = await authService.requestPasswordReset(email);
    if (!userId) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ message: 'Password reset email sent', userId });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
}

export async function resetPassword(req: Request, res: Response): Promise<Response> {
  try {
    const { userId, newPassword } = req.body;
    await authService.resetPassword(userId, newPassword);
    return res.json({ message: 'Password reset successfully' });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
}

export async function getCurrentUser(req: Request, res: Response): Promise<Response> {
  try {
    const userId = (req as any).user?.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = await authService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
