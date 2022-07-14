export default interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot?: boolean;
  mfa_enabled?: boolean;
  locale?: string;
  verified?: string;
  email?: string;
  flags?: number;
  premium_type: number;
}
