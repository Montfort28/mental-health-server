import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { router as authRoutes } from './auth/auth.routes';
import breathingRoutes from './mentalHealth/breathing.routes';
import forumRoutes from './forum/forum.routes';
import gardenRoutes from './garden/garden.routes';
import mentalHealthRoutes from './mentalHealth/mentalHealth.routes';
import gamesRoutes from './games/games.routes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/breathing', breathingRoutes);
app.use('/api/community', forumRoutes);
app.use('/api/garden', gardenRoutes);
app.use('/api/mental-health', mentalHealthRoutes);
app.use('/api/games', gamesRoutes);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/breathing', breathingRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/garden', gardenRoutes);
app.use('/api/mental-health', mentalHealthRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/resources', resourcesRoutes);

app.get('/', (_req, res) => {
  res.send('Safe Haven API is running');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
