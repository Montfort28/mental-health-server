/*
  Warnings:

  - Added the required column `category` to the `resources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `resources` table without a default value. This is not possible if the table is not empty.
  - Made the column `type` on table `resources` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `resources` ADD COLUMN `category` ENUM('anxiety', 'depression', 'stress', 'sleep', 'mindfulness', 'self-care', 'relationships', 'personal-growth') NOT NULL,
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `difficulty` ENUM('beginner', 'intermediate', 'advanced') NULL,
    ADD COLUMN `duration` INTEGER NULL,
    ADD COLUMN `tags` JSON NOT NULL,
    ADD COLUMN `thumbnail` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `type` ENUM('article', 'meditation', 'breathing', 'exercise', 'journal', 'affirmation', 'game', 'visualization', 'story', 'coping-tool') NOT NULL;
