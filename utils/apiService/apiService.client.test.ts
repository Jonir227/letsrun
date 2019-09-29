jest.mock("axios");

import axios from "axios";
import apiSerivce from "./apiService";

const url = "/api/request";

describe("ApiSerivce", () => {
  test("should be request with proper url using GET", async () => {
    // @ts-ignore
    axios.get.mockReturnValue(Promise.resolve(1));

    const data = await apiSerivce.get(url);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(data).toBe(1);
  });
  test("should be request with proper url using POST", async () => {
    // @ts-ignore
    axios.post.mockReturnValue(Promise.resolve({ age: 27 }));

    const data = await apiSerivce.post(url, { name: "john" });
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(url, { name: "john" });
    expect(data).toEqual({ age: 27 });
  });
  test("should be request with proper url using PUT", async () => {
    // @ts-ignore
    axios.put.mockReturnValue({ success: true });

    const data = await apiSerivce.put(url);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(url);
    expect(data).toEqual({ success: true });
  });
  test("should be request with proper url using DELETE", async () => {
    const returnValue = "success";
    // @ts-ignore
    axios.delete.mockReturnValue(Promise.resolve(returnValue));

    const data = await apiSerivce.delete(url);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(url);
    expect(data).toBe(returnValue);
  });
});
