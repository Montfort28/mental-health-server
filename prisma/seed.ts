import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Create forum categories
  const categories = await Promise.all([
    prisma.forumCategory.upsert({
      where: { name: 'General Discussion' },
      update: {},
      create: { name: 'General Discussion' }
    }),
    prisma.forumCategory.upsert({
      where: { name: 'Anxiety Support' },
      update: {},
      create: { name: 'Anxiety Support' }
    }),
    prisma.forumCategory.upsert({
      where: { name: 'Depression Support' },
      update: {},
      create: { name: 'Depression Support' }
    }),
    prisma.forumCategory.upsert({
      where: { name: 'Self Care Tips' },
      update: {},
      create: { name: 'Self Care Tips' }
    }),
    prisma.forumCategory.upsert({
      where: { name: 'Success Stories' },
      update: {},
      create: { name: 'Success Stories' }
    })
  ]);

  // Create sample resources
  const resources = await Promise.all([
    prisma.resource.upsert({
      where: { id: 1 },
      update: {},
      create: {
        title: '5-Minute Breathing Exercise',
        type: 'meditation',
        content: 'A simple breathing exercise to help calm anxiety and reduce stress. Focus on slow, deep breaths.',
        url: null
      }
    }),
    prisma.resource.upsert({
      where: { id: 2 },
      update: {},
      create: {
        title: 'Understanding Anxiety: A Beginner\'s Guide',
        type: 'article',
        content: 'Learn about anxiety symptoms, triggers, and healthy coping strategies.',
        url: null
      }
    }),
    prisma.resource.upsert({
      where: { id: 3 },
      update: {},
      create: {
        title: 'Daily Mood Journal Prompts',
        type: 'exercise',
        content: 'Reflective questions to help you understand your emotions and track your mental health journey.',
        url: null
      }
    }),
    prisma.resource.upsert({
      where: { id: 4 },
      update: {},
      create: {
        title: 'Progressive Muscle Relaxation',
        type: 'meditation',
        content: 'A guided technique to release physical tension and promote mental relaxation.',
        url: null
      }
    }),
    prisma.resource.upsert({
      where: { id: 5 },
      update: {},
      create: {
        title: 'Building Healthy Sleep Habits',
        type: 'article',
        content: 'Tips for improving sleep quality, which is crucial for mental health and wellbeing.',
        url: null
      }
    })
  ]);

  // Create a demo user (optional - for testing)
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@safehaven.com' },
    update: {},
    create: {
      email: 'demo@safehaven.com',
      passwordHash: '$2b$10$8eJ5F9z8KX8qX9J8X8J8X8J8X8J8X8J8X8J8X8J8X8J8X8J8X8J8X', // "password123"
      isEmailVerified: true
    }
  });

  // Create sample forum post
  await prisma.forumPost.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Welcome to Safe Haven Community',
      content: 'This is a safe space for everyone to share, support, and grow together. Please be kind and respectful to all community members.',
      isAnonymous: false,
      userId: demoUser.id,
      categoryId: categories[0].id
    }
  });

  console.log('Database seeding completed successfully!');
  console.log(`Created ${categories.length} forum categories`);
  console.log(`Created ${resources.length} resources`);
  console.log('Created demo user and welcome post');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });