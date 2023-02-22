export interface Vote {
  voteId: number;
  title: string;
  desc: string;
  categories: [
    {
      name: string;
      member: [{ id: number; name: string; profileImage: string }];
    }
  ];
  multiSelection: boolean;
  anonymousVote: boolean;
  includingDeadline: boolean;
  deadline: Date;
  creator : String;
  createDate : Date;
}
