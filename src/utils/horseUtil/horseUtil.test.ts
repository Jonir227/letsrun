import { HorseProfile } from '../../models';
import { getHorseDate } from './HorseUtil';

const testHorseProfile = {
  gameDate: [2019, 10, 12]
} as HorseProfile;

describe('Test Set of HorseUtil', () => {
  test('getHorseDate sould be return proper parsed readable date', () => {
    expect(getHorseDate(testHorseProfile)).toBe('2019년 10월 12일');
  });
});
