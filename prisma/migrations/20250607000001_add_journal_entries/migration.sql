-- Add JournalEntry model and enhance MentalHealthMetric
ALTER TABLE mental_health_metrics
ADD COLUMN energy_level INT,
ADD COLUMN gratitude TEXT,
ADD COLUMN sleep_quality INT;

CREATE TABLE
    journal_entries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        content TEXT NOT NULL,
        mood VARCHAR(255),
        tags JSON,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );