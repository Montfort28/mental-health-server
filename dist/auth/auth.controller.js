"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.verifyEmail = verifyEmail;
exports.requestPasswordReset = requestPasswordReset;
exports.resetPassword = resetPassword;
exports.getCurrentUser = getCurrentUser;
const authService = __importStar(require("./auth.service"));
async function register(req, res) {
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
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        if (!result) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        return res.json(result);
    }
    catch (error) {
        return res.status(401).json({ error: error.message });
    }
}
async function verifyEmail(req, res) {
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
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
async function requestPasswordReset(req, res) {
    try {
        const { email } = req.body;
        const userId = await authService.requestPasswordReset(email);
        if (!userId) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json({ message: 'Password reset email sent', userId });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
async function resetPassword(req, res) {
    try {
        const { userId, newPassword } = req.body;
        await authService.resetPassword(userId, newPassword);
        return res.json({ message: 'Password reset successfully' });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
async function getCurrentUser(req, res) {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }
        const user = await authService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json({ user });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
//# sourceMappingURL=auth.controller.js.map