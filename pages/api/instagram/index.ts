import { NextApiRequest, NextApiResponse } from "next";

interface VoteDetail {
  userName: string;
  likeCount: number;
  content: string;
  imgUrl: string;
}

export const detailData: VoteDetail[] = [
  {
    userName: "John",
    likeCount: 100,
    content: "This is a great photo!",
    imgUrl:
      "https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp",
  },
  {
    userName: "Emily",
    likeCount: 75,
    content: "I had an amazing time at the beach today!",
    imgUrl: "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg",
  },
  {
    userName: "Michael",
    likeCount: 120,
    content: "Just finished reading an incredible book!",
    imgUrl:
      "https://image.kmib.co.kr/online_image/2022/1115/2022111421135195874_1668428031_0924273138.jpg",
  },
  {
    userName: "Sophia",
    likeCount: 50,
    content:
      "Enjoying a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day a cup of coffee on a rainy day.",
    imgUrl:
      "https://ynoblesse.com/wp-content/uploads/2022/08/297975306_1008248209844272_696700848492592655_n-1024x1024.jpg",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ votes: detailData });
}
