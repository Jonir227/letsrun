import { HorseProfile } from "../models";
import apiService from "../utils/apiService";

export const fetchHorseProfileUsingGET = async (horseId: number) => {
  const { data } = await apiService.get<{ horseProfile: HorseProfile }>(
    `/api/v1/horses/${horseId}`
  );
  return data;
};
