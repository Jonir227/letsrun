import { HorseProfile } from '../../models';
import { parseHorseGameDate } from './horseUtil';

const testHorseProfile = {
  gameDate: [2019, 10, 12]
} as HorseProfile;

describe('Test Set of HorseUtil', () => {
  test('parseHorseGameDate should be return proper parsed readable date', () => {
    expect(parseHorseGameDate(testHorseProfile)).toBe('2019년 10월 12일');
  });
});
