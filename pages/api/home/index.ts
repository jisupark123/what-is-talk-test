import { NextApiRequest, NextApiResponse } from 'next';

interface Group {
  id: number;
  name: string;
  image_url: string;
  member_count: number;
}

export interface HomeData {
  group_list: Group[];
}

export const homeData: HomeData = {
  group_list: [
    {
      id: 1,
      name: '모임톡',
      image_url:
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple112%2Fv4%2F2f%2F51%2F78%2F2f51787c-db40-5376-4f94-aa10f969c3f3%2FAppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png%2F1200x630wa.png&type=l340_165',
      member_count: 8,
    },
    {
      id: 2,
      name: '맥도날드',
      image_url:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA0MjJfMTkx%2FMDAxNTg3NTM0OTQwNjYx.AD1cWKi344Sw6Z9s7k9KEdHEl2nVvp04s0TlcfXze3Yg.sg36ciPHleEg9IRo54b6xe4ciqwocfFnrf4Zxp4wbXsg.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_-_2020-04-22T145520.897.jpg&type=a340',
      member_count: 100,
    },
    {
      id: 3,
      name: '맘스터치',
      image_url:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjNfMjE0%2FMDAxNjE5MTgxNTQ0NzE3.ArOt7muDuCaYKIS1Qtn5Mubq1VzBxHW0FBdvRZ6jOlMg.8XkSRnRwf8JbxZ-LaEWF_Lk3fqwsx8MenWCziq6e3xYg.PNG.hsomang%2F%25B8%25BE%25BD%25BA%25C5%25CD%25C4%25A1%25B7%25CE%25B0%25ED%25B8%25F0%25C0%25BD-01.png&type=a340',
      member_count: 80,
    },
    {
      id: 4,
      name: '롯데월드',
      image_url:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MDFfMTU4%2FMDAxNDkzNjQ4OTU0NzE2.pPik0_--68KbHdkTgDi8tQPGoBbBN3nNw3MREHldPzkg.Idc0g6W8vgSqsSKARPkx1-3_YWgQSRusfpE8A9pQaAIg.PNG.youtheye838%2FB7%253FA5BFF9B5E5_B7%253FED_%25281%2529.png&type=a340',
      member_count: 300,
    },
    {
      id: 5,
      name: 'Apple',
      image_url:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjRfMTAy%2FMDAxNjE5MjM3MzE3ODA2.OcaLXyabow2j1L29QMvu-W8_O_E60XdU2iMUcFUmZ1sg.JQhssh6sLMMbqotJvbH78fbz6hdw-0wcPhJ4WYIhFH8g.PNG.jjay7620%2FLV_%252813%2529.png&type=ofullfill340_600_png',
      member_count: 8,
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  return res.status(200).json(homeData);
}
