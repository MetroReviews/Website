export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flages: number;
  flags: number;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
}

export interface BlogAuthor {
  name: string;
  picture: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: BlogAuthor;
  path: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: string;
}
