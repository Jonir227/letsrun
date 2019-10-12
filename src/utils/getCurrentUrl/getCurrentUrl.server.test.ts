/**
 * @jest-environment node
 */

import getCurrentUrl from "./getCurrentUrl";

describe("GetCurrentUrl in Server", () => {
  test("Should be return full location when its called in server", () => {
    const url = "/api/path";
    expect(getCurrentUrl(url)).toBe("http://localhost:3000/api/path");
  });
  test("Should be return proper port when it's provided", () => {
    process.env.PORT = "8088";
    const url = "/api/path";
    expect(getCurrentUrl(url)).toBe("http://localhost:8088/api/path");
  });
});
