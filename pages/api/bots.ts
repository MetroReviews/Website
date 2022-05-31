import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://catnip.metrobots.xyz/bots");
  const data = await response.json();
  res.status(200).json(data);
};
