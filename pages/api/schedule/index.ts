import { NextApiRequest, NextApiResponse } from 'next';
import { scheduleData } from '../../../data2';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { groupId } = req.query;
  try {
    const data = scheduleData.filter(
      (group) => group.group_id + '' === groupId
    )[0];
    return res.status(200).json({ data });
  } catch {
    return res.status(404).json({ error: 'invalid request' });
  }
}
