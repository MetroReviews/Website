import Attachment from "../../Attachment";

export default interface EmbedAuthor {
  name?: string;
  url?: string;
  icon_url?: string | Attachment;
  proxy_icon_url?: string;
}
