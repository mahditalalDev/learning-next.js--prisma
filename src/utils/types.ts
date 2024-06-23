export type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type JWTPayloadType = {
  isAdmin: boolean;
  username: string;
  id: number;
};
