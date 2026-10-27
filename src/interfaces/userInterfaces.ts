export type UserProfile = {
  username: string;
  email: string;
  firstName: string;
  lastName: string | null;
  avatarUrl: string | null;
  lastActiveAt: Date;
};

export type HeaderUserIcon = {
  username: string;
  firstName: string;
  avatarUrl: string | null;
};
