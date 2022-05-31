import clsx from "clsx";
interface Props {
  link: string;
  width: number;
  height: number;
  className?: string;
}
import Image from "next/image";

export default function Avatar({ link, width, height, className }: Props) {
  return (
    <Image
      src={`${link}`}
      alt="Logo"
      width={width}
      height={height}
      className={className || "w-8 rounded-full bg-header"}
    />
  );
}
