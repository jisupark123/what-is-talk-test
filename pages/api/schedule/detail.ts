import { sampleData } from './../../../data';
import { NextApiRequest, NextApiResponse } from 'next';
import { scheduleData } from '../../../data2';
import Error from 'next/error';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { scheduleId } = req.query;
  try {
    const schedules = scheduleData.map((group) => group.schedules).flat();
    const data = schedules.filter(
      (schedule) => schedule.id + '' === scheduleId
    );
    if (!data.length) {
      throw Error;
    }

    return res.status(200).json({ data });
  } catch {
    return res.status(404).json({ error: 'invalid request' });
  }
}
