/**
 * @jest-environment node
 */

import getCurrentUrl from "../../utils/getCurrentUrl";

test("Sould be return full location when its called in server", () => {
  const url = "/api/path";
  expect(getCurrentUrl(url)).toBe("http://localhost:3000/api/path");
});
