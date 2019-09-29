import apiService from "../utils/apiService";

export const getHorseInfo = async (horseId: string) => {
  const data = apiService.get(`/api/horses/${horseId}`);
  return data;
};
