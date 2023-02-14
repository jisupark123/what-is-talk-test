import { NextApiRequest, NextApiResponse } from 'next';
import { homeData, HomeData } from './home';

interface Data extends HomeData {
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
  group_list: homeData.group_list,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(data);
}
