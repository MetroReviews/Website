import EmbedAuthor from "./Author";
import EmbedField from "./Field";
import EmbedFooter from "./Footer";
import EmbedImage from "./Image";
import EmbedProvider from "./Provider";
import EmbedThumbnail from "./Thumbnail";
import EmbedVideo from "./Video";

export default interface Embed {
  title?: string;
  type?: "rich";
  url?: string;
  description?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}
