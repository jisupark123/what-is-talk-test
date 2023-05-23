import { NextApiRequest, NextApiResponse } from "next";
import { sampleData } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, groupId } = req.query;
  try {
    const group = sampleData.filter(
      (group) => group.group_id + "" === groupId
    )[0];
    const member = group.member_list.filter(
      (member) => member.id + "" === userId
    )[0];
    return res.status(200).json({ data: member });
  } catch {
    return res.status(404).json({ error: "invalid request" });
  }
}
