import { NextApiRequest, NextApiResponse } from 'next';
import { sampleData } from '../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { groupId } = req.query;
  try {
    const group = sampleData.filter(
      (group) => group.group_id + '' === groupId
    )[0];
    const data = {
      group_id: group.group_id,
      group_name: group.group_name,
      member_count: group.member_list.length,
    };

    return res.status(200).json({ data });
  } catch {
    return res.status(404).json({ error: 'invalid request' });
  }
}
