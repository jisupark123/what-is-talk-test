export interface GroupSchedule {
  group_id: number;
  group_name: string;
  start_year: Date;
  schedules: Schedule[];
}

interface Schedule {
  id: number;
  title: string;
  desc: string;
  startDate: Date;
  endDate: Date;
  includingTime: boolean;
  includingEndDate: boolean;
}

const group_names = ['도둑들', '맛있는 녀석들', '용감한 녀석들'];
const titles = [
  '술먹기',
  'UMC3기 데모데이',
  '롤드컵',
  '해커톤',
  '더글로리',
  '스키장',
  '카페 가기',
  '영화 보기',
  '산책하기',
  '공원에서 놀기',
  '새벽 산책',
  '요리하기',
  '쇼핑하기',
  '낚시하기',
  '친구들과 약속하기',
  '노래방 가기',
  '요가하기',
  '독서하기',
  '게임하기',
  '여행하기',
  '볼링하기',
  '스키하기',
  '농구하기',
  '스케이트 타기',
  '골프하기',
  '승마하기',
  '바다에서 물고기 사냥하기',
  '경마하기',
  '축구 관람하기',
  '뮤지컬 관람하기',
];

export const scheduleData = generateData(2015);

function generateData(startYear: number) {
  const data: GroupSchedule[] = [];
  const now = new Date();
  const endYear = startYear + 10;

  let id = 1; // to keep track of unique ids
  for (let i = 0; i < group_names.length; i++) {
    const group_id = i + 1;
    const group_name = group_names[i];
    const start_year = new Date(startYear, 0, 1);
    const schedules: Schedule[] = [];

    for (let j = 0; j < 100; j++) {
      const title = titles[Math.floor(Math.random() * titles.length)];
      const desc = `Desc for schedule ${id}`;
      const startDate = new Date(
        start_year.getTime() + Math.random() * 365 * 24 * 60 * 60 * 1000
      );
      const endDate = new Date(
        startDate.getTime() + Math.random() * 3 * 24 * 60 * 60 * 1000
      );
      const includingTime = Math.random() >= 0.5;
      const includingEndDate = Math.random() >= 0.5;

      schedules.push({
        id,
        title,
        desc,
        startDate,
        endDate,
        includingTime,
        includingEndDate,
      });
      id++;
    }

    data.push({
      group_id,
      group_name,
      start_year,
      schedules,
    });
  }
  return data;
}
