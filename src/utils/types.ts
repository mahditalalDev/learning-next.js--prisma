export type Article = {
  id: number;
  userId: number;
  title: string;
  description: string;
};

export type JWTPayloadType = {
  isAdmin: boolean;
  username: string;
  id: number;
};
