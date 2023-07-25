import { setCookie, getCookies } from "cookies-next";
const { createHash } = require("node:crypto");

import { fakeDB } from "../../fakeDB.json";

export async function getUserData(email) {
  const users = fakeDB.filter((user) => {
    return user.email === email;
  });

  const passwordlessUsers = users.map(({ password, ...users }) => users);
  return passwordlessUsers;
}
export async function getUserPassword(email) {
  const users = fakeDB.filter((user) => {
    return user.email === email;
  });
  return users[0].password;
}
