import { NextApiRequest, NextApiResponse } from 'next';

interface VoteDetail {
  voteId: number;
  categories: {
      name: string;
      member: { id: number; name: string; profileImage: string }[];
  }[];
}


export const detailData: VoteDetail[] = [
  {
    voteId: 1,
    categories: [
        {
          name: '찬성',
          member: [{id:1, name:"김희윤", profileImage:"없어"},{id:2, name:"탑쥐수", profileImage:"없어"}]
        },
        {
          name: '반대',
          member: [{id:1, name:"김희윤", profileImage:"없어"}]
        }
    ],    
  },
  {
    voteId: 2,
    categories: [
      {
        name: '찬성',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
      {
        name: '반대',
        member: [{id:1, name:"김인직", profileImage:"없어"}]
      }
  ],
  },
  {
    voteId: 3,
    categories: [
      {
        name: '라면',
        member: [{id:1, name:"김희윤", profileImage:"없어"},{id:2, name:"탑쥐수", profileImage:"없어"}]
      },
      {
        name: '국밥',
        member: [{id:1, name:"송하영", profileImage:"없어"}]
      }
  ],
  },
  {
    voteId: 4,
    categories: [
      {
        name: '10시',
        member: [{id:1, name:"김희윤", profileImage:"없어"},{id:2, name:"탑쥐수", profileImage:"없어"}]
      },
      {
        name: '10시반',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
      {
        name: '12시반',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
    ],
  },
  {
    voteId: 5,
    categories: [
      {
        name: '대마초',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
      {
        name: '코카인',
        member: [{id:1, name:"김희윤", profileImage:"없어"},{id:2, name:"탑쥐수", profileImage:"없어"}]
      },
      {
        name: '필로폰',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
      {
        name: '펜타닐',
        member: [{id:1, name:"김희윤", profileImage:"없어"}]
      },
      {
        name: '환각 버섯',
        member: [{id:1, name:"김희윤", profileImage:"없어"},{id:2, name:"탑쥐수", profileImage:"없어"}]
      },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ votes: detailData });
}
