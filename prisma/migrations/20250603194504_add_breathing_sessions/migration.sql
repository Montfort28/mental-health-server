-- CreateTable
CREATE TABLE `breathing_sessions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `pattern` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `cycles` INTEGER NOT NULL DEFAULT 0,
    `stress_level` INTEGER NULL,
    `notes` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `breathing_sessions` ADD CONSTRAINT `breathing_sessions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
