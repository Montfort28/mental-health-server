/*
  Warnings:

  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mental_health_metrics` ADD COLUMN `activities` JSON NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `name` VARCHAR(191) NOT NULL;
