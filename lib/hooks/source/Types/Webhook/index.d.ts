import Embed from "../Embed";
import Attachment from "../Attachment";
import User from "../User";

declare namespace input {
  export interface PATCH {
    name?: string;
    avatar?: string;
    channel_id?: string;
  }

  interface Base {
    username?: string;
    avatar_url?: string;
    tts?: boolean;
  }

  interface Content {
    content: string;
  }

  interface File {
    file: Attachment | string;
  }

  interface Embeds {
    embeds: Embed[];
  }

  export type POST = (Base & Content) | File | Embeds;
}

declare namespace response {
  export interface GET {
    id: string;
    channel_id: string;
    guild_id: string;
    user?: string;
    name: string;
    avatar: string;
    token: string;
  }
}
