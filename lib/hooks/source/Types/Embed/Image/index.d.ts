import Attachment from "../../Attachment";

export default interface EmbedImage {
  url: string | Attachment;
  proxy_url?: string;
  height?: number;
  width?: number;
}
