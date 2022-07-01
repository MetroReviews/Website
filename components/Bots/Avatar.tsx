import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "../Interface/Spinner";

interface Props {
  id: string;
}

export default function Avatar({ id }: Props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.fateslist.xyz/blazefire/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (!data) return <Spinner />;

  return (
    <>
      <Image
        src={
          data?.avatar
            ? data?.avatar
            : "https://cdn.discordapp.com/attachments/653733403841134600/985343961256300554/defaultUser.webp"
        }
        alt="Bot Logo"
        width={24}
        height={24}
        className="rounded-full h-24 w-24"
      />
    </>
  );
}
