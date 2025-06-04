/*
  Warnings:

  - The values [article,meditation,breathing,exercise,journal,affirmation,game,visualization,story,coping-tool] on the enum `resources_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [anxiety,depression,stress,sleep,mindfulness,self-care,relationships,personal-growth] on the enum `resources_category` will be removed. If these variants are still used in the database, this will fail.
  - The values [beginner,intermediate,advanced] on the enum `resources_difficulty` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `breathing_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forum_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game_progress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `garden_elements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `journal_entries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mental_health_metrics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_preferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `breathing_sessions` DROP FOREIGN KEY `breathing_sessions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `forum_comments` DROP FOREIGN KEY `forum_comments_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `forum_comments` DROP FOREIGN KEY `forum_comments_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `forum_posts` DROP FOREIGN KEY `forum_posts_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `forum_posts` DROP FOREIGN KEY `forum_posts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `game_progress` DROP FOREIGN KEY `game_progress_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `garden_elements` DROP FOREIGN KEY `garden_elements_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `journal_entries` DROP FOREIGN KEY `journal_entries_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `mental_health_metrics` DROP FOREIGN KEY `mental_health_metrics_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_preferences` DROP FOREIGN KEY `user_preferences_user_id_fkey`;

-- AlterTable
ALTER TABLE `resources` MODIFY `type` ENUM('ARTICLE', 'AUDIO', 'VIDEO', 'WORKSHEET', 'INTERACTIVE', 'CHECKLIST', 'MEDITATION', 'BREATHING', 'ASSESSMENT', 'CRISIS') NOT NULL,
    MODIFY `category` ENUM('UNDERSTANDING_MENTAL_HEALTH', 'COPING_STRATEGIES', 'CRISIS_SUPPORT', 'DAILY_SELF_CARE', 'PROFESSIONAL_SUPPORT', 'EDUCATIONAL_LIBRARY') NOT NULL,
    MODIFY `difficulty` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED') NULL,
    MODIFY `tags` TEXT NOT NULL,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- DropTable
DROP TABLE `breathing_sessions`;

-- DropTable
DROP TABLE `forum_categories`;

-- DropTable
DROP TABLE `forum_comments`;

-- DropTable
DROP TABLE `forum_posts`;

-- DropTable
DROP TABLE `game_progress`;

-- DropTable
DROP TABLE `garden_elements`;

-- DropTable
DROP TABLE `journal_entries`;

-- DropTable
DROP TABLE `mental_health_metrics`;

-- DropTable
DROP TABLE `user_preferences`;

-- CreateTable
CREATE TABLE `resource_bookmarks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `resource_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `resource_bookmarks_user_id_resource_id_key`(`user_id`, `resource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resource_progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `resource_id` INTEGER NOT NULL,
    `progress` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `resource_progress_user_id_resource_id_key`(`user_id`, `resource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resource_notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `resource_id` INTEGER NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resource_analytics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `resource_id` INTEGER NOT NULL,
    `eventType` VARCHAR(191) NOT NULL,
    `metadata` JSON NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resource_bookmarks` ADD CONSTRAINT `resource_bookmarks_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_bookmarks` ADD CONSTRAINT `resource_bookmarks_resource_id_fkey` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_progress` ADD CONSTRAINT `resource_progress_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_progress` ADD CONSTRAINT `resource_progress_resource_id_fkey` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_notes` ADD CONSTRAINT `resource_notes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_notes` ADD CONSTRAINT `resource_notes_resource_id_fkey` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_analytics` ADD CONSTRAINT `resource_analytics_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource_analytics` ADD CONSTRAINT `resource_analytics_resource_id_fkey` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
