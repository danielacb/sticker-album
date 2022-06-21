export type User = {
  id: string;
  email: string;
};

export type Player = {
  created_at: string;
  id: string;
  name: string;
  number: number;
  picture_url: string;
  probability: number;
  team_id: number;
};
