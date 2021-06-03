export interface DiscordUser {
  id: number;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
}

export interface DiscordMember {
  user: DiscordUser;
  roles: string[];
  nick: string | null;
}

export interface DiscordRequestOption {
  name: string;
  value: string | null;
}

export interface DiscordRequestData {
  id: string;
  name: string;
  options: DiscordRequestOption[] | null;
}

export interface DiscordRequest {
  type: number;
  token: string;
  member: DiscordMember | null;
  id: string;
  guild_id: string | null;
  channel_id: string | null;
  data: DiscordRequestData;
}
