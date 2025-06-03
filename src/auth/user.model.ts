export interface User {
  id: number;
  email: string;
  password_hash: string;
  is_email_verified: boolean;
  created_at: Date;
  updated_at: Date;
}
