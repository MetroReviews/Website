import Attachment from "../../Attachment";

export default interface EmbedFooter {
  text: string;
  icon_url?: string | Attachment;
  proxy_icon_url?: string;
}
