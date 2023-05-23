import { sampleData } from "./../../../data";
import { NextApiRequest, NextApiResponse } from "next";
import { Group, Member } from "../../../data";

interface Data {
  member_list: Member[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { groupId } = req.query;
  try {
    const data = sampleData.filter((data) => data.group_id + "" === groupId!)[0]
      .member_list;
    return res.status(200).json({ member_list: data });
  } catch {
    return res.status(404).json({ error: "invalid request" });
  }
}
