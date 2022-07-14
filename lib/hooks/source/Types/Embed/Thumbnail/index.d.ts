import Attachment from "../../Attachment";

export default interface EmbedThumbnail {
  url: string | Attachment;
  proxy_url?: string;
  height?: number;
  width?: number;
}
