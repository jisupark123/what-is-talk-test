export interface Group {
  group_id: number;
  group_name: string;
  invite_code: string;
  member_list: Member[];
}

export interface Member {
  id: number;
  profile_url: string;
  name: string;
  role: Roll[];
  joined_date: Date;
}

interface Roll {
  name: String;
  color: String;
}

export const sampleData: Group[] = [
  {
    group_id: 1,
    group_name: '도둑들',
    invite_code: 'XW8913',
    member_list: [],
  },
  {
    group_id: 2,
    group_name: '맛있는 녀석들',
    invite_code: 'IU982W',
    member_list: [],
  },
  {
    group_id: 3,
    group_name: '용감한 녀석들',
    invite_code: '54NSX1',
    member_list: [],
  },
];

const sampleMembers: Member[] = [
  {
    id: 1,
    profile_url:
      'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple112%2Fv4%2F2f%2F51%2F78%2F2f51787c-db40-5376-4f94-aa10f969c3f3%2FAppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png%2F1200x630wa.png&type=l340_165',
    name: '김희윤',
    joined_date: new Date(),
    role: [
      { name: '백수', color: 'red' },
      { name: '알바', color: 'yellow' },
      { name: '관종', color: 'blue' },
    ],
  },
  {
    id: 2,
    profile_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA0MjJfMTkx%2FMDAxNTg3NTM0OTQwNjYx.AD1cWKi344Sw6Z9s7k9KEdHEl2nVvp04s0TlcfXze3Yg.sg36ciPHleEg9IRo54b6xe4ciqwocfFnrf4Zxp4wbXsg.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_-_2020-04-22T145520.897.jpg&type=a340',
    name: '박상민',
    joined_date: new Date(),
    role: [
      { name: '군인', color: 'orange' },
      { name: '근로', color: 'pink' },
    ],
  },
  {
    id: 3,
    profile_url:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjNfMjE0%2FMDAxNjE5MTgxNTQ0NzE3.ArOt7muDuCaYKIS1Qtn5Mubq1VzBxHW0FBdvRZ6jOlMg.8XkSRnRwf8JbxZ-LaEWF_Lk3fqwsx8MenWCziq6e3xYg.PNG.hsomang%2F%25B8%25BE%25BD%25BA%25C5%25CD%25C4%25A1%25B7%25CE%25B0%25ED%25B8%25F0%25C0%25BD-01.png&type=a340',
    name: '박지수',
    joined_date: new Date(),
    role: [
      { name: '천재 개발자', color: 'red' },
      { name: '대통령', color: 'blue' },
    ],
  },
];

for (let i = 0; i < sampleData.length; i++) {
  for (let j = 0; j < 100; j++) {
    const randNum = Math.floor(Math.random() * sampleData.length);
    sampleData[i].member_list.push(sampleMembers[randNum]);
  }
}
