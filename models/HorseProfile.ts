export interface HorseProfile {
  number: string;
  name: string;
  age: number;
  createDate: null | string;
  home: string; // TODO: enum형태인지?
  gameDate: number[]; // [년, 월, 일]
  day: string;
  horseNo: number;
  sex: string; // TODO: enum형태인지? "거세마", "암말", "숫말..>"
  burdenWg: number;
  rating: number;
  firstCntTotal: number;
  firstCntYear: number;
  secondCntTotal: number;
  secondCntYear: number;
  thirdCntTotal: number;
  thirdCntYear: number;
  gameCntTotal: number;
  gameCntYear: number;
  gameDays: number;
  gamePlace: string; // TODO: "부산경남" | "서울" | "제주" >> Enum확인 필요
  ownerName: string;
  ownerNo: number;
  jockeyName: string;
  jockeyNo: number;
  rank: string; // TODO: enum?
  gameStartTime: string;
  trainerName: string;
  trainerNo: number;
  horseCnt: number;
  distance: number;
  prizeCondition: string;
  ageCondition: string;
  extraWg: string;
  gameName: string;
  reachMoney1: number;
  reachMoney2: number;
  reachMoney3: number;
  reachMoney4: number;
  reachMoney5: number;
  moneyTotal: number;
  moneyYear: number;
  moneyHalfYear: number;
}
