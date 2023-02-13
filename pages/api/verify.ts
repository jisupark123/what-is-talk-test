import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  auth_provider: string;
  token: string;
  user_id: number;
  user_name: string;
}

let data: Data = {
  auth_provider: 'kakao',
  token: '1k3jeknwfjn',
  user_id: 1,
  user_name: '김희윤',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('왔다');
  return res.status(200).json(data);
}
