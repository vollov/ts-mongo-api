test("match manager", () => {
  const name = "manager" + "$";
  const regex1 = new RegExp(name);

  const s1 = "admin,manager";
  const s2 = "admin";
  const s3 = "";
  expect(s1.match(regex1)).toBeTruthy();
  expect(s2.match(regex1)).toBeFalsy();
  expect(s3.match(regex1)).toBeFalsy();
});

test("match admin", () => {
  const name = "admin" + "$";
  const regex1 = new RegExp(name);
  const s1 = "admin,manager";
  const s2 = "admin";
  const s3 = "";
  expect(s1.match(regex1)).toBeFalsy();
  expect(s2.match(regex1)).toBeTruthy();
  expect(s3.match(regex1)).toBeFalsy();
});
