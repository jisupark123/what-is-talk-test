import { NextApiRequest, NextApiResponse } from 'next';
import { Vote } from '../../../data_vote';

const day = 24 * 60 * 60 * 1000;
const hour = 60 * 60 * 1000;

interface Data {
  voteId: number;
  title: string;
  desc: string | null;
  categories: {
      name: string;
      member: { id: number; name: string; profileImage: string }[];
  }[];
  multiSelection: boolean;
  anonymousVote: boolean;
  includingDeadline: boolean;
  deadline: Date;
  creator : String;
  createDate : Date;
}

const data: Data[] = [
  {
    voteId: 1,
    title: '김희윤 죽일까?',
    desc: '김희윤을 죽여야 하는 이유는 명백하다. 김희윤은 적폐다. 대한민국의 4대악 중 하나이다. 나는 그를 죽이고 싶다. 당신들은 내 의견에 동의하는가?',
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
    multiSelection: false,
    anonymousVote: false,
    includingDeadline: true,
    deadline: new Date(new Date().getTime() + day * 20 + hour * 10),
    creator : '송하영',
    createDate : new Date(new Date().getTime() + day * 20 + hour * 10)
    
  },
  {
    voteId: 2,
    title: '김희윤 팰까?',
    desc: '김희윤을 패야 하는 이유는 명백하다. 김희윤은 적폐다. 대한민국의 4대악 중 하나이다. 나는 그를 패고 싶다. 당신들은 내 의견에 동의하는가?',
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
    multiSelection: false,
    anonymousVote: true,
    includingDeadline: false,
    deadline: new Date(new Date().getTime() + day * 20 + hour * 10),
    creator : '송하영',
    createDate : new Date(new Date().getTime() + day * 20 + hour * 10)

  },
  {
    voteId: 3,
    title: '점심 뭐 먹지?',
    desc: null,
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
    multiSelection: true,
    anonymousVote: false,
    includingDeadline: true,
    deadline: new Date(new Date().getTime() + day * 10 + hour * 8),
    creator : '송하영',
    createDate : new Date(new Date().getTime() + day * 20 + hour * 10)

  },
  {
    voteId: 4,
    title: '코딩 언제 할까?',
    desc: '오늘 밤 ㄱㅊ?',
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
    multiSelection: false,
    anonymousVote: false,
    includingDeadline: false,
    deadline: new Date(new Date().getTime() + day * 20 + hour * 10),
    creator : '송하영',
    createDate : new Date(new Date().getTime() + day * 20 + hour * 10)

  },
  {
    voteId: 5,
    title: '제일 좋아하는 마약은?',
    desc: null,
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
    multiSelection: true,
    anonymousVote: true,
    includingDeadline: false,
    deadline: new Date(new Date().getTime() + day * 20 + hour * 10),
    creator : '송하영',
    createDate : new Date(new Date().getTime() + day * 20 + hour * 10)
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ votes: data });
}
