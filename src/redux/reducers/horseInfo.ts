import produce from 'immer';
import { HorseProfile } from '../../models';
import { matchProduceAction } from '../../utils/matchAction/matchAction';
import { HorseProfileAction } from '../actions';
import { GET_HORSE_PROFILE_ENTITY } from '../actionTypes';

export interface IHorseProfileStore {
  getHorseInfoStatus: Status;
  horseProfile: HorseProfile | null;
}

const defaultState: IHorseProfileStore = {
  getHorseInfoStatus: 'INIT',
  horseProfile: null
};

const horseProfile = produce(
  matchProduceAction<IHorseProfileStore, HorseProfileAction>(
    {
      [GET_HORSE_PROFILE_ENTITY.REQUEST]: state => {
        state.getHorseInfoStatus = 'REQUEST';
      },
      [GET_HORSE_PROFILE_ENTITY.SUCCESS]: (state, { payload }) => {
        state.getHorseInfoStatus = 'SUCCESS';
        state.horseProfile = payload.horseProfile;
      },
      [GET_HORSE_PROFILE_ENTITY.FAILURE]: state => {
        state.getHorseInfoStatus = 'FAILURE';
      }
    },
    defaultState
  )
);

export default horseProfile;
