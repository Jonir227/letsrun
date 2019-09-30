import {
  getHorseProfile,
  getHorseProfileEntityAction
} from "../../actions/horseProfileActions";
import horseProfileUsingGET from "./data/horseProfileUsingGET.mock.json";
import horseProfile from "./horseProfile";

describe("horseInfo Reducer", () => {
  test("should be retrun proper return value when HORSE_PROFILE is provided", () => {
    const { REQUEST, SUCCESS, FAILURE } = getHorseProfileEntityAction.action;
    const start = horseProfile(undefined, getHorseProfile(123));
    expect(start).toEqual({
      getHorseInfoStatus: "INIT",
      horseProfile: null
    });
    const request = horseProfile(start, REQUEST());
    expect(request).toEqual({
      getHorseInfoStatus: "REQUEST",
      horseProfile: null
    });
    const success = horseProfile(
      request,
      SUCCESS({
        horseProfile: horseProfileUsingGET.horseProfile
      })
    );
    expect(success).toEqual({
      getHorseInfoStatus: "SUCCESS",
      horseProfile: horseProfileUsingGET.horseProfile
    });
    const failure = horseProfile(request, FAILURE());
    expect(failure).toEqual({
      getHorseInfoStatus: "FAILURE",
      horseProfile: null
    });
    const failureAfterSuccess = horseProfile(success, FAILURE());
    expect(failureAfterSuccess).toEqual({
      getHorseInfoStatus: "FAILURE",
      horseProfile: null
    });
  });
});
