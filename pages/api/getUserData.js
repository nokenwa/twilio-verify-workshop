import data from "../../data.json";

export async function getUserData(email) {
  const users = data.fakeDB.filter((user) => {
    return user.email === email;
  });

  const passwordlessUsers = users.map(({ password, ...users }) => users);
  return passwordlessUsers;
}
export async function getUserPassword(email) {
  const users = data.fakeDB.filter((user) => {
    return user.email === email;
  });
  return users[0].password;
}
