import { Router } from 'express';
import {
    register,
    login,
    verifyEmail,
    requestPasswordReset,
    resetPassword,
    getCurrentUser
} from './auth.controller';
import { authenticateJWT } from './auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verifyEmail);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.get('/me', authenticateJWT, getCurrentUser);

export { router };
