import { HorseProfile } from '../../models';

export const getHorseDate = ({ gameDate }: HorseProfile) => {
  const [year, month, day] = gameDate;
  return `${year}년 ${month}월 ${day}일`;
};
