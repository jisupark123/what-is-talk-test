import { NextApiRequest, NextApiResponse } from "next";
import { detailData } from "./detail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { voteId } = req.query;
  try {
    const vote = detailData.filter((vote) => vote.voteId + "" === voteId)[0];
    const data = {
      voteId: vote.voteId,
      categories: vote.categories,
    };

    return res.status(200).json({ data });
  } catch {
    return res.status(404).json({ error: "invalid request" });
  }
}
