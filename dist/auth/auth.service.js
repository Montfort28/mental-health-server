"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailExists = checkEmailExists;
exports.createUser = createUser;
exports.loginUser = loginUser;
exports.verifyEmail = verifyEmail;
exports.requestPasswordReset = requestPasswordReset;
exports.resetPassword = resetPassword;
exports.getUserById = getUserById;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const SALT_ROUNDS = 10;
async function checkEmailExists(email) {
    const existingUser = await prisma_1.default.user.findUnique({
        where: { email }
    });
    return !!existingUser;
}
async function createUser(name, email, password) {
    const hashedPassword = await bcrypt_1.default.hash(password, SALT_ROUNDS);
    const user = await prisma_1.default.user.create({
        data: {
            email,
            passwordHash: hashedPassword,
            name,
            isEmailVerified: false
        }
    });
    return user.id;
}
async function loginUser(email, password) {
    const user = await prisma_1.default.user.findUnique({
        where: { email },
        select: {
            id: true,
            email: true,
            passwordHash: true,
            name: true,
            isEmailVerified: true
        }
    });
    if (!user)
        return null;
    const validPassword = await bcrypt_1.default.compare(password, user.passwordHash);
    if (!validPassword)
        return null;
    const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    const { passwordHash, ...userWithoutPassword } = user;
    return {
        token,
        user: userWithoutPassword
    };
}
async function verifyEmail(userId) {
    await prisma_1.default.user.update({
        where: { id: userId },
        data: { isEmailVerified: true }
    });
}
async function requestPasswordReset(email) {
    const user = await prisma_1.default.user.findUnique({
        where: { email }
    });
    return (user === null || user === void 0 ? void 0 : user.id) || null;
}
async function resetPassword(userId, newPassword) {
    const hashedPassword = await bcrypt_1.default.hash(newPassword, SALT_ROUNDS);
    await prisma_1.default.user.update({
        where: { id: userId },
        data: { passwordHash: hashedPassword }
    });
}
async function getUserById(userId) {
    const user = await prisma_1.default.user.findUnique({
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
//# sourceMappingURL=auth.service.js.map