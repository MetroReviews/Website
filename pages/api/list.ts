import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://catnip.metrobots.xyz/lists");
  const data = await response.json();
  res.status(200).json(data);
};
