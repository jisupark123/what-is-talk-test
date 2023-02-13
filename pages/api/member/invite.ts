import { sampleData } from './../../../data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { groupId } = req.query;
  try {
    const group = sampleData.filter(
      (data) => data.group_id + '' === groupId!
    )[0];
    const data = {
      group_name: group.group_name,
      invite_code: group.invite_code,
    };
    return res.status(200).json({ data });
  } catch {
    return res.status(404).json({ error: 'invalid request' });
  }
}
