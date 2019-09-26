import getCurrentUrl from "../../utils/getCurrentUrl";

test("Sould be return location", () => {
  const url = "/api/path";
  expect(getCurrentUrl(url)).toBe("/api/path");
});
