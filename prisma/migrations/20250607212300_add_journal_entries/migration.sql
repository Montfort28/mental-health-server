/*
  Warnings:

  - You are about to alter the column `mood` on the `journal_entries` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - Made the column `created_at` on table `journal_entries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `journal_entries` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `journal_entries` DROP FOREIGN KEY `journal_entries_ibfk_1`;

-- DropIndex
DROP INDEX `user_id` ON `journal_entries`;

-- AlterTable
ALTER TABLE `garden_elements` ADD COLUMN `activity_history` JSON NOT NULL,
    ADD COLUMN `mood_history` JSON NOT NULL;

-- AlterTable
ALTER TABLE `journal_entries` MODIFY `mood` VARCHAR(191) NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `journal_entries` ADD CONSTRAINT `journal_entries_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
