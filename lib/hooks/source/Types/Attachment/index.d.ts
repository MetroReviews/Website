export default interface Attachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width: number;
}
